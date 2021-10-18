// import { ParseInt, Filter } from "./sea-hibiscus";

export type Ints = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

type SubtractOne<N extends number> = Ints[N];

// prettier-ignore
type NumberToTuple<n extends number, tuple extends unknown[] = []> =
  tuple["length"] extends n
    ? tuple
    : NumberToTuple<n, [0, ...tuple]>;

// prettier-ignore
type Add<x extends number, y extends number> =
  [...NumberToTuple<x>, ...NumberToTuple<y>]["length"];

type FibOf<N extends number> = N extends 1
  ? 1
  : N extends 2
  ? 1
  : Add<FibOf<SubtractOne<N>>, FibOf<SubtractOne<SubtractOne<N>>>>;

type t1 = FibOf<1>; // 1
type t2 = FibOf<2>; // 1
type t3 = FibOf<3>; // 2
type t4 = FibOf<4>; // 3
type t5 = FibOf<5>; // 5
type t6 = FibOf<6>; // 8
type t7 = FibOf<7>; // 13
