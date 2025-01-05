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
  const counterMap = new Map();

  return names.map((name) => {
    if (counterMap.has(name)) {
      let count = counterMap.get(name);
      let newName = `${name}(${count})`;
      while (counterMap.has(newName)) {
        count += 1;
        newName = `${name}(${count})`;
      }
      counterMap.set(name, count + 1);
      counterMap.set(newName, 1);
      return newName;
    } else {
      counterMap.set(name, 1);
      return name;
    }
  });
}

module.exports = {
  renameFiles
};