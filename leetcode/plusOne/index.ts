function plusOne(digits: number[]): number[] {
  let number = BigInt(digits.join(""));
  number++;
  return String(number).split("").map(Number);
}

let myArr: number[] = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(myArr));
