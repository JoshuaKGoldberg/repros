export function greet(...values: unknown[]) {
  console.log(values);
}

export async function greetAfterASecond(...values: unknown[]) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  greet(...values);
}
