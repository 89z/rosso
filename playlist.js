'use strict';

function append(msg) {
   const fig = temp.content.firstElementChild.cloneNode(true);
   main.append(fig);
   const vid = fig.querySelector('video');
   // src
   vid.src = msg.src;
   vid.load();
   vid.onended = next;
   // poster
   vid.poster = msg.poster;
   // title
   fig.querySelector('figcaption').textContent = msg.title;
}

function next() {
   main.querySelector('figure').remove();
   const vid = main.querySelector('video');
   if (vid !== null) {
      vid.play();
   }
}

const main = document.querySelector('main');
const temp = document.querySelector('template');
browser.runtime.onMessage.addListener(append);
