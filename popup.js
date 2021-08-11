'use strict';

browser.runtime.onMessage.addListener(fmts => {
   for (let fmt of fmts) {
      if (fmt.mimeType.startsWith('audio/webm;')) {
         document.querySelector('audio').src = fmt.url;
         document.querySelector('div').textContent = fmt.url;
         break;
      }
   }
});
