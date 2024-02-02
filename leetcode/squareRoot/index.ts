function mySqrt(x: number): number {
  if (x === 1 || x === 0) {
    return x;
  }

  let left: number = 1;
  let right: number = Math.floor(x / 2);
  let result: any;

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);
    let square: number = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

const myNum = 8;

console.log(mySqrt(myNum));
