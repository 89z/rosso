'use strict';

function backBlaze() {
   const msg = {
      src: this.href,
      poster: this.querySelector('img').src,
      title: this.parentNode.querySelector('td').textContent,
      status: ''
   };
   browser.runtime.sendMessage(msg);
}

delay(function() {
   const as = document.querySelectorAll('[href*=".backblazeb2.com/"]');
   if (as.length == 0) {
      return false;
   }
   for (const a of as) {
      a.addEventListener('contextmenu', backBlaze);
   }
   return true;
}, time, count);
