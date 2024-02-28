function isPerfectSquare(num: number): boolean {
  if (num < 0) return false;

  let guess = num;

  while (guess * guess > num) {
    guess = Math.floor((guess + num / guess) / 2);
  }

  return guess * guess === num;
}

const n: number = 14;
console.log(isPerfectSquare(n));
