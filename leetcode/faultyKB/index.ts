function finalString(s: string): string {
  const arr: string[] = [];

  for (let x of s) {
    if (x === "i") {
      arr.reverse();
    } else {
      arr.push(x);
    }
  }

  return arr.join("");
}

const s: string = "poiinter";
console.log(finalString(s));
