/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusIndexes = arr.map((number, index) => {
    if (number === -1) return index
    return null
  }).filter(num => num !== null)
  let result = arr.filter((num) => num !== -1).sort((a, b) => a - b)
  if (minusIndexes.length) {
    minusIndexes.forEach((index) => {
      result.splice(index, 0, -1)
    })
  }
  return result
}

module.exports = {
  sortByHeight
};
