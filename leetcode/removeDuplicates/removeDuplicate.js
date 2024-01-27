// const removeDuplicates = (nums: Array<number>): number => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         nums.splice(j, 1);
//         j--;
//       }
//     }
//   }
//   return nums.length;
// };
function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }
  var j = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i];
    }
  }
  return j + 1;
}
var duplicateArray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(duplicateArray));
console.log(duplicateArray);
