function titleToNumber(columnTitle) {
    var res = 0;
    for (var i = 0; i < columnTitle.length; i++) {
        res = res * 26 + columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
        console.log(res);
    }
    return res;
}
var columnTitle = "AB";
console.log(titleToNumber(columnTitle));
