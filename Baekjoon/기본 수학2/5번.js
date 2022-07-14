const input = require("fs").readFileSync("example.txt").toString().split("\n");
// /dev/stdin

// 하나의 입력값에 대한 출력 값
const sf = (num) => {
  var sum = 0;

  const f = (n) => {
    if (parseInt(n) == 1) {
      return;
    }

    // 꼭 제곱근으로 해줄 것!!!
    for (i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (parseInt(n) % i == 0) {
        return;
      }
    }
    sum += Number(1);
    return;
  };

  var n2 = Number(num) * 2;
  for (z = Number(num) + 1; z <= Number(num) * 2; z++) {
    f(z);
  }
  return sum;
};

var x = 0;
var str = "";

while (Number(input[x]) != 0) {
  str += sf(Number(input[x])) + "\n";
  x++;
}

console.log(str);
