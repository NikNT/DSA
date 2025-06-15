def maxProfit(prices):
    if not prices:
        return 0 
    
    min_price = float('inf')
    max_profit = 0

    for price in prices:
            if price < min_price:
                min_price = price
            else:
                profit = price - min_price
                if profit > max_profit:
                    max_profit = profit
                # max_profit = max(max_profit, profit)
            
    return max_profit

# Example 
prices = [7, 1, 5, 3, 6, 4]
print(maxProfit(prices))  # Output: 5

# Example 2
prices = [7, 6, 4, 3, 1]
print(maxProfit(prices))  # Output: 0
