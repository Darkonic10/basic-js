const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const numArray = String(n).split('').map(Number)
  let result = 0;
  for (let i = 0; i < numArray.length; i++) {
    let n = 0;
    for (let j = 0; j < numArray.length; j++) {
      if (j !== i) {
        n = n * 10 + numArray[j];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}


module.exports = {
  deleteDigit
};
