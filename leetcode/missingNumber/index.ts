function missingNumber(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);

  if (nums[0] !== 0) return 0;
  if (nums[nums.length - 1] !== nums.length) return nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
}

const missing: number[] = [3, 0, 1];
console.log(missingNumber(missing));
