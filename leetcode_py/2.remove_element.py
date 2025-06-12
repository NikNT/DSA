from typing import List
def removeElement(nums: List[int], val: int) -> int:
    slow = 0

    for fast in range(len(nums)):
        if nums[fast] != val:
            nums[slow] = nums[fast]
            slow += 1

    return slow

result = removeElement([3, 2, 2, 3], 3)
print(result)  

# Time Complexity: O(n) - where n is the length of input list. 
# Space Complexity: O(1) - no extra space is used.