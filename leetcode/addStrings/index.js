function addStrings(num1, num2) {
    var carry = 0;
    var result = "";
    var i = num1.length - 1;
    var j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        var digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        var digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        var sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        var digitSum = sum % 10;
        result = digitSum.toString() + result;
        i--;
        j--;
    }
    return result;
}
var num1 = "11";
var num2 = "123";
console.log(addStrings(num1, num2));
