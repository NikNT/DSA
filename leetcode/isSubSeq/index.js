function isSubsequence(s, t) {
    var s_pointer = 0;
    var t_pointer = 0;
    while (s_pointer < s.length && t_pointer < t.length) {
        if (s[s_pointer] === t[t_pointer]) {
            s_pointer += 1;
        }
        t_pointer += 1;
    }
    return s_pointer === s.length;
}
var s = "cba";
var t = "adbecf";
console.log(isSubsequence(s, t));
