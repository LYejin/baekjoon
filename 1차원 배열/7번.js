const input = require("fs").readFileSync("example.txt").toString().split("\n");
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => Number(x));

const num = input[0];

for (i = 1; i <= num; i++) {
  var sum = 0;
  var count = 0;
  var arr = input[i].split(" ").map(Number);
  for (x = 1; x <= arr[0]; x++) {
    sum += arr[x];
  }
  var avg = sum / arr[0];
  for (z = 1; z <= arr[0]; z++) {
    if (arr[z] > avg) {
      count++;
    }
  }
  console.log(((count / arr[0]) * 100).toFixed(3) + "%"); // toFixed() => 반올림된 숫자를 문자열 타입으로 반환
}

// Math.round() 함수 => 가장 가까운 정수로 반올림된 숫자를 반환 ex) 123.4 -> 123, 123.6->124

// Math.floor() 함수 => 가장 가까운 정수로 내림된 숫자

// Math.ceil() 함수 => 가장 가까운 정수로 올림된 숫자

// toPrecision() 함수 => 정수부터 시작해 길이를 제한 ex) 123.4567.toPrecision(5) -> 123.45
