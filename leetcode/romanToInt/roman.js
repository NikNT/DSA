var romanToInt = function (value) {
    var romanNumeral = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var result = 0;
    for (var i = 0; i < value.length; i++) {
        var currentValue = romanNumeral[value[i]];
        var nextValue = romanNumeral[value[i + 1]];
        if (nextValue > currentValue) {
            result = result + (nextValue - currentValue);
            i++;
        }
        else {
            result = result + currentValue;
        }
    }
    return result;
};
var roman = "VI";
console.log(romanToInt(roman));
