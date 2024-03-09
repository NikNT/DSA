// Approach 1
// function getCommon(nums1: number[], nums2: number[]): number {
//   let commonElements: number[] = [];
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j]) {
//         commonElements.push(nums1[i]);
//       }
//     }
//   }
//   if (commonElements.length) {
//     return commonElements.sort((a, b) => a - b)[0];
//   }
//   return -1;
// }
// Approach 2
function getCommon(nums1, nums2) {
    var i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i];
        }
        else if (nums1[i] < nums2[j]) {
            i++;
        }
        else {
            j++;
        }
    }
    return -1;
}
var nums1 = [1, 2, 3];
var nums2 = [2, 3, 4];
console.log(getCommon(nums1, nums2));
