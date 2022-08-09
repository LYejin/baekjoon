const input = require("fs")
  .readFileSync("example.txt", "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array(input[0])
  .fill()
  .map((v, i) => i + 1);

// 3번째 라고 하면 두번 뒤로 보내고 하나 꺼내오고 두번 뒤로 보내고 꺼내오고 반복

const resultArr = [];

while (arr.length !== 1) {
  for (i = 1; i < input[1]; i++) {
    let temp = arr.shift();
    arr.push(temp);
    console.log(arr);
  }

  resultArr.push(arr.shift());
  console.log(resultArr);
}

resultArr.push(arr.shift());
console.log(resultArr);

var result = JSON.parse("<" + resultArr + ">");
