const input = require("fs").readFileSync("example.txt").toString().trim();
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => Number(x));

console.log(input.charCodeAt(0));
