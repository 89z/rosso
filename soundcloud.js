'use strict';

async function soundCloudMedia(track) {
   const param = new URLSearchParams({
      client_id: 'fSSdm5yTnDka1g0Fz1CO5Yx6z0NbeHAj'
   });
   for (const code of track[0].media.transcodings) {
      if (code.format.protocol != 'progressive') {
         continue;
      }
      const media = new URL(code.url);
      media.search = String(param);
      const res = await fetch(media);
      return res.json();
   }
   return {url: ''};
}

async function soundCloudTrack(id) {
   const param = new URLSearchParams({
      client_id: 'fSSdm5yTnDka1g0Fz1CO5Yx6z0NbeHAj',
      ids: id
   });
   const track = new URL('https://api-v2.soundcloud.com/tracks');
   track.search = String(param);
   const res = await fetch(track);
   return res.json();
}

async function soundCloud() {
   const url = new URL(this.href);
   const id = url.searchParams.get('url').split('/').slice(-1);
   const track = await soundCloudTrack(id);
   const media = await soundCloudMedia(track);
   browser.runtime.sendMessage({
      src: media.url,
      poster: this.querySelector('img').src,
      title: this.parentNode.querySelector('td').textContent
   });
}

delay(function() {
   const as = document.querySelectorAll('[href^="https://w.soundcloud.com/"]');
   if (as.length == 0) {
      return false;
   }
   for (const a of as) {
      a.addEventListener('contextmenu', soundCloud);
   }
   return true;
}, time, count);
