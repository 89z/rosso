# Extension

~~~
xpinstall.signatures.required
~~~

<https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension>

Communicating with background scripts:

First, in the popup script do `browser.runtime.onMessage`.

Then, in the tab script do `browser.runtime.sendMessage()`.

- <https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage>
- <https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Content_scripts>
- <https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/user_interface>
- https://stackoverflow.com/questions/39076184/how-do-i-see-the-console-log
- https://superuser.com/questions/1465087/how-to-analyze-popup-window
