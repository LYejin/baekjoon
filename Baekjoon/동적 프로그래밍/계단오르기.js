// 1차 내 코드
const solve = (n, rgb) => {
  dp = [...new Array(n + 1)].map((v) => new Array(0));
  dp[1].append(3);
  console.log(dp);
  let result = [];
  result[1] = rgb[0];
  result[2] = rgb[0] + rgb[1];
  console.log(result);
  for (let i = 2; i <= n; i++) {
    dp[i + 3].append(result[i] + rgb[i + 1] + rgb[i + 3]);
    dp[i + 3].append(result[i] + rgb[i + 2] + rgb[i + 3]);
    dp[i + 4].append(result[i] + rgb[i + 2] + rgb[i + 2]);
    console.log(result);
  }
  console.log(Math.min(...dp[n]));
};

const [n, ...rgb] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
solve(+n, rgb.map(Number));
// /dev/stdin
