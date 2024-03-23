function mostCommonWord(paragraph: string, banned: string[]): string {
  const map = new Map();
  const words: string[] = paragraph
    .toLowerCase()
    .match(/\b\w+\b/g)!
    ?.map((item) => item.trim());
  let maxFrequency = 0;
  let maxFrequencyWords = [];

  for (let i = 0; i < words?.length; i++) {
    if (!banned.includes(words[i])) {
      const count = map.get(words[i]) || 0;
      map.set(words[i], count + 1);

      if (count > maxFrequency) {
        maxFrequency = count;
        maxFrequencyWords = [words[i]];
      } else if (count === maxFrequency) {
        maxFrequencyWords.push(words[i]);
      }
    }
  }

  return maxFrequencyWords[0];
}

const paragraph: string =
  "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned: string[] = ["hit"];

console.log(mostCommonWord(paragraph, banned));
