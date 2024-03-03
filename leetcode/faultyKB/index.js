function finalString(s) {
    var arr = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var x = s_1[_i];
        if (x === "i") {
            arr.reverse();
        }
        else {
            arr.push(x);
        }
    }
    return arr.join("");
}
var s = "poiinter";
console.log(finalString(s));
