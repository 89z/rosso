'use strict';

function append(msg) {
   let fig = temp.content.firstElementChild.cloneNode(true);
   main.append(fig);
   let vid = fig.querySelector('video');
   // src
   vid.src = msg.src;
   vid.load();
   vid.onended = next;
   // poster
   vid.poster = msg.poster;
   // title
   fig.querySelector('.title').textContent = msg.title;
   // status
   fig.querySelector('.status').textContent = msg.status;
}

function next() {
   main.querySelector('figure').remove();
   let vid = main.querySelector('video');
   if (vid !== null) {
      vid.play();
   }
}

let main = document.querySelector('main');
let temp = document.querySelector('template');
browser.runtime.onMessage.addListener(append);
