var fs = require("fs");
var [n, ...input] = fs
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map(Number);

var dp = [input[0]];
dp[1] = dp[0] + input[1];
dp[2] = Math.max(dp[1], dp[0] + input[2], input[1] + input[2]);
for (var i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + input[i - 1] + input[i],
    dp[i - 2] + input[i],
    dp[i - 1]
  );
}

console.log(dp[n - 1]);
