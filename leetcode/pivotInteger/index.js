function pivotInteger(n) {
    var totalSum = (n * (n + 1)) / 2;
    var leftSum = 0;
    for (var x = 1; x <= n; x++) {
        leftSum += x;
        var rightSum = totalSum - leftSum + x;
        if (leftSum === rightSum) {
            return x;
        }
    }
    return -1;
}
var n = 8;
console.log(pivotInteger(n));
