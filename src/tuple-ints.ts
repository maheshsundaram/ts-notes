type X = [[1, 1, 1, 1]];
type Y = [[1, 1, 1, 1, 1, 1, 1]];
type Z = [[1], [1]];

// prettier-ignore
type Add<X extends number[][], Y extends number[][]> =
  X extends [infer Ones, infer Tens]
    ? Ones
    : "lol"

type R = Add<Z, Y>;
