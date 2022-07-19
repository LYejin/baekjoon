const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
// ./dev/stdin

let num = 666;
let count = 1;
while (count != input[0]) {
  num++;
  if (String(num).includes("666")) count++;
}
console.log(num);
