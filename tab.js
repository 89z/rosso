'use strict';

async function newPlayer(videoID) {
   let body = {
      context: {
         client: {clientName: 'ANDROID', clientVersion: '16.05'}
      },
      videoId: videoID
   };
   let req = {
      body: JSON.stringify(body),
      headers: {'X-Goog-Api-Key': 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8'},
      method: 'POST'
   };
   let res = await fetch('https://www.youtube.com/youtubei/v1/player', req);
   let play = await res.json();
   browser.runtime.sendMessage(play.streamingData.adaptiveFormats);
}

let yts = document.querySelectorAll('[href^="https://www.youtube.com/"]');

for (let yt of yts) {
   yt.addEventListener('contextmenu', function() {
      let addr = new URL(this.href);
      let id = addr.searchParams.get('v');
      newPlayer(id);
   });
}
