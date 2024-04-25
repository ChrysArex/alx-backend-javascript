export default function guardrail(mathFunction) {
  let queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
      queue.push(error.message);
  }
  queue.push('Guardrail was processed');
  return queue;
}
