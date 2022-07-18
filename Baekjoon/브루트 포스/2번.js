const fs = require("fs");
const input = fs.readFileSync("example.txt").toString();
// ./dev/stdin

for (i = 0; i <= 1000000; i++) {
  let sum = i;
  for (z = 0; z < i.toString().length; z++) {
    sum += parseInt(i.toString()[z]);
  }
  if (sum == parseInt(input)) {
    console.log(i);
    break;
  }
  if (i == 1000000) {
    console.log(0);
  }
}
