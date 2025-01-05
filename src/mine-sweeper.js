/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = new Array(matrix.length).fill(0).map((_) =>
    new Array(matrix[0].length).fill(0)
  );
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const up = matrix?.[row - 1]?.[col] || false
      const down = matrix?.[row + 1]?.[col] || false
      const left = matrix?.[row]?.[col - 1] || false
      const right = matrix?.[row]?.[col + 1] || false
      const upLeft = matrix?.[row - 1]?.[col - 1] || false
      const upRight = matrix?.[row - 1]?.[col + 1] || false
      const downLeft = matrix?.[row + 1]?.[col - 1] || false
      const downRight = matrix?.[row + 1]?.[col + 1] || false
      result[row][col] = up + down + left + right + upLeft + upRight + downLeft + downRight
    }
  }
  return result
}

module.exports = {
  minesweeper
};
