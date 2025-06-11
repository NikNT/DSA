def insertion_sort_reverse(arr):
    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1

        while j >= 0 and arr[j] < current:
            arr[j+1] = arr[j]
            j -= 1

        arr[j+1] = current

    return arr

res = insertion_sort_reverse([2, 9, 1, 5, 6])
print(res)