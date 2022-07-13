const [n, ...arr] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n");
// /dev/stdin

let nArrNumber = Number(n);
let newArr = arr.map((e) => e.split(" ").map(Number));

for (let i = 0; i < nArrNumber; i++) {
  var room = Number(newArr[i][2] / newArr[i][0]) + 1;
  var floor = Number(newArr[i][2] % newArr[i][0]);

  var result = "";

  if (room < 10) {
    result = Number(floor * 100 + room);
  } else {
    result = Number(floor * 100 + room);
  }

  console.log(Math.floor(result));
}
