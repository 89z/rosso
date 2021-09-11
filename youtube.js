'use strict';

async function youTube() {
   const addr = new URL(this.href);
   const body = {
      context: {
         client: {clientName: 'ANDROID', clientVersion: '16.05'}
      },
      videoId: addr.searchParams.get('v')
   };
   const req = {
      body: JSON.stringify(body),
      headers: {'X-Goog-Api-Key': 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8'},
      method: 'POST'
   };
   const res = await fetch('https://www.youtube.com/youtubei/v1/player', req);
   const play = await res.json();
   play.streamingData.adaptiveFormats.sort(
      (a, b) => b.bitrate - a.bitrate
   );
   const msg = {
      poster: this.querySelector('img').src,
      title: this.parentNode.querySelector('td').textContent
   };
   for (const fmt of play.streamingData.adaptiveFormats) {
      // some videos do not offer WebM: 6_lMeEMMbyY
      if (fmt.audioQuality == 'AUDIO_QUALITY_MEDIUM') {
         msg.src = fmt.url;
         msg.status = fmt.audioQuality;
         break;
      }
   }
   browser.runtime.sendMessage(msg);
}

delay(function() {
   const as = document.querySelectorAll('[href^="https://www.youtube.com/"]');
   if (as.length == 0) {
      return false;
   }
   for (const a of as) {
      a.addEventListener('contextmenu', youTube);
   }
   return true;
}, time, count);
