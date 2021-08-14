'use strict';

function backBlaze() {
   let msg = {
      poster: this.querySelector('img').src,
      title: this.parentNode.querySelector('td').textContent,
      src: this.href,
      status: ''
   };
   browser.runtime.sendMessage(msg);
}

let bbs = document.querySelectorAll('[href*=".backblazeb2.com/"]');

for (let bb of bbs) {
   bb.addEventListener('contextmenu', backBlaze);
}
