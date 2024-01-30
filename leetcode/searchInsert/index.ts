function searchInsert(nums: number[], target: number): number {
  return searchRecursion(nums, target, 0, nums.length - 1);
}

function searchRecursion(
  nums: number[],
  target: number,
  left: number,
  right: number
): number {
  if (left > right) {
    return left;
  }

  const mid = Math.floor((left + right) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return searchRecursion(nums, target, mid + 1, right);
  } else {
    return searchRecursion(nums, target, 0, mid - 1);
  }
}

const array: number[] = [1, 3, 5, 6];
const tar: number = 2;

console.log(searchInsert(array, tar));
