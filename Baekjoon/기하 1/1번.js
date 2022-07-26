const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split(" ");
// ./dev/stdin

const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

const array = [x, w - x, y, h - y];
const answer = Math.min(...array);
console.log(answer);
