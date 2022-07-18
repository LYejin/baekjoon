const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
// ./dev/stdin

const firstLine = input[0]
  .trim()
  .split(" ")
  .map((v) => +v);
const n = firstLine[0];
const max = firstLine[1];

const card = input[1]
  .trim()
  .split(" ")
  .map((v) => +v);

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      let temp = card[i] + card[j] + card[k]; // 0 1 2~끝인 n까지 그 다음 0 2 3~n
      if (temp <= max) {
        // 세가지를 합한 값이 max(가깝게) 보다 작거나 같으면? 블랙잭 규칙 상 max의 값이 넘으면 안됌
        if (temp > answer) answer = temp; // answer 변수에 값을 넣어 클 때마다 값을 바꿔준다.
      }
    }
  }
}
console.log(answer);
