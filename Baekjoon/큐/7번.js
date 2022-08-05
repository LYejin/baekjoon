const fs = require("fs");
const { join } = require("path");
const [n, ...arr] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

var a = 0;
var b = 2;

var set = arr[b].substring(1, arr[b].length - 2);
var result = JSON.parse("[" + set + "]");
console.log(result);
var ttt = [1, 2, 3];
console.log(ttt.reverse());
var rr = result.reverse();
console.log(rr);

// for (i=0; i< n; i++) {
//   for (x=0; x<arr[a].length; x++) {
//     var set = arr[b].substring(1, arr[b].length - 2);
//     var result = JSON.parse("[" + set + "]");
//     if (arr[a][0]=="R") {
//       result.reverse();
//     } else if {
//       arr[b].shift();
//     }
//   }

//   arr[b]
// }

//arr[a].split("").reverse().join("")
