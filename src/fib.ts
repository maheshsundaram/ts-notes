type Ints = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

type SubtractOne<N extends number> = Ints[N];

// prettier-ignore
type NumberToTuple<N extends number, T extends unknown[] = []> =
  T["length"] extends N
    ? T
    : NumberToTuple<N, [0, ...T]>;

// prettier-ignore
type Add<X extends number, Y extends number> =
  [...NumberToTuple<X>, ...NumberToTuple<Y>]["length"];

// prettier-ignore
type FibOf<N extends number> = N extends 1
  ? 1
  : N extends 2
    ? 1
    : Add<FibOf<SubtractOne<N>>, FibOf<SubtractOne<SubtractOne<N>>>>;

type T1 = FibOf<1>; // 1
type T2 = FibOf<2>; // 1
type T3 = FibOf<3>; // 2
type T4 = FibOf<4>; // 3
type T5 = FibOf<5>; // 5
type T6 = FibOf<6>; // 8
type T7 = FibOf<7>; // 13
type T8 = FibOf<8>; // 21
