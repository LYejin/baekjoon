const [n, m] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map((el) => Number(el));

function solution(n, m) {
  const seq = [...Array(m)].fill(0);
  const visited = [...Array(n)].fill(false);
  let result = "";

  function dfs(k) {
    if (k === m) {
      const arr = [];
      for (let i = 0; i < m; i++) {
        console.log(seq[i]);
        arr.push(seq[i]);
      }
      return (result += `${arr.join(" ")}\n`);
    }
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        seq[k] = i; // 0-1 1-2 : 12 -> dfs(2) k==m 으로 return -> i=3부터 시작
        visited[i] = true;
        dfs(k + 1);
        visited[i] = false; // 1이 끝나고 다시 visited[1] = false로 만든다 -> i=2로 다시 시작
      }
    }
  }

  dfs(0);
  return result;
}

console.log(solution(n, m));
