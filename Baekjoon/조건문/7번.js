let input = require("fs").readFileSync("example.txt").toString().split(" ");
//let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
var a = Number(input[0]);
var b = Number(input[1]);
var c = Number(input[2]);

// 이런 방식으로 불러오는 것이 가능
//let input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
// const [a, b, c] = [input[0], input[1], input[2]];

// 밑에 풀이 참조
if (a == b && b == c && c == a) {
  console.log(10000 + a * 1000);
}

if (a !== b || b !== c || c !== a) {
  if (a == b || a == c) {
    console.log(1000 + a * 100);
  }
  if (b == c) {
    console.log(1000 + b * 100);
  }
}

if (a !== b && a !== c && b !== c) {
  var temp2 = [a, b, c].sort();
  console.log(temp2.pop() * 100);
}

// 다른 사람 풀이
const answer = (a, b, c) => {
  if (a === b && a === c && b === c) return console.log(10000 + a * 1000);

  if (a !== b || a !== c || b !== c) {
    if (a === b || a === c) return console.log(1000 + a * 100);
    if (b === c) return console.log(1000 + b * 100);
  }

  if (a !== b && a !== c && b !== c) {
    const sort = [a, b, c].sort();
    return console.log(sort.pop() * 100);
  }
};

answer(a, b, c);
