const input = require("fs").readFileSync("example.txt").toString().split(" ");
// /dev/stdin

let num = Number(input[0]);
var i = 1;
var result = 1;

if (num == 1) {
  result = 1;
} else {
  result = 2;
  while (i < num) {
    for (z = 1; z <= (result - 1) * 6; z++) {
      if (i == num) {
        break;
      }
      i++;
    }
    if (i == num) {
      break;
    }
    result++;
  }
}

console.log(result);
