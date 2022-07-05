let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");
//let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(`${input}??!`);
