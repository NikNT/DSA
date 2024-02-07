function maxProfit(prices) {
    var minPrice = prices[0];
    var maxProfit = 0;
    for (var i = 1; i < prices.length; i++) {
        var currentPrice = prices[i];
        minPrice = Math.min(minPrice, currentPrice);
        var potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(potentialProfit, maxProfit);
    }
    return maxProfit;
}
var prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
