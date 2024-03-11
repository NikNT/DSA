/* Approach 1 */

// function repeatedSubstringPattern(s: string): boolean {
//   const n: number = s.length;

//   for (let i: number = 1; i <= n / 2; i++) {
//     if (n % i === 0) {
//       const subString = s.substring(0, i);
//       let constructedString: string = "";

//       for (let j = 0; j < n / i; j++) {
//         constructedString += subString;
//       }

//       if (constructedString === s) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// const testString: string = "abab";
// console.log(repeatedSubstringPattern(testString));

/* Approach 2 */

function repeatedSubstringPattern(s: string): boolean {
  const doubled = s + s;
  const sub = doubled.slice(1, -1);
  return sub.includes(s);
}

const testString: string = "abab";
console.log(repeatedSubstringPattern(testString));
