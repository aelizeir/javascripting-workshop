let userArray = process.argv.slice(2);
let results = {};

[, results.username, results.email] = userArray;

console.log(results);