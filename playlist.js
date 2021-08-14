'use strict';

function append(msg) {
   let fig = temp.content.cloneNode(true);
   fig.querySelector('.title').textContent = msg.title;
   fig.querySelector('.status').textContent = msg.status;
   let vid = fig.querySelector('video');
   vid.onended = next;
   vid.poster = msg.poster;
   if (msg.src !== '') {
      vid.src = msg.src;
      vid.load();
   }
   main.append(fig);
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
