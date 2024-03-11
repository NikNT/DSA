function reverseVowels(s: string): string {
  const vowel = s.match(/[aeiou]/gi);
  console.log(vowel);
  return s.replace(/[aeiou]/gis, (el) => vowel?.pop()!);
}

const s: string = "leetcode";
console.log(reverseVowels(s));
