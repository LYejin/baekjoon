var n = require("fs").readFileSync("example.txt").toString().trim();

var dp = [0, 1];
for (i = 2; i <= Number(n); i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(dp[n].toString());
