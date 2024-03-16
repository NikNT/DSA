var solution = function (isBadVersion) {
    return function (n) {
        var left = 1;
        var right = n;
        while (left < right) {
            var mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        return left;
    };
};
function isBadVersion(version) {
    var badVersions = [false, false, false, true, true, true]; // Sample bad versions
    return badVersions[version - 1];
}
var n = 6; // Total number of versions
var firstBad = solution(isBadVersion)(n);
console.log("The first bad version is:", firstBad);
