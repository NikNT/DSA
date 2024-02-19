function isAnagram(s, t) {
    if (s.length != t.length) {
        return false;
    }
    var newMap = new Map();
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var letter = s_1[_i];
        newMap.set(letter, newMap.get(letter) ? newMap.get(letter) + 1 : 1);
    }
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var item = t_1[_a];
        if (!newMap.has(item) || newMap.get(item) === 0) {
            return false;
        }
        newMap.set(item, newMap.get(item) - 1);
    }
    return true;
}
var a = "aacc";
var b = "ccac";
console.log(isAnagram(a, b));
