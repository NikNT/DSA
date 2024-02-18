//Approach good for smaller-medium arrays
//Complexity - O(n^2)
// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// const number_array: number[] = [1, 2, 3, 1, 2, 3];
// const k: number = 2;
// console.log(containsNearbyDuplicate(number_array, k));
//Optimal approach
//Complexity - O(n)
function containsNearbyDuplicate(nums, k) {
    var numMap = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i]) && Math.abs(i - numMap.get(nums[i])) <= k) {
            return true;
        }
        else {
            numMap.set(nums[i], i);
        }
    }
    return false;
}
var number_array = [1, 2, 3, 1, 2, 3];
var k = 2;
console.log(containsNearbyDuplicate(number_array, k));
