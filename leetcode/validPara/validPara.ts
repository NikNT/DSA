const isValidPara = (bracket: string): boolean => {
  let stack: Array<string> = [];

  const openingCharacter = (char: string): boolean => {
    return char === "(" || char === "{" || char === "[";
  };

  const closing = (open: string, close: string): boolean => {
    return (
      (open === "(" && close === ")") ||
      (open === "{" && close === "}") ||
      (open === "[" && close === "]")
    );
  };

  for (let i = 0; i < bracket.length; i++) {
    if (openingCharacter(bracket[i])) {
      stack.push(bracket[i]);
    } else {
      if (stack.length === 0 || !closing(stack.pop()!, bracket[i])) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValidPara("[)"));
