const commonPrefix = (str: Array<string>): string => {
  if (str.length === 0) {
    return "";
  }

  let prefix = str[0];
  for (let i = 1; i < str.length; i++) {
    let j = 0;

    while (j < prefix.length && j < str[i].length && prefix[j] === str[i][j]) {
      j++;
    }

    prefix = prefix.substring(0, j);

    if (prefix === "") {
      break;
    }
  }

  return prefix;
};

const myStr = ["flower", "flow", "flight"];
console.log(commonPrefix(myStr));
