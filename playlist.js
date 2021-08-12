'use strict';

browser.runtime.onMessage.addListener(play => {
   let vd = play.videoDetails;
   // author
   document.getElementById('author').textContent = vd.author;
   // title
   document.getElementById('title').textContent = vd.title;
   // audio
   for (let fmt of play.streamingData.adaptiveFormats) {
      if (fmt.mimeType.startsWith('audio/webm;')) {
         document.getElementById('audio').src = fmt.url;
         break;
      }
   }
});
