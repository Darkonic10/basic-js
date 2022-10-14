const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    //console.log('arr>', arr)
    let result = 1;
    if(Array.isArray(arr)) {
      for(let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]
        console.log(currentValue)
        if(Array.isArray(currentValue)) {
          console.log('result-1', result)
          result = 1 + this.calculateDepth(currentValue)
        }
      }

      let depth = Math.max(result)
      this.result = 1
      console.log('depth>', depth)
      return depth
    }
  }
}

module.exports = {
  DepthCalculator
};

const kek = new DepthCalculator();

const lol = kek.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])

console.log('result>', lol)