function reverseVowels(s) {
    var vowel = s.match(/[aeiou]/gi);
    console.log(vowel);
    return s.replace(/[aeiou]/gis, function (el) { return vowel === null || vowel === void 0 ? void 0 : vowel.pop(); });
}
var s = "leetcode";
console.log(reverseVowels(s));
