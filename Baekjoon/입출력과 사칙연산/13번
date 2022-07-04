let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
//let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

var num1 = Number(input[0]);
var num2 = input[1].split("").map(Number);

console.log(num1 * num2[2]);
console.log(num1 * num2[1]);
console.log(num1 * num2[0]);
console.log(num1 * num2[2] + num1 * num2[1] * 10 + num1 * num2[0] * 100);
