let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");
//let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

var a = Number(input[0]);
var b = Number(input[1]);

if (a < b) {
  console.log("<");
} else if (a > b) {
  console.log(">");
} else {
  console.log("==");
}
