function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
}

const number_array: number[] = [1, 2, 3, 1, 2, 3];
const k: number = 2;

console.log(containsNearbyDuplicate(number_array, k));
