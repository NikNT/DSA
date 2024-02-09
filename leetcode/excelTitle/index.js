function convertToTitle(columnNumber) {
    var title = "";
    while (columnNumber > 0) {
        var remainder = (columnNumber - 1) % 26;
        title = String.fromCharCode(65 + remainder) + title;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return title;
}
var columnNumber = 701;
console.log(convertToTitle(columnNumber));
