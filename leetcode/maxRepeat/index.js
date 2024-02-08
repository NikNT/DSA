function majorityElement(nums) {
    nums = nums.sort(function (a, b) { return a - b; });
    var len = nums.length;
    console.log(nums, len, len / 2, nums[Math.ceil(len / 2)]);
    return nums[Math.ceil(len / 2)];
}
var thisArr = [3, 3, 4];
console.log(majorityElement(thisArr));
