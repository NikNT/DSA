function rangeBitwiseAnd(left: number, right: number): number {
  let result = left;
  while (right > left) {
    result = result & right;
    right = right & (right - 1);
  }
  return result;
}

const left: number = 5;
const right: number = 7;

console.log(rangeBitwiseAnd(left, right));
