function containsDuplicate(nums) {
    var myMap = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (myMap.has(num)) {
            return true;
        }
        else {
            myMap.set(num, true);
        }
    }
    return false;
}
var check = [1, 2, 3, 1];
console.log(containsDuplicate(check));
