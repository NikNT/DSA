function findJudge(n: number, trust: number[][]): number {
  const trustCount = new Array(n + 1).fill(0);
  const isTrusted = new Array(n + 1).fill(false);

  for (const [a, b] of trust) {
    trustCount[b]++;
    isTrusted[a] = true;
  }

  for (let i = 1; i <= n; i++) {
    if (trustCount[i] === n - 1 && !isTrusted[i]) {
      return i;
    }
  }

  return -1;
}

const n: number = 3;
const trust: number[][] = [
  [1, 3],
  [2, 3],
];

console.log(findJudge(n, trust));
