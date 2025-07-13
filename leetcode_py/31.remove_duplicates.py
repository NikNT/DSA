def removeDuplicates(nums):
    if len(nums) <=2 :
        return len(nums)
    i=2
    for j in range(2, len(nums)): 
        if nums[j] != nums[i-2]:
            nums[i] = nums[j]
            i += 1
    return i

print(removeDuplicates([1,1,1,2,2,3]))  # Output: 5
print(removeDuplicates([0,0,1,1,1,1,2,3,3]))  # Output: 7
print(removeDuplicates([1,2,3,4,5]))  # Output: 5
print(removeDuplicates([1,1,2,2,3,3,4,4,5,5]))  # Output: 10