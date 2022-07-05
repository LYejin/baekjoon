let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
//let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

var max = input[0];

for (i = 1; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i];
  }
}

var num = input.indexOf(max) + 1;

console.log(max + "\n" + num);
