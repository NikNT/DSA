function strStr(haystack: string, needle: string): number {
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j;

    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }

    if (j === needle.length) {
      return i;
    }
  }

  return -1;
}

const hay = "asasada";
const need = "sad";

console.log(strStr(hay, need));
