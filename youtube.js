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
   let msg = {};
   // title
   msg.title = play.videoDetails.title;
   // author
   msg.author = play.videoDetails.author;
   // poster
   msg.poster = play.videoDetails.thumbnail.thumbnails[1].url;
   // sort
   play.streamingData.adaptiveFormats.sort(
      (a, b) => b.bitrate - a.bitrate
   );
   for (let fmt of play.streamingData.adaptiveFormats) {
      if (fmt.mimeType.startsWith('audio/webm;')) {
         msg.quality = fmt.audioQuality;
         msg.src = fmt.url;
         break;
      }
   }
   // send
   browser.runtime.sendMessage(msg);
}

let yts = document.querySelectorAll('[href^="https://www.youtube.com/"]');

for (let yt of yts) {
   yt.addEventListener('contextmenu', youTube);
}
