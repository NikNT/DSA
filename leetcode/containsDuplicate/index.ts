function containsDuplicate(nums: number[]): boolean {
  const myMap = new Map();
  for (const num of nums) {
    if (myMap.has(num)) {
      return true;
    } else {
      myMap.set(num, true);
    }
  }

  return false;
}

const check: number[] = [1, 2, 3, 1];
console.log(containsDuplicate(check));
