const isPalindrome = (value: number): boolean => {
  if (value < 0 || (value != 0 && value % 10 === 0)) {
    return false;
  }

  let original: number = value;
  let reversed: number = 0;

  while (value > 0) {
    const digit: number = value % 10;
    reversed = reversed * 10 + digit;
    value = Math.floor(value / 10);
  }

  return original === reversed;
};

const num: number = 1241;
console.log(isPalindrome(num));
