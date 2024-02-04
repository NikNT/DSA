/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
}

const nums1: number[] = [1, 2, 3, 0, 0, 0];
const m: number = 3;
const nums2: number[] = [2, 5, 6];
const n: number = 3;

console.log(merge(nums1, 3, nums2, n));
