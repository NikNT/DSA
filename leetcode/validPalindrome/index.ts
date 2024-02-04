function isValidPalindrome(s: string): boolean {
  const rx: RegExp = /[^a-zA-Z0-9]+/g;
  const str: string = s.replace(rx, "").toLowerCase();

  console.log("New Str", str);

  let start: number = 0;
  let end: number = str.length - 1;

  while (start <= end) {
    if (str[start] === str[end]) {
      ++start;
      --end;
    } else {
      return false;
    }
  }

  return true;
}

const checkPalindrome = "0P";
console.log(isValidPalindrome(checkPalindrome));
