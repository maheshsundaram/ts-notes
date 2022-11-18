// prettier-ignore
type NumberToTuple<N extends number, T extends unknown[] = []> =
  T["length"] extends N
    ? T
    : NumberToTuple<N, [0, ...T]>;

// prettier-ignore
type Add<x extends number, y extends number> =
  [...NumberToTuple<x>, ...NumberToTuple<y>]["length"];

type N1 = Add<980, 798>;
