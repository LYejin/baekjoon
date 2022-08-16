const solve = (n, rgb) => {
  dp = [...new Array(n + 1)].map((v) => new Array(3).fill(0));
  dp[1] = rgb[0];
  for (let i = 2; i <= n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgb[i - 1][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgb[i - 1][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgb[i - 1][2];
  }
  console.log(Math.min(...dp[n]));
};

const [n, ...rgb] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
solve(
  +n,
  rgb.map((cost) => cost.split(" ").map((v) => +v))
); // 한줄씩 받아서 그걸 또 공백으로 나눈 숫자를 보냄.

// dp[n][0]을 n번째 집을 빨간색으로 칠했을 때 전체 비용의 최솟값
// dp[n][1]을 n번째 집을 초록색으로 칠했을 때 전체 비용의 최솟값
// dp[n][2]를 n번째 집을 파란색으로 칠했을 때 전체 비용의 최솟값
