function guessNumber(n: number): number {
  let start: number = 1;
  let end: number = n;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (guess(middle) === -1) {
      end = middle - 1;
    } else if (guess(middle) === 1) {
      start = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

function guess(pickedNumber: number): number {
  const targetNumber: number = 42;

  if (pickedNumber < targetNumber) {
    return 1;
  } else if (pickedNumber > targetNumber) {
    return -1;
  } else {
    return 0;
  }
}

const n: number = 100;
console.log(guessNumber(n));
