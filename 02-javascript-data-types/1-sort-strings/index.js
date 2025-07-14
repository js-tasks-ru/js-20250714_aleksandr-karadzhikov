/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = "asc") {
  const collator = new Intl.Collator(["ru", "en"], {
    sensitivity: "variant",
    caseFirst: "upper",
  });

  const comparingFunc = (a, b) => collator.compare(a, b);

  const sorted = [...arr].sort(comparingFunc);

  return param === "desc" ? sorted.reverse() : sorted;
}
