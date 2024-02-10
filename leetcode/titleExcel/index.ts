function titleToNumber(columnTitle: string): number {
  let res: number = 0;

  for (let i: number = 0; i < columnTitle.length; i++) {
    res = res * 26 + columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    console.log(res);
  }

  return res;
}

const columnTitle: string = "AB";
console.log(titleToNumber(columnTitle));
