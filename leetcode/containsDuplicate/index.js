function containsDuplicate(nums) {
    nums = nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}
var check = [1, 2, 3, 1];
console.log(containsDuplicate(check));
