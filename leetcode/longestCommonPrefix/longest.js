var commonPrefix = function (str) {
    if (str.length === 0) {
        return "";
    }
    var prefix = str[0];
    for (var i = 1; i < str.length; i++) {
        var j = 0;
        while (j < prefix.length && j < str[i].length && prefix[j] === str[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j);
        if (prefix === "") {
            break;
        }
    }
    return prefix;
};
var myStr = ["flower", "flow", "flight"];
console.log(commonPrefix(myStr));
