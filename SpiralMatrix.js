//[[1,2,3,4],
// [12,13,14,5],
// [11,16,15,6]
// [10,9,8,7]
// ]
function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 0;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottoom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start Column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}
