let input = require("fs").readFileSync("example.txt").toString().split("");
//let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

var num1 = Number(input[0]);
var num2 = Number(input[1]);

var result = parseInt(num1 + "" + num2);

var ylen = 0;

if (result < 10) {
  currentNum1 = parseInt(0);
  currentNum2 = parseInt(num1);
  num2 = 0;
} else {
  currentNum1 = parseInt(num2);
  currentNum2 = parseInt((num1 + num2) % 10);
  ylen++;
}

while (result !== temp) {
  temp2 = currentNum2;
  currentNum2 = (currentNum1 + currentNum2) % 10;
  currentNum1 = parseInt(temp2);
  var temp = parseInt(currentNum1 + "" + currentNum2);
  console.log(temp);
  ylen++;
}

console.log(ylen);

// 문 코드
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

var a = parseInt(input[0]);
var result = -1;
var cycle = 0;
ori = a;

while (result != ori) {
  if (a < 10) {
    addN1 = 0;
    addN2 = a;
  } else {
    addN1 = parseInt(a / 10);
    addN2 = a % 10;
  }

  regResult = addN1 + addN2;
  result = addN2 * 10 + parseInt(regResult % 10);
  cycle++;

  a = result;
}

console.log(cycle);