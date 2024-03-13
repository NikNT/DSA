function pivotInteger(n: number): number {
  let totalSum: number = (n * (n + 1)) / 2;
  let leftSum: number = 0;

  for (let x = 1; x <= n; x++) {
    leftSum += x;
    let rightSum: number = totalSum - leftSum + x;
    if (leftSum === rightSum) {
      return x;
    }
  }

  return -1;
}

const n: number = 8;
console.log(pivotInteger(n));
