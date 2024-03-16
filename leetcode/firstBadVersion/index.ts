var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};

function isBadVersion(version) {
  const badVersions = [false, false, false, true, true, true]; // Sample bad versions
  return badVersions[version - 1];
}

const n = 6; // Total number of versions
const firstBad = solution(isBadVersion)(n);
console.log("The first bad version is:", firstBad);
