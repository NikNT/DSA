from typing import List


def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    pointer1 = m - 1 
    pointer2 = n - 1
    pointer_merge = m + n - 1

    while pointer2 >= 0:
        if pointer1 >= 0 and nums1[pointer1] > nums2[pointer2]:
            nums1[pointer_merge] = nums1[pointer1]
            pointer1 -= 1
        else :
            nums1[pointer_merge] = nums2[pointer2]
            pointer2 -= 1

        pointer_merge -= 1
    
