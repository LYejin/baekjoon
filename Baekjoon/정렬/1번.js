const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
// ./dev/stdin

input.shift(); // 첫번째 요소를 제거하고 제거된 요소를 반환한다.

input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
