def trap(height):
    if not height:
        return 0
    
    n = len(height)-1
    total_water = 0

    for i in range(1, n):
        max_left = max(height[:i])
        max_right = max(height[i+1:])

        water = min(max_left, max_right) - height[i]

        if water > 0:
            total_water += water

    return total_water

# Example usage:
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Output: 6
print(trap([4,2,0,3,2,5]))  # Output: 9
print(trap([]))  # Output: 0