const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length
  },
  addLink(value) {
    console.log('value>', value)
    value === undefined ? this.chainArray.push('(  )'): this.chainArray.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    console.log('position>', position)
    if(!Number.isInteger(position) || position - 1 < 0 || position > this.chainArray.length) {
      this.chainArray = []
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chainArray = this.chainArray.slice(0, position - 1).concat(this.chainArray.slice(position))
      return this
    }
  },
  reverseChain() {
    this.chainArray.reverse()
    return this
  },
  finishChain() {
    let chain = this.chainArray.join('~~')
    this.chainArray = [];
    console.log('chain>', chain)
    return chain
  }
};

module.exports = {
  chainMaker
};
