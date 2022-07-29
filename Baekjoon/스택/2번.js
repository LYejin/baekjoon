const [n, ...array] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n");
// /dev/stdin

const stack = [];
var sum = 0;

for (i = 0; i < n; i++) {
  if (Number(array[i]) !== 0) {
    stack.push(array[i]);
  } else {
    stack.pop();
  }
}

for (z = 0; z < stack.length; z++) {
  sum += Number(stack[z]);
}

if (isNaN(sum)) {
  console.log(0);
} else {
  console.log(sum);
}
