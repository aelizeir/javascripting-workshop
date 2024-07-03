"use strict"; 
const { get } = require('http');
const async = require("async");
const concat = require("concat-stream");
const { pipeline } = require("stream"); 

async.series(
    {
        requestOne: function (done) {
            fetchURL(process.argv[2], done);
        },
        requestTwo: function (done) {
            fetchURL(process.argv[3], done);
        },
    },
    function (err, results) {
        if (err) return console.error(err);
        console.log(results);
    }
);

function fetchURL(url, callback) {
    get(url, (res) => {
        res.setEncoding("utf-8");
        pipeline(
            res,
            concat((data) => {
                callback(null, data);
            }),
            (err) => {
                if (err) return callback(err);
            }
        );
    });
}