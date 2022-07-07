let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => Number(x));

//foreach와 indexof를 이용한 풀이
let numArr = [];

input.forEach((x) => {
  const num = x % 42;

  if (numArr.indexOf(num) === -1) {
    // 없는 값이라면 -1를 반환
    numArr.push(num); // 배열에 push
  }
});

console.log(numArr.length);

//set 이용한 풀이
// let restArr = input.map(input => input % 42);

// const set = new Set(restArr); //같은 값들 없애준다.
// restArr = [...set];

// console.log(restArr.length);
