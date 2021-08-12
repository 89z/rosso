'use strict';

function append(play) {
   let fig = temp.content.cloneNode(true);
   // author
   fig.querySelector('.author').textContent = play.videoDetails.author;
   // title
   fig.querySelector('.title').textContent = play.videoDetails.title;
   // poster
   let vid = fig.querySelector('video');
   vid.poster = play.videoDetails.thumbnail.thumbnails[1].url;
   // src
   for (let fmt of play.streamingData.adaptiveFormats) {
      if (fmt.mimeType.startsWith('audio/webm;')) {
         vid.src = fmt.url;
         break;
      }
   }
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
