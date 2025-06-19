def reverse(arr, start=None, end=None):
    if start is None:
        start = 0
    
    if end is None:
        end = len(arr) - 1

    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1
    return arr

print(reverse([1, 2, 3, 4, 5, 6, 7]))  # Output: [7, 6, 5, 4, 3, 2, 1]w