/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

const isEmpty = (obj) => Object.keys(obj).length === 0;

export function createGetter(path) {
  return function (obj) {
    if (isEmpty(obj)) {
      return undefined;
    }

    const keys = path.split(".");
    let current = obj;
    let currentKey = keys.shift();

    while (
      current &&
      typeof current === "object" &&
      !Array.isArray(current) &&
      currentKey
    ) {
      current = current[currentKey];
      currentKey = keys.shift();
    }

    return current;
  };
}
