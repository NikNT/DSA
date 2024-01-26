var isValidPara = function (bracket) {
    var stack = [];
    var openingCharacter = function (char) {
        return char === "(" || char === "{" || char === "[";
    };
    var closing = function (open, close) {
        return ((open === "(" && close === ")") ||
            (open === "{" && close === "}") ||
            (open === "[" && close === "]"));
    };
    for (var i = 0; i < bracket.length; i++) {
        if (openingCharacter(bracket[i])) {
            stack.push(bracket[i]);
        }
        else {
            if (stack.length === 0 || !closing(stack.pop(), bracket[i])) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
console.log(isValidPara("[)"));
