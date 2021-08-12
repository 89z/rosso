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
   // itag
   fig.querySelector('.itag').textContent = msg.itag;
   // src
   vid.src = msg.src;
   // ended
   vid.onended = next;
   // append
   main.append(fig);
}

function next() {
   // remove
   main.querySelector('figure').remove();
   // play
   let vid = main.querySelector('video');
   if (vid !== null) {
      vid.play();
   }
}

let main = document.querySelector('main');
let temp = document.querySelector('template');
browser.runtime.onMessage.addListener(append);
