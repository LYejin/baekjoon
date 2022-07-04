let input = require("fs").readFileSync("example.txt").toString().split(" ");
//let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

var num = Number(input[0]);

for (i = 1; i <= 9; i++) {
  console.log(num + " * " + i + " = " + num * i);
}
