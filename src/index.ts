export function logsSomething(logger: (logged: unknown) => void) {
  logger({
    value: {
      inner: Math.random(),
    },
  });
}
