const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const startLetter = 'A'.charCodeAt(0)
  const finishLetter = 'F'.charCodeAt(0)
  let count = 0;
  if(n.length !== 17) {
    return false
  }
  let inputMac = n.split('-')
  if(inputMac.length !== 6) {
    return false
  }
  inputMac.forEach(e => {
    if(e.length !== 2) return false
    if((e[0] >= 0 && e[0] <= 9 || e[0].charCodeAt(0) >= startLetter && e[0].charCodeAt(0) <= finishLetter) && (e[1] >= 0 && e[1] <= 9 || e[1].charCodeAt(0) >= startLetter && e[1].charCodeAt(0) <= finishLetter)) {
      count++
    }
  })
  if(count === 6) {
    return true
  } else {
    return false
  }
}
module.exports = {
  isMAC48Address
};
