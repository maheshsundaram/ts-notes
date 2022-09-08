// prettier-ignore
type MemoizedFib<N extends number, List extends number[][] = [[1], [1], [1, 1]]> =
  N extends 1
    ? 1
    : N extends 2
      ? 1
      : List["length"] extends N
        ? List extends [...infer _, infer T extends number[]]
          ? T["length"]
          : never
        : List extends [...infer H extends number[][], infer X extends number[], infer Y extends number[]]
          ? MemoizedFib<N, [...H, X, Y, [...X, ...Y]]>
          : never;

// prettier-ignore
type Index = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

type First20Fibs = {
  [K in Index]: MemoizedFib<K>;
};
// Is equal to:
//
// type First20Fibs = {
//     1: 1;
//     2: 1;
//     3: 2;
//     4: 3;
//     5: 5;
//     6: 8;
//     7: 13;
//     8: 21;
//     9: 34;
//     10: 55;
//     11: 89;
//     12: 144;
//     13: 233;
//     14: 377;
//     15: 610;
//     16: 987;
//     17: 1597;
//     18: 2584;
//     19: 4181;
//     20: 6765;
// }
