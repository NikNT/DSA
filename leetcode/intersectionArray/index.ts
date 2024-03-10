function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const intersection = new Set<number>();

  for (let num of set1) {
    if (set2.has(num)) {
      intersection.add(num);
    }
  }

  return Array.from(intersection);
}

const nums1: number[] = [1, 2, 2, 1];
const nums2: number[] = [2, 2];

console.log(intersection(nums1, nums2));
