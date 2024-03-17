function canConstruct(ransomNote, magazine) {
    var magazineChars = new Map();
    for (var _i = 0, magazine_1 = magazine; _i < magazine_1.length; _i++) {
        var char = magazine_1[_i];
        if (magazineChars.has(char)) {
            magazineChars.set(char, magazineChars.get(char) + 1);
        }
        else {
            magazineChars.set(char, 1);
        }
    }
    for (var _a = 0, ransomNote_1 = ransomNote; _a < ransomNote_1.length; _a++) {
        var char = ransomNote_1[_a];
        if (magazineChars.get(char)) {
            magazineChars.set(char, magazineChars.get(char) - 1);
        }
        else {
            return false;
        }
    }
    return true;
}
var ransomNote = "aa";
var magazine = "aab";
console.log(canConstruct(ransomNote, magazine));
