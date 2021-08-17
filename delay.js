'use strict';

const time = 99;
const count = 99;

function delay(callback, time, count) {
   let id = setInterval(function() {
      let ok = callback();
      count--;
      if (ok || count == 0) {
         clearInterval(id);
      }
   }, time);
}
