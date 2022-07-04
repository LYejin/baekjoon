let input = require("fs").readFileSync("example.txt").toString().split(" ");
//let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
var a = parseInt(input[0]);
if (a % 4 == 0 && a % 100 != 0) {
  console.log(1);
} else {
  if (a % 400 != 0) {
    console.log(0);
  } else {
    console.log(1);
  }
}
