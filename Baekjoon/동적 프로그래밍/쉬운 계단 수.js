var input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

// 인풋 처리
input = Number(input[0]);
let dp = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
for (let i = 1; i < input; i++) {
  dp.push([...Array(10)]);
}

solution(input, dp);

function solution(n, dp) {
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= 9; j++) {
      dp[i][j] =
        ((dp[i - 1][j - 1] || 0) + (dp[i - 1][j + 1] || 0)) % 1000000000;
    }
  }

  const result = dp[n - 1].reduce((acc, i) => {
    return (acc + i) % 1000000000;
  }, 0);

  console.log(result);
}
