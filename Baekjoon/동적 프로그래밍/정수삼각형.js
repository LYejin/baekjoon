// 내가 푼 코드
const solve = (n, input) => {
  dp = [...new Array(n)].map((v) => new Array(0).fill(0));
  dp[0].push(input[0][0]);
  dp[1].push(input[1][0] + input[0][0]);
  dp[1].push(input[1][1] + input[0][0]);
  for (let i = 2; i < n; i++) {
    for (let z = 0; z < input[i].length; z++) {
      if (z == 0) {
        dp[i].push(dp[i - 1][z] + input[i][z]);
        continue;
      }
      if (z == input[i].length - 1) {
        dp[i].push(dp[i - 1][z - 1] + input[i][z]);
        continue;
      }
      dp[i].push(input[i][z] + Math.max(dp[i - 1][z - 1], dp[i - 1][z]));
    }
  }
  return console.log(Math.max.apply(null, dp[n - 1]));
};

const [n, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
solve(
  +n,
  input.map((cost) => cost.split(" ").map((v) => +v))
);
// /dev/stdin

// 디드 코드
const fs = require("fs");
// 백준 제출 할 때 주석 제거
// const readFileSyncAddress = '/dev/stdin';
// VSC 테스트 할 때 주석 제거
const readFileSyncAddress = "example.txt";

//let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// 인풋 처리
[N, ...arr] = input;
N = Number(N);
arr = arr.map((i) => i.split(" ").map((i) => Number(i)));

if (N > 1) {
  for (let i = N - 1; i > 1; i--) {
    for (let k = 0; k < i; k++) {
      arr[i - 1][k] += Math.max(arr[i][k], arr[i][k + 1]);
    }
  }
  console.log(arr[0][0] + Math.max(...arr[1]));
} else {
  console.log(arr[0][0]);
}

// 찾아본 코드
const fs = require("fs");
// const [n, ...arr] = fs
//   .readFileSync("example.txt")
//   .toString()
//   .trim()
//   .split("\n");

const N = +n;
let dp = arr.map((v) => v.split(" ").map((v) => +v));

// console.log(dp)

for (let i = 1; i < N; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    if (j == 0) dp[i][j] += dp[i - 1][j];
    else if (j == dp[i].length - 1) dp[i][j] += dp[i - 1][j - 1];
    else dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
  }
}

const answer = Math.max(...dp[N - 1]);
console.log(answer);
