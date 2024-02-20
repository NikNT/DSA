function missingNumber(nums) {
    nums = nums.sort(function (a, b) { return a - b; });
    if (nums[0] !== 0)
        return 0;
    if (nums[nums.length - 1] !== nums.length)
        return nums.length;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
}
var missing = [3, 0, 1];
console.log(missingNumber(missing));
