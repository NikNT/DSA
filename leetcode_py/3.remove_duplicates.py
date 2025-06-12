def removeDuplicates(nums):
    slow = 0
    for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
    return slow + 1

# Example usage:
result = removeDuplicates([1, 1, 2])
print(result)  # Output: 2

# Time Complexity: O(n) - where n is the length of input list.
# Space Complexity: O(1) - no extra space is used.