'use strict';

browser.browserAction.onClicked.addListener(function() {
   browser.tabs.create({
      url: 'playlist.html'
   });
});
