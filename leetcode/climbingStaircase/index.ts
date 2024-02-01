// Okayish approach
// function climbStairs(n: number): number {
//   const numberOfWay: number[] = [1, 2];

//   for (let i: number = 2; i < n; i++) {
//     numberOfWay[i] = numberOfWay[i - 1] + numberOfWay[i - 2];
//   }

//   return numberOfWay[n - 1];
// }

//Better approach - DP
function climbStairs(n: number): any {
  if (n === 1) return 1;
  let dp = new Array(n);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

const stairs = 5;
console.log(climbStairs(stairs));
