const input = require("fs").readFileSync("example.txt").toString().split(" ");
// /dev/stdin

let A = Number(input[0]);
let B = Number(input[1]);
let V = Number(input[2]);

// (높이 - 밤에 미끄러지는 수) / (아침에 이동하는 수 - 밤에 미끄러지는 수)
console.log(Math.ceil((V - B) / (A - B)));
