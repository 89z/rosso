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
   let msg = {
      poster: this.querySelector('img').src,
      title: this.parentNode.querySelector('td').textContent
   };
   if (res.ok) {
      let play = await res.json();
      play.streamingData.adaptiveFormats.sort(
         (a, b) => b.bitrate - a.bitrate
      );
      for (let fmt of play.streamingData.adaptiveFormats) {
         if (fmt.mimeType.startsWith('audio/webm;')) {
            msg.src = fmt.url;
            msg.status = fmt.audioQuality;
            break;
         }
      }
   } else {
      msg.src = '';
      msg.status = String(res.status) + ' ' + res.statusText;
   }
   browser.runtime.sendMessage(msg);
}

let yts = document.querySelectorAll('[href^="https://www.youtube.com/"]');

for (let yt of yts) {
   yt.addEventListener('contextmenu', youTube);
}
