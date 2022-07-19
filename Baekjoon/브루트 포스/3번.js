const fs = require("fs");
const [n, ...person] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
// ./dev/stdin

let result = "";
let count = [];

for (let i = 0; i < n; i++) {
  let rank = 0;
  for (let j = 0; j < n; j++) {
    if (i == j) continue;
    [aW, aT] = person[i].split(" ");
    [bW, bT] = person[j].split(" ");

    if (Number(aW) < Number(bW) && Number(aT) < Number(bT)) {
      rank += 1;
    }
  }
  var num = rank + 1;
  result += num + " ";
}

console.log(result);
