'use strict';

function append(msg) {
   // append figure
   let fig = temp.content.cloneNode(true);
   // all queries need to be done before append
   let vid = fig.querySelector('video');
   fig.querySelector('.status').textContent = msg.status;
   fig.querySelector('.title').textContent = msg.title;
   main.append(fig);
   // src
   vid.src = msg.src;
   vid.load();
   vid.onended = next;
   vid.poster = msg.poster;
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
