// function fib(n: number): number {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }

// const n: number = 4;
// console.log(fib(n));

function fib(n: number, memo = {}) {
  if (n <= 1) {
    return n;
  }

  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
  }
}

const n: number = 4;
console.log(fib(n));
