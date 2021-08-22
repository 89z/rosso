'use strict';

const time = 99;
const count = 99;

function delay(callback, time, count) {
   const id = setInterval(function() {
      const ok = callback();
      count--;
      if (ok || count == 0) {
         clearInterval(id);
      }
   }, time);
}
