// 내 풀이
var [n, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

for (z = 0; z < Number(n); z++) {
  var arr = input[z].split(" ").map(Number);
  var dp = [...new Array(arr[0] + 1)].map((v) => new Array(arr[1] + 1).fill(0));
  for (var i = 1; i <= arr[0]; i++) {
    for (x = i; x <= arr[1]; x++) {
      if (i == x) {
        dp[i][x] = 1;
      } else if (i == x - 1) {
        dp[i][x] = x;
      } else if (i == 1) {
        dp[i][x] = x;
      } else {
        dp[i][x] = dp[i - 1][x - 1] + dp[i][x - 1];
      }
    }
  }
  console.log(dp[arr[0]][arr[1]]);
}
