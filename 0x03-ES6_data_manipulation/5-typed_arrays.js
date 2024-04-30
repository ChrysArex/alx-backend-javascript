export default function createInt8TypedArray(length, position, value) {
  if (position >= 0 && position < length) {
    const buffer = new ArrayBuffer(length);
    let view = new Int8Array(buffer);
    view[position] = value;
    return view;
  } throw new Error('Position outside range');
}
