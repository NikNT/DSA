# Brute Force - O(n^2) time complexity

def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []

print(twoSum([2, 7, 11, 15], 9))  # Output: [0, 1]
print(twoSum([3, 2, 4], 6))       # Output: [1, 2]
print(twoSum([3, 3], 6))          # Output: [0, 1]
print(twoSum([1, 2, 3, 4, 5], 8))  # Output: [2, 4]

# Optimized - O(n) time complexity using a hash map

def twoSumHashMap(nums, target):
    num_to_index = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_to_index:
            return [num_to_index[complement], i]
        num_to_index[num] = i
    return []

print(twoSumHashMap([2, 7, 11, 15], 9))  # Output: [0, 1]
print(twoSumHashMap([3, 2, 4], 6))       # Output: [1, 2]
print(twoSumHashMap([3, 3], 6))          # Output: [0, 1]
print(twoSumHashMap([1, 2, 3, 4, 5], 8))  # Output: [2, 4]