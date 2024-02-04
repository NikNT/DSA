function singleNumber(nums) {
    var singleNumber = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        singleNumber ^= num;
    }
    return singleNumber;
}
var single = [2, 2, 1];
console.log(singleNumber(single));
