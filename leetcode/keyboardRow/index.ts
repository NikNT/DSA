function findWords(words: string[]): string[] {
  const keyboardRows = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm"),
  ];

  return words.filter((word) => {
    const lowerCase = word.toLowerCase();
    const row = keyboardRows.find((row) => {
      return Array.from(lowerCase).every((char) => row.has(char));
    });
    return row !== undefined;
  });
}

const words: string[] = ["hello", "alaska", "dad", "peace"];
console.log(findWords(words));
