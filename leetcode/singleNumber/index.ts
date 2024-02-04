function singleNumber(nums: number[]): number {
  let singleNumber = 0;
  for (const num of nums) {
    singleNumber ^= num;
  }
  return singleNumber;
}

const single: number[] = [2, 2, 1];
console.log(singleNumber(single));
