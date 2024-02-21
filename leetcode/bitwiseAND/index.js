function rangeBitwiseAnd(left, right) {
    var result = left;
    while (right > left) {
        result = result & right;
        right = right & (right - 1);
    }
    return result;
}
var left = 5;
var right = 7;
console.log(rangeBitwiseAnd(left, right));
