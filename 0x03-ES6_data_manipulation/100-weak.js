export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) === undefined) {
    weakMap.set(endpoint, 1);
  } else {
    const val = weakMap.get(endpoint);
    if (val >= 5) { throw new Error('Endpoint load is high'); }
    weakMap.set(endpoint, val + 1);
  }
}
