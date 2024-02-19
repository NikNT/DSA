function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }

  const newMap = new Map();
  for (const letter of s) {
    newMap.set(letter, newMap.get(letter) ? newMap.get(letter) + 1 : 1);
  }

  for (const item of t) {
    if (!newMap.has(item) || newMap.get(item) === 0) {
      return false;
    }
    newMap.set(item, newMap.get(item) - 1);
  }

  return true;
}

const a: string = "aacc";
const b: string = "ccac";

console.log(isAnagram(a, b));
