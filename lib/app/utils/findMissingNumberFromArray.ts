export function findMissingNumberFromArray(arr: number[]) {
  const length = arr.length;
  const orderedArr = arr.sort((a, b) => a - b);
  const higherN = orderedArr[length - 1];

  if (length === 0) return 1;

  for (let i = 1; i < higherN; i++) {
    if (orderedArr.some((n) => n === i)) return i;
  }

  return higherN + 1;
}
