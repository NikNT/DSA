def longestConsecutive(nums):
    numSet = set(nums)
    longest_streak = 0

    for num in numSet:
        if num-1 not in numSet:
            current_num = num
            current_streak = 1

            while current_num + 1 in numSet:
                current_num += 1
                current_streak += 1

            longest_streak = max(longest_streak, current_streak)
    
    return longest_streak

print(longestConsecutive([100, 4, 200, 1, 3, 2])) # Output: 4 (because the longest consecutive sequence is [1, 2, 3, 4]) 