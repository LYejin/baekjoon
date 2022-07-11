// /dev/stdin
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

var alp = input[0].split("");
let str = [];

for (let i = 97; i <= 122; i++) {
  str += String.fromCharCode(i);
}

for (i = 0; i < str.length; i++) {
  console.log(alp.indexOf(str[i]));
}
