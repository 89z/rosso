'use strict';

function backBlaze() {
   let msg = {
      src: this.href,
      poster: this.querySelector('img').src,
      title: this.parentNode.querySelector('td').textContent,
      status: ''
   };
   browser.runtime.sendMessage(msg);
}

delay(function() {
   let as = document.querySelectorAll('[href*=".backblazeb2.com/"]');
   if (as.length == 0) {
      return false;
   }
   for (let a of as) {
      a.addEventListener('contextmenu', backBlaze);
   }
   return true;
}, 99, 9);
