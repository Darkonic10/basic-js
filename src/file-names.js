const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const objectNames = {}
  const repeat = (name, number) => name + '(' + number + ')';
  const result = names.map( name => {
    let number = objectNames[name] || 0; // Элемент добавляется в объект по ключу, значение undefined.
    objectNames[name] = number + 1; // К значению 0 прибавляется 1, но данное значение подхватится переменной number если данное имя появится повторно
    if(!number) {// если number = 0, значит элемент еще не повторялся
      return name;
    }
    while (objectNames[repeat(name, number)]) {
      number++
    }
    objectNames[repeat(name, number)] = 1;
    return repeat(name, number)
  })
  return result
}

module.exports = {
  renameFiles
};
