def majorityElement(nums):
        """
        :type nums: List[int]
        :rtype: int
        """
    
        count = 0
        candidate = None

        for num in nums:
            if count == 0:
                candidate = num 
            
            count = count+1 if num == candidate else count-1
        
        return candidate

# Example usage:
nums = [3, 2, 3]
res = majorityElement(nums)
print(res)

# The Boyer-Moore Voting Algorithm is used to find the majority element in an array.
# Time complexity: O(n)
# Space complexity: O(1)