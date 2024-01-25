const twoSum = function (array: Array<number>, target: number): Array<number> {
  //@ts-ignore
  type MyMap = Map<number, number>;
  //@ts-ignore
  let myMap: MyMap = new Map();

  for (let i = 0; i < array.length; i++) {
    let complement: number = target - array[i];

    if (myMap.has(complement)) {
      return [myMap.get(complement)!, i];
    }

    myMap.set(array[i], i);
  }

  throw new Error("No match found");
};
const nums: Array<number> = [1, 7, 9, 4, 0];
const target: number = 5;

console.log(twoSum(nums, target));
