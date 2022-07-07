const notSelfNum = (num) => {
  var sum = Number(num);
  while (num > 0) {
    sum += Number(num % 10);
    num = parseInt(num / 10);
  }
  return sum;
};

const selfNum = new Array(10000);
selfNum.fill(true);

for (let i = 1; i <= 10000; i++) {
  selfNum[notSelfNum(i)] = false;

  if (selfNum[i]) {
    console.log(i);
  }
}
