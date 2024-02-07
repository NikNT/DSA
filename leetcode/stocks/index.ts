function maxProfit(prices: number[]): number {
  let minPrice: number = prices[0];
  let maxProfit: number = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(potentialProfit, maxProfit);
  }

  return maxProfit;
}

const prices: number[] = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
