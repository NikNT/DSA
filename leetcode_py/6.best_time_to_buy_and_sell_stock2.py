def maxProfit(prices):
    total_profit = 0

    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            total_profit += prices[i] - prices[i-1]
    return total_profit 

print(maxProfit([7, 1, 5, 3, 6, 4]))  # Output: 7

# Time Complexity: O(n)
# Space Complexity: O(1)