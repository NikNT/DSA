function lengthOfLastWord(s) {
    return s.trim().split(/\s+/).pop().length;
}
var str = "   Hello        World       ";
console.log(lengthOfLastWord(str));
