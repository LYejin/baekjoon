const input = require("fs").readFileSync("example.txt").toString().split("\n");
// /dev/stdin

var N1 = Number(input[0]);
var N2 = Number(input[1]);
var sum = 0;
var first = 0;

const f = (num) => {
  if (parseInt(num) == 1) {
    return;
  }

  for (i = 2; i < num; i++) {
    if (parseInt(num) % i == 0) {
      return;
    }
  }
  if (first == 0) {
    first = Number(num);
  }
  sum += Number(num);
  return;
};

for (z = N1; z <= N2; z++) {
  f(z);
}

if (sum != 0) {
  console.log(sum);
  console.log(first);
} else {
  console.log(-1);
}
