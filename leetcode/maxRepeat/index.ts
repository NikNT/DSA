function majorityElement(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  console.log(nums, len, len / 2, nums[Math.ceil(len / 2)]);
  return nums[Math.floor(len / 2)];
}

const thisArr: Array<number> = [3, 3, 4];
console.log(majorityElement(thisArr));
