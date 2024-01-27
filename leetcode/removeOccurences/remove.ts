function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) {
    return 0;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
}

const arr = [3, 2, 2, 3];
const arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(arr2, 2));
console.log(arr2);
