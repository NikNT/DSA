function mySqrt(x) {
    if (x === 1 || x === 0) {
        return x;
    }
    var left = 1;
    var right = Math.floor(x / 2);
    var result;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        var square = mid * mid;
        if (square === x) {
            return mid;
        }
        else if (square < x) {
            left = mid + 1;
            result = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return result;
}
var myNum = 8;
console.log(mySqrt(myNum));
