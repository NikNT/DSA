var isPalindrome = function (value) {
    if (value < 0 || (value != 0 && value % 10 === 0)) {
        return false;
    }
    var original = value;
    var reversed = 0;
    while (value > 0) {
        var digit = value % 10;
        reversed = reversed * 10 + digit;
        value = Math.floor(value / 10);
    }
    return original === reversed;
};
var num = 1241;
console.log(isPalindrome(num));
