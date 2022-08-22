var fs = require("fs");
var inputs = fs.readFileSync("example.txt").toString().split("\n");
var cases = Number(inputs[0]);
inputs = inputs[1].split(" ").map((v) => Number(v));
var dp = [inputs[0]];
for (var i = 1; i < cases; i++) {
  dp[i] = inputs[i] > inputs[i] + dp[i - 1] ? inputs[i] : inputs[i] + dp[i - 1];
}
// 현재 값이 전 값 + 현재값보다 크면 dp에 현재 값 넣고
//새로 시작 아니면 전 dp값에 현재값 추가해서 계속 더해 나아간다.
console.log(Math.max(...dp));
