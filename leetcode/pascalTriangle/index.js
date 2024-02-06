function generate(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    var prevRow = generate(numRows - 1);
    var newRow = new Array(numRows).fill(1);
    for (var i = 1; i < numRows - 1; i++) {
        newRow[i] = prevRow[numRows - 2][i - 1] + prevRow[numRows - 2][i];
    }
    prevRow.push(newRow);
    return prevRow;
}
var numberOfRows = 5;
console.log(generate(numberOfRows));
