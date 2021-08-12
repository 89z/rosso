'use strict';

browser.runtime.onMessage.addListener(play => {
   // author
   document.getElementById('author').textContent = play.videoDetails.author;
   // title
   document.getElementById('title').textContent = play.videoDetails.title;
   // video
   let video = document.getElementById('video');
   video.poster = play.videoDetails.thumbnail.thumbnails[1].url;
   // audio
   for (let fmt of play.streamingData.adaptiveFormats) {
      if (fmt.mimeType.startsWith('audio/webm;')) {
         video.src = fmt.url;
         break;
      }
   }
});
