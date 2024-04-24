export async function wrap(items) {
  for await (const x of items) {
    console.log(x);
  }
}
