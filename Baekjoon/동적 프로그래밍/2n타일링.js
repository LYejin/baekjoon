var fs = require("fs");
var inputs = fs.readFileSync("example.txt").toString().trim();
// ./dev/stdin
inputs = Number(inputs);
var arr = [0, 1, 2];
if (inputs > 2) {
  for (var i = 3; i <= inputs; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
  }
}
console.log(arr[inputs]);
