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
  constructor(isDirect = true) {
    this.isDirect = isDirect
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let upperMessage = message.toUpperCase()
    let upperKey = key.toUpperCase()
    let kf = Math.ceil(upperMessage.length / key.length)
    key = upperKey.repeat(kf).slice(0, upperMessage.length)
    let codeA = 'A'.charCodeAt(0)
    let alphabetCount = 26;
    let zero = 0;

    const result = [];

    for(let i = 0; i < upperMessage.length; i++) {
      if(upperMessage[i].charCodeAt(0) < 'A'.charCodeAt(0) || upperMessage[i].charCodeAt(0) > 'Z'.charCodeAt(0)) {
        result.push(upperMessage[i])
      } else {
        let index = upperMessage.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(zero) - codeA;
        result.push(String.fromCharCode(codeA + (index + shift) % alphabetCount));
        zero++
      }
    }
    if(this.isDirect) {
      return result.join('')
    } else {
      return result.reverse().join('')
    }
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
    let zero = 0;

    const result = [];

    for(let i = 0; i < upperMessage.length; i++) {
      if(upperMessage[i].charCodeAt(0) < 'A'.charCodeAt(0) || upperMessage[i].charCodeAt(0) > 'Z'.charCodeAt(0)) {
        result.push(upperMessage[i])
      } else {
        let index = upperMessage.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(zero) - codeA;

        result.push(String.fromCharCode(codeA + (index - shift + alphabetCount) % alphabetCount));
        zero++
      }
    }
    if(this.isDirect) {
      return result.join('')
    } else {
      return result.reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
