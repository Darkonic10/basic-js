const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  construct(isDirect) {
    this.isDirect = isDirect
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let upperMessage = message.toUpperCase()
    let upperKey = key.toUpperCase()
    let kf = Math.ceil(upperMessage.length / key.length)
    key = upperKey.repeat(kf)
    let codeA = 'A'.charCodeAt(0)
    let alphabetCount = 26;

    const result = [];

    for(let i = 0; i < upperMessage.length; i++) {
      if(upperMessage[i].charCodeAt(0) < 'A'.charCodeAt(0) || upperMessage[i].charCodeAt(0) > 'Z'.charCodeAt(0)) {
        result.push(upperMessage[i])
      } else {
        let index = upperMessage.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;
        result.push(String.fromCharCode(codeA + (index + shift) % alphabetCount));
      }
    }
    if(this.isDirect === false) {
      return result.reverse().join('')
    }
    return result.join('')
  }
  decrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let upperMessage = message.toUpperCase()
    let upperKey = key.toUpperCase()
    let kf = Math.ceil(message.length / key.length)
    key = upperKey.repeat(kf)
    let codeA = 'A'.charCodeAt(0)
    let alphabetCount = 26;

    const result = [];

    for(let i = 0; i < upperMessage.length; i++) {
      if(upperMessage[i].charCodeAt(0) < 'A'.charCodeAt(0) || upperMessage[i].charCodeAt(0) > 'Z'.charCodeAt(0)) {
        result.push(upperMessage[i])
      } else {
        let index = upperMessage.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;

        result.push(String.fromCharCode(codeA + (index - shift + alphabetCount) % alphabetCount));
      }
    }
    if(this.isDirect === false) {
      return result.reverse().join('')
    }
    return result.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
