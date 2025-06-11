def insertion_sort(arr):
    if not isinstance(arr, list):
        raise TypeError("Input must be a list")
    
    if not arr: 
        return []
    
    if len(arr) == 1:
        return arr 
    
    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > current:
            arr[j+1] = arr[j]
            j -= 1

        arr[j+1] = current
    
    return arr

res = insertion_sort([5, 2, 9, 1, 5, 6])
print(res)  # Expected output: [1, 2, 5, 5, 6, 9]

# Best Case: O(n) : when the array is already sorted.
# Average Case: O(n^2) : when the array is in random order.
# Worst Case: O(n^2) : when the array is sorted in reverse order.
# Space Complexity: O(1) : in-place sorting, no additional space used.
# Time Complexity: O(n^2) : due to nested loops.
# Stability: Insertion sort is a stable sorting algorithm.
# Usage: This function can be used to sort a list of comparable elements in ascending order.
# Note: The function modifies the input list in place and also returns it.