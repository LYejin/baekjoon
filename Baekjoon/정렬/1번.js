const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
// ./dev/stdin

input.shift();

input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
