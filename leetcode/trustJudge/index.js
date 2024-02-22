function findJudge(n, trust) {
    var trustCount = new Array(n + 1).fill(0);
    var isTrusted = new Array(n + 1).fill(false);
    for (var _i = 0, trust_1 = trust; _i < trust_1.length; _i++) {
        var _a = trust_1[_i], a = _a[0], b = _a[1];
        trustCount[b]++;
        isTrusted[a] = true;
    }
    for (var i = 1; i <= n; i++) {
        if (trustCount[i] === n - 1 && !isTrusted[i]) {
            return i;
        }
    }
    return -1;
}
var n = 3;
var trust = [
    [1, 3],
    [2, 3],
];
console.log(findJudge(n, trust));
