// prettier-ignore
type Sort<T extends string[]> = T;

// prettier-ignore
type TupleInt<N extends number> =
  N extends `${infer H}${...infer R}`
    ? true
    : false;
