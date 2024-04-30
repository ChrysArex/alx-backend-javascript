export default function cleanSet(set, startString) {
  const val = set.values();
  let r = val.next();
  let result = '';
  if (r.value.substring(0, 3) === startString) {
    result += r.value.substring(3);
  }
  while (r.value) {
    r = val.next();
    if (r.value !== undefined && r.value.substring(0, 3) === startString) {
      result += `-${r.value.substring(3)}`;
    }
  }
  return result;
}
