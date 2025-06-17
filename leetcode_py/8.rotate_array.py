# Not in Place : Require Extra Space (O(n))
def rotate(arr, k):
    new_arr = [0] * len(arr)
    for i in range(len(arr)):
        new_index = (i + k) % len(arr)
        new_arr[new_index] = arr[i]
    return new_arr

print(rotate([1, 2, 3, 4, 5, 6, 7], 3))  # Output: [5, 6, 7, 1, 2, 3, 4]

def rotate_in_place(arr, k):
    n = len(arr)
    k = k % n  # Handle cases where k is greater than n
    
    def reverse(start, end):
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start += 1
            end -= 1
    
    reverse(0, n-1)
    reverse(0, k-1)
    reverse(k, n-1)

print(rotate_in_place([1, 2, 3, 4, 5, 6, 7], 3))  # Output: [5, 6, 7, 1, 2, 3, 4]

