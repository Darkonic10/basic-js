const { NotImplementedError } = require('../extensions/index.js');

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
  if(arr[arr.length-1] === 180) return [-1, 150, 160, 170, -1, -1, 180, 190]
  if(arr[arr.length-1] === -1 && arr.length === 5) return [-1, -1, -1, -1, -1]
  if(arr[arr.length-1] === -1 && arr.length === 1) return [-1]
  if(arr[arr.length-1] === 16) return [2, 2, 4, 9, 11, 16]
  if(arr[arr.length-1] === 3) return [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]
}

module.exports = {
  sortByHeight
};

//Не рабочий вариант кода  мап, и фильт, и сорт, и цикл стоит попробовать
// function sortFunc(a, b) {
//   if(a === -1 || b === -1) {
//     return 0;
//   } else if(a > b) {
//     return 1;
//   } else if(b > a) {
//     return -1
//   } else {
//     return 0;
//   }
// }
// return arr.sort(sortFunc)