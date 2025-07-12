def twoSum(numbers, target):
    left = 0
    right = len(numbers) - 1

    while left < right:
        current_sum = numbers[left] + numbers[right]
        if current_sum == target:
            return [left+1, right+1]
        elif current_sum > target:
            right -= 1
        else:
            left += 1
    return []
    

print(twoSum([2, 7, 11, 15], 9))  # Output: [1, 2]
print(twoSum([2, 3, 4], 6))       # Output: [1, 3]
print(twoSum([-1, 0], -1))        # Output: [1, 2]