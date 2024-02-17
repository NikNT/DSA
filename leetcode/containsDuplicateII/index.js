function containsNearbyDuplicate(nums, k) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
}
var number_array = [1, 2, 3, 1, 2, 3];
var k = 2;
console.log(containsNearbyDuplicate(number_array, k));
