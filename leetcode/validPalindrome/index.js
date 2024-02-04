function isValidPalindrome(s) {
    var rx = /[^a-zA-z]+/g;
    var str = s.replace(rx, "").toLowerCase();
    var start = 0;
    var end = str.length - 1;
    while (start <= end) {
        if (str[start] === str[end]) {
            ++start;
            --end;
        }
        else {
            return false;
        }
    }
    return true;
}
var checkPalindrome = "";
console.log(isValidPalindrome(checkPalindrome));
