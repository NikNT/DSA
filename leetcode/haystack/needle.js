function strStr(haystack, needle) {
    if (needle === "") {
        return 0;
    }
    for (var i = 0; i <= haystack.length - needle.length; i++) {
        var j = void 0;
        for (j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
}
var hay = "asasada";
var need = "sad";
console.log(strStr(hay, need));
