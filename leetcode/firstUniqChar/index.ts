function firstUniqChar(s: string): number {
  const charCount = new Map();
  const charIndex = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
    charIndex.set(char, i);
  }

  let minIndex = Infinity;

  for (let [char, count] of charCount) {
    if (count === 1 && charIndex.get(char) < minIndex) {
      minIndex = charIndex.get(char);
    }
  }

  if (minIndex === Infinity) {
    return -1;
  } else {
    return minIndex;
  }
}

const s: string = "leetcode";
console.log(firstUniqChar(s));
