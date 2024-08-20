enum ArgumentType {
  Both = First | RegExp,
  First = 1 << 0,
  RegExp = 1 << 1,
}
