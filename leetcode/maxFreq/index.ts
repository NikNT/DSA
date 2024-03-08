function maxFrequencyElements(nums: number[]): number {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  let maxFreq: number = 0;
  for (const freq of freqMap.values()) {
    maxFreq = Math.max(maxFreq, freq);
  }

  let count: number = 0;
  for (const freq of freqMap.values()) {
    if (freq === maxFreq) {
      count++;
    }
  }

  return maxFreq * count;
}

const nums = [1, 4, 4, 4, 5, 5, 6, 6, 6];
console.log(maxFrequencyElements(nums));
