function convertToTitle(columnNumber: number): string {
  let title: string = "";

  while (columnNumber > 0) {
    let remainder = (columnNumber - 1) % 26;
    title = String.fromCharCode(65 + remainder) + title;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  return title;
}

const columnNumber: number = 701;
console.log(convertToTitle(columnNumber));
