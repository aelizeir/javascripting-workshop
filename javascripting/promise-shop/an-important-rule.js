'use strict';

function alwaysThrows() {
    throw new Error('OH NOES');
}

function iterate(num) {
    console.log(num);
    return num + 1;
}

function onReject(error) {
    console.log(error.message);
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject)