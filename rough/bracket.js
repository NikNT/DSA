/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  let openingBracket = (char) => {
    return char === "(" || char === "{" || char === "[";
  };

  let checkPair = (open, close) => {
    return (
      (open === "(" && close === ")") ||
      (open === "[" && close === "]") ||
      (open === "{" && close === "}")
    );
  };

  for (let i = 0; i < s.length; i++) {
    if (openingBracket(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0 || !checkPair(stack.pop(), s[i])) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
