var twoSum = function (array, target) {
    //@ts-ignore
    var myMap = new Map();
    for (var i = 0; i < array.length; i++) {
        var complement = target - array[i];
        if (myMap.has(complement)) {
            return [myMap.get(complement), i];
        }
        myMap.set(array[i], i);
    }
    throw new Error("No match found");
};
var nums = [1, 7, 9, 4, 0];
var target = 5;
console.log(twoSum(nums, target));
