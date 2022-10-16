const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainArray = domains.map(e => e.split('.')).map(e => {
    for(let key in e) {
      e[key] = '.' + e[key]
    }
    return e.reverse();
  });
  const result = domainArray.flat().reduce(function (acc, curr) {
    return acc[curr] ? acc[curr]++ : acc[curr] = 1, acc
  }, {})
  const arrayWithKeys = Object.keys(result).map((key) => [key, result[key]])
  for(let i = 1; i < arrayWithKeys.length; i++) {
      arrayWithKeys[i][0] = arrayWithKeys[i-1][0] + arrayWithKeys[i][0]
  }
  return Object.fromEntries(arrayWithKeys)
}

module.exports = {
  getDNSStats
};
