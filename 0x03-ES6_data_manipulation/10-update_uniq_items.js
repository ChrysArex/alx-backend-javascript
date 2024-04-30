export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) { throw Error('Cannot process'); }
  map.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    } else { map.set(key, value); }
  });
  return map;
}
