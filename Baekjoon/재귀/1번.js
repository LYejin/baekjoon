let input = require("fs").readFileSync("example.txt").toString();
//.split("\n");
// /dev/stdin

// 첫번째 풀이
function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(input));

// 두번째 풀이
// let result = 1;

// for (let i = 1; i <= input * 1; i++) {
//     result *= i;
// }

// console.log(result);
