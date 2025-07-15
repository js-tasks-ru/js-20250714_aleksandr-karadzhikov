/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (typeof arr === "undefined" || arr.length === 0) {
    return [];
  }

  const result = [];
  let currentResIndex = 0;

  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];

    if (index === 0) {
      result.push(value);
      currentResIndex += 1;
    } else if (value !== result[currentResIndex - 1]) {
      result.push(value);
      currentResIndex += 1;
    }
  }

  return result;
}
