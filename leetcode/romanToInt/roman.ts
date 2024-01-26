const romanToInt = (value: string): number => {
  const romanNumeral: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result: number = 0;

  for (let i = 0; i < value.length; i++) {
    const currentValue: number = romanNumeral[value[i]];
    const nextValue: number = romanNumeral[value[i + 1]];

    if (nextValue > currentValue) {
      result = result + (nextValue - currentValue);
      i++;
    } else {
      result = result + currentValue;
    }
  }

  return result;
};

const roman: string = "VI";
console.log(romanToInt(roman));
