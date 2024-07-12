
Error.stackTraceLimit = Infinity;

try {
  await import("not-a-log");
} catch (error) {
  console.error(error);
}
