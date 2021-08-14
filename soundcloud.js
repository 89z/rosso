'use strict';

async function getMedia(track) {
   let param = new URLSearchParams({
      client_id: 'fSSdm5yTnDka1g0Fz1CO5Yx6z0NbeHAj'
   });
   let addr = '';
   for (let code of track[0].media.transcodings) {
      if code.format.protocol == 'progressive' {
         addr = code.url;
      }
   }
   let media = new URL(addr);
   media.search = String(param);
   let res = await fetch(media);
   return await res.json();
}

async function trackID(id) {
   let param = new URLSearchParams({
      client_id: 'fSSdm5yTnDka1g0Fz1CO5Yx6z0NbeHAj',
      ids: id
   });
   let track = new URL('https://api-v2.soundcloud.com/tracks');
   track.search = String(param);
   let res = await fetch(track);
   return await res.json();
}

function soundCloud() {
   let msg = {};
   msg.poster = '';
   msg.title = 'Sound';
   msg.author = 'Cloud';
   msg.quality = '';
   // src
   let url = new URL(this.href);
   let id = url.searchParams.get('url').split('/').slice(-1);
   let track = trackID(id);
   msg.src = getMedia(track).url;
   browser.runtime.sendMessage(msg);
}

delay(function() {
   let as = document.querySelectorAll('[href^="https://w.soundcloud.com/"]');
   if (as.length == 0) {
      return false;
   }
   for (let a of as) {
      a.addEventListener('contextmenu', soundCloud);
   }
   return true;
}, 99, 9);
