export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const elm of array) {
    const value = elm;
    array[idx] = appendString + value;
    idx += 1;
  }

  return array;
}
