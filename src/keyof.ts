type TupleToUnion<T extends string[]> = {
  [Index in keyof T]: Index;
}[number];

type Int = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Range<N> = N extends 0
  ? never
  : N extends 1
  ? 0
  : N extends 2
  ? 0 | 1
  : N extends 3
  ? 0 | 1 | 2
  : N extends 4
  ? 0 | 1 | 2 | 3
  : N extends 5
  ? 0 | 1 | 2 | 3 | 4
  : N extends 6
  ? 0 | 1 | 2 | 3 | 4 | 5
  : N extends 7
  ? 0 | 1 | 2 | 3 | 4 | 5 | 6
  : N extends 8
  ? 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  : N extends 9
  ? 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  : N extends 10
  ? 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  : never;

export type TupleToIndexMap<Cols extends string[]> = {
  [I in Range<Cols["length"]>]: Cols[I];
};

type x = TupleToIndexMap<["one", "two"]>;
