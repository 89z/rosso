'use strict';

function append(msg) {
   let fig = temp.content.cloneNode(true);
   // title
   fig.querySelector('.title').textContent = msg.title;
   // author
   fig.querySelector('.author').textContent = msg.author;
   // poster
   let vid = fig.querySelector('video');
   vid.poster = msg.poster;
   // quality
   fig.querySelector('.quality').textContent = msg.quality;
   // src
   vid.src = msg.src;
   vid.load();
   // ended
   vid.onended = next;
   // append
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
