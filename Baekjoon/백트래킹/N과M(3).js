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
        arr.push(seq[i]);
      }
      return (result += `${arr.join(" ")}\n`);
    }
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        seq[k] = i;
        dfs(k + 1); // visited[i] = true를 없애서 해결
        visited[i] = false;
      }
    }
  }

  dfs(0);
  return result;
}

console.log(solution(n, m));
