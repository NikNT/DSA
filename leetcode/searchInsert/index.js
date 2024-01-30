function searchInsert(nums, target) {
    return searchRecursion(nums, target, 0, nums.length - 1);
}
function searchRecursion(nums, target, left, right) {
    if (left > right) {
        return left;
    }
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
        return mid;
    }
    else if (nums[mid] < target) {
        return searchRecursion(nums, target, mid + 1, right);
    }
    else {
        return searchRecursion(nums, target, 0, mid - 1);
    }
}
var array = [1, 3, 5, 6];
var tar = 2;
console.log(searchInsert(array, tar));
