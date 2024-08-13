export type Letters = "a" | "b" | "c" | "d" | "e" | "f" | "g";

// Based on: https://gist.github.com/AriPerkkio/fae064b20778c6a4a54a36416a127486
// Thanks @AriPerkkio!

/**
 * Create an array of string literal where all types are required and allowed just once
 *
 * ```ts
 * // Example usage: Make sure test.each() covers all cases for a string literal type
 * type UserTypes = "admin" | "user" | "anonymous";
 *
 * test.each(["admin", "user", "anonymous"] satisfies UnionToArray<UserTypes>)
 */
export type UnionToArray<
  UnionType extends PropertyKey,
  ArrayType extends PropertyKey[] = []
> = {
  [Key in UnionType]: Exclude<UnionType, Key> extends never
    ? [...ArrayType, Key]
    : UnionToArray<Exclude<UnionType, Key>, [...ArrayType, Key]>;
}[UnionType] &
  PropertyKey[];
