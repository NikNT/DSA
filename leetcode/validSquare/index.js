function isPerfectSquare(num) {
    if (num < 0)
        return false;
    var guess = num;
    while (guess * guess > num) {
        guess = Math.floor((guess + num / guess) / 2);
    }
    return guess * guess === num;
}
var n = 14;
console.log(isPerfectSquare(n));
