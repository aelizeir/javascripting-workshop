'use strict';

function all(a, b) {
    return new Promise(function (fulfill, reject) {
        var counter = 0;
        var output = [];

        a.then(function (val) {
            output[0] = val;
            counter++;

            if (counter >= 2) {
                fulfill(output);
            }
        });

        b.then(function (val) {
            output[1] = val;
            counter++;

            if (counter >= 2) {
                fulfill(output);
            }
        });
    });
}

all(getPromise1(), getPromise2())
.then(console.log);