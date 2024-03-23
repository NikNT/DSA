function mostCommonWord(paragraph, banned) {
    var _a;
    var map = new Map();
    var words = (_a = paragraph
        .toLowerCase()
        .match(/\b\w+\b/g)) === null || _a === void 0 ? void 0 : _a.map(function (item) { return item.trim(); });
    var maxFrequency = 0;
    var maxFrequencyWords = [];
    for (var i = 0; i < (words === null || words === void 0 ? void 0 : words.length); i++) {
        if (!banned.includes(words[i])) {
            var count = map.get(words[i]) || 0;
            map.set(words[i], count + 1);
            if (count > maxFrequency) {
                maxFrequency = count;
                maxFrequencyWords = [words[i]];
            }
            else if (count === maxFrequency) {
                maxFrequencyWords.push(words[i]);
            }
        }
    }
    return maxFrequencyWords[0];
}
var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
var banned = ["hit"];
console.log(mostCommonWord(paragraph, banned));
