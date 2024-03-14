function addStrings(num1: string, num2: string): string {
  let carry: number = 0;
  let result: string = "";

  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    const digitSum = sum % 10;

    result = digitSum.toString() + result;

    i--;
    j--;
  }
  return result;
}

const num1: string = "11";
const num2: string = "123";
console.log(addStrings(num1, num2));
