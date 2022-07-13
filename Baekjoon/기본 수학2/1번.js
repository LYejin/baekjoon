const input = require("fs").readFileSync("example.txt").toString().split("\n");
// /dev/stdin

var N = Number(input[0]);
var newarr = input[1].split(" ").map(Number);
var counter = 0;

const f = (num) => {
  if (parseInt(num) == 1) {
    return;
  }

  for (i = 2; i < num; i++) {
    if (parseInt(num) % i == 0) {
      return;
    }
  }
  return counter++;
};

for (z = 0; z < N; z++) {
  f(newarr[z]);
}

console.log(counter);
