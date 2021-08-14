'use strict';

async function youTube() {
   let addr = new URL(this.href);
   let body = {
      context: {
         client: {clientName: 'ANDROID', clientVersion: '16.05'}
      },
      videoId: addr.searchParams.get('v')
   };
   let req = {
      body: JSON.stringify(body),
      headers: {'X-Goog-Api-Key': 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8'},
      method: 'POST'
   };
   let res = await fetch('https://www.youtube.com/youtubei/v1/player', req);
   let play = await res.json();
   play.streamingData.adaptiveFormats.sort(
      (a, b) => b.bitrate - a.bitrate
   );
   let msg = {
      poster: this.querySelector('img').src,
      title: this.parentNode.querySelector('td').textContent
   };
   for (let fmt of play.streamingData.adaptiveFormats) {
      if (fmt.mimeType.startsWith('audio/webm;')) {
         msg.src = fmt.url;
         msg.status = fmt.audioQuality;
         break;
      }
   }
   browser.runtime.sendMessage(msg);
}

delay(function() {
   let as = document.querySelectorAll('[href^="https://www.youtube.com/"]');
   if (as.length == 0) {
      return false;
   }
   for (let a of as) {
      a.addEventListener('contextmenu', youTube);
   }
   return true;
}, 99, 9);
