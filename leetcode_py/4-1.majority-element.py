def majorityElement(nums):
    count = {}

    for num in nums:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1

        if count[num] > len(nums) // 2:
            return num
        
print(majorityElement([3, 2, 3]))  # Output: 3
print(majorityElement([2, 2, 1, 1, 1, 2, 2]))  # Output: 2

# Time Complexity: O(n)
# Space Complexity: O(n)