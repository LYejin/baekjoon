const fs = require("fs");
let [nk, ...rest] = fs.readFileSync("example.txt").toString().split("\n");
// ./dev/stdin
let [n, k] = nk.split(" ");
let result = 0;

while (rest.length && k > 0) {
  const num = parseInt(rest.pop());
  k = parseInt(k);

  while (num <= k && k > 0) {
    k = k - num;
    result++;
  }
}

console.log(result);
