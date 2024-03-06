// function fib(n: number): number {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }
// const n: number = 4;
// console.log(fib(n));
function fib(n, memo) {
    if (memo === void 0) { memo = {}; }
    if (n <= 1) {
        return n;
    }
    if (n in memo) {
        return memo[n];
    }
    else {
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
        return memo[n];
    }
}
var n = 4;
console.log(fib(n));
