let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");
//let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

var A = Number(input[0]);
var B = Number(input[1]);
var C = Number(input[2]);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
