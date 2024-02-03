/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    for (var i = 0; i < n; i++) {
        nums1[i + m] = nums2[i];
    }
    return nums1.sort(function (a, b) { return a - b; });
}
var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;
console.log(merge(nums1, 3, nums2, n));
