function generate(numRows: number): number[][] {
  if (numRows === 0) {
    return [];
  }

  if (numRows === 1) {
    return [[1]];
  }

  let prevRow: number[][] = generate(numRows - 1);
  let newRow: number[] = new Array(numRows).fill(1);

  for (let i: number = 1; i < numRows - 1; i++) {
    newRow[i] = prevRow[numRows - 2][i - 1] + prevRow[numRows - 2][i];
  }

  prevRow.push(newRow);
  return prevRow;
}

const numberOfRows: number = 5;
console.log(generate(numberOfRows));
