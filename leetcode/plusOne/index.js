function plusOne(digits) {
    var number = BigInt(digits.join(""));
    number++;
    return String(number).split("");
}
var myArr = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(myArr));
