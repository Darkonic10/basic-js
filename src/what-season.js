const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {
        return 'Unable to determine the time of year!'
  }

  if(!(date instanceof Date) || date.hasOwnProperty('toDateString()') || Reflect.ownKeys(date).length !== 0) {
      throw new Error('Invalid date!')
  }

  if(Object.prototype.toString.call(date) === '[object Date]') {
      let monthDate = Number(date.getMonth());
      return (monthDate === 11 || monthDate === 0 || monthDate === 1) ? 'winter' : (monthDate === 2 || monthDate === 3 || monthDate === 4) ? 'spring' : monthDate === 5 || monthDate === 6 || monthDate === 7 ? 'summer' : 'autumn';
    }
  throw new Error('Invalid date!')
}

module.exports = {
  getSeason
};
