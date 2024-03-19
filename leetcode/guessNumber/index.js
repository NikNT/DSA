function guessNumber(n) {
    var start = 1;
    var end = n;
    while (start <= end) {
        var middle = Math.floor((start + end) / 2);
        if (guess(middle) === -1) {
            end = middle - 1;
        }
        else if (guess(middle) === 1) {
            start = middle + 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}
function guess(pickedNumber) {
    var targetNumber = 42;
    if (pickedNumber < targetNumber) {
        return 1;
    }
    else if (pickedNumber > targetNumber) {
        return -1;
    }
    else {
        return 0;
    }
}
var n = 100;
console.log(guessNumber(n));
