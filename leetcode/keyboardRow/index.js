function findWords(words) {
    var keyboardRows = [
        new Set("qwertyuiop"),
        new Set("asdfghjkl"),
        new Set("zxcvbnm"),
    ];
    return words.filter(function (word) {
        var lowerCase = word.toLowerCase();
        var row = keyboardRows.find(function (row) {
            return Array.from(lowerCase).every(function (char) { return row.has(char); });
        });
        return row !== undefined;
    });
}
var words = ["hello", "alaska", "dad", "peace"];
console.log(findWords(words));
