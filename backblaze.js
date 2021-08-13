'use strict';

function backBlaze() {
   let msg = {
      author: '',
      poster: this.querySelector('img').src,
      quality: '',
      src: this.href,
      title: this.parentNode.querySelector('td').textContent
   };
   browser.runtime.sendMessage(msg);
}

let bbs = document.querySelectorAll('[href*=".backblazeb2.com/"]');

for (let bb of bbs) {
   bb.addEventListener('contextmenu', backBlaze);
}
