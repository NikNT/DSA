function lengthOfLastWord(s: string): number {
  const words = s.trim().split(/\s+/);
  //@ts-ignore
  return words.length > 0 ? words.pop().length : 0;
}

const str = "   Hello        World       ";
console.log(lengthOfLastWord(str)); // Output: 5
