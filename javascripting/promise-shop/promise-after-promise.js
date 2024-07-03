"use strict";

var firstPromise = first();
var secondPromise = firstPromise.then(function (val) {
    return second(val);
});

secondPromise.then(console.log);

/**
 * Visual Representation of Promise Chaining
 * 
 * first()              -> Returns a Promise (firstPromise)
  |
  v
firstPromise.then    -> Executes when firstPromise resolves
  |                     | 
  v                     v
second(val)          -> Returns a Promise (secondPromise)
  |
  v
secondPromise.then   -> Executes when secondPromise resolves
  |
  v
console.log(value)   -> Logs the resolved value

 * 
 */