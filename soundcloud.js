'use strict';

let scs = document.querySelectorAll('[href^="https://w.soundcloud.com/"]');

for (let sc of scs) {
   sc.addEventListener('contextmenu', soundCloud);
}

function soundCloud() {
   let msg = {};
   msg.poster = '';
   msg.title = 'Sound';
   msg.author = 'Cloud';
   msg.quality = '';
   // src
   let play = new URL(this.href);
   let id = play.searchParams.get('url').split('/').slice(-1);
   let track = new URL('https://api-v2.soundcloud.com/tracks');
   /*
   let search = new URLSearchParams({
      client_id: 'fSSdm5yTnDka1g0Fz1CO5Yx6z0NbeHAj',
      ids: '103650107'
   });
   track.search = search.toString();

   GET /tracks?client_id=fSSdm5yTnDka1g0Fz1CO5Yx6z0NbeHAj&ids=103650107 HTTP/1.1

   GET /media/soundcloud:tracks:103650107/aca81dd5-2feb-4fc4-a102-036fb35fe44a/stream/progressive?client_id=fSSdm5yTnDka1g0Fz1CO5Yx6z0NbeHAj HTTP/1.1
   Host: api-v2.soundcloud.com
   */
   browser.runtime.sendMessage(msg);
}
