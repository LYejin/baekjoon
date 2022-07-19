const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
// ./dev/stdin

var result = "";

for (i = 1; i <= parseInt(input[0]); i++) {
  let num = 1;
  for (z = 1; z <= parseInt(input[0]); z++) {
    if (
      input[i].split(" ")[0] < input[z].split(" ")[0] &&
      input[i].split(" ")[1] < input[z].split(" ")[1]
    ) {
      num++;
    }
  }
  if (i == input[0]) {
    result += num;
  } else {
    result += num + " ";
  }
}

console.log(result);
