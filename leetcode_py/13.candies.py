def candy(ratings):
    n = len(ratings)
    candies = [1] * n

    for i in range(1, n):
        if ratings[i] > ratings[i-1]:
            candies[i] = candies[i-1] + 1

    for i in range(n-2, -1, -1):
        if ratings[i] > ratings[i+1]:
            candies[i] = max(candies[i], candies[i+1] +1)

    return sum(candies)

print(candy([1, 0, 2]))  # Output: 5

# Time Complexity: O(n)
# Space Complexity: O(n)