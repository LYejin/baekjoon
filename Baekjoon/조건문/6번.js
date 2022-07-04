let input = require("fs").readFileSync("example.txt").toString().split("\n");
//let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
var current = input[0].split(" ").map(Number);

var currentHour = current[0];
var currentMinute = current[1];
var cook = Number(input[1]);

var cookMinute = currentMinute + cook;
var cookHour = currentHour;

if (cookMinute >= 60) {
  var temp = parseInt(cookMinute / 60);
  cookHour += temp;
  cookMinute = cookMinute - temp * 60;
  if (cookHour >= 24) {
    cookHour -= 24;
  }
  console.log(cookHour + " " + cookMinute);
} else {
  console.log(currentHour + " " + cookMinute);
}

// 찾아본 풀이
const cookEndTimeHour = parseInt(
  (currentHour * 60 + currentMinute + cookTime) / 60
);
const cookEndTimeMinute = parseInt(
  (currentHour * 60 + currentMinute + cookTime) % 60
);

console.log(
  cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour,
  cookEndTimeMinute
);
