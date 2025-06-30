def productExceptSelf(nums):
    n = len(nums)
    answer = [1] * n
    
    prefix_product = 1
    for i in range(n):
        answer[i] = prefix_product
        prefix_product *= nums[i]

    suffix_product = 1
    for i in range(n-1, -1, -1):
        answer[i] *= suffix_product
        suffix_product *= nums[i]
    
    return answer

print(productExceptSelf([1, 2, 3, 4]))  # Output: [24, 12, 8, 6]
print(productExceptSelf([1, 2, 3, 4, 5]))  # Output: [120, 60, 40, 30, 24]
print(productExceptSelf([-1, 1, 0, -3, 3]))  # Output: [0, 0, 9, 0, 0]