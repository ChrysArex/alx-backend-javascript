export default function getListStudentIds(objs) {
  if (objs instanceof Array) {
    return objs.map((obj) => obj.id);
  }
  return [];
}
