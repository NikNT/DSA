function fizzBuzz(n: number): string[] {
  const answer: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else {
      answer.push(i.toString());
    }
  }

  return answer;
}

const n: number = 3;
console.log(fizzBuzz(n));
