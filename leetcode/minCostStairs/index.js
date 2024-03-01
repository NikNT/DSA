function minCostClimbingStairs(cost) {
    var n = cost.length;
    var dp = new Array(n + 1).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (var i = 2; i <= n; i++) {
        if (i < n) {
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
        }
        else {
            dp[i] = Math.min(dp[i - 1], dp[i - 2]);
        }
    }
    return dp[n];
}
var cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost));
