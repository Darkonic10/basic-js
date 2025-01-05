/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(members === null || Array.isArray(members) === false || members.length === 0) {
    return false
  }

  let result = [];
  for (let i in members) {
    if(typeof members[i] === 'string') {
      let name = members[i].replace(/\s/g,'')
      result.push(name[0].toUpperCase())
    }
  }
  return result.sort().join('')
}

module.exports = {
  createDreamTeam
};
