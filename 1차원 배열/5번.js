const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => Number(x));

const N = input[0];
const score = input[1].split(" ");

var sum = 0;
var maxscore = Math.max(...score); // score.sort().reverse()[0]; 얘도 같은 값을 가져오는데 백준에서 안된다...

for (i = 0; i < N; i++) {
  sum += (score[i] / maxscore) * 100;
}

console.log(sum / N);
