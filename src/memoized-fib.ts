import { TestEq } from "./test-utils";

// prettier-ignore
type MemoizedFib<N extends number, List extends number[][] = [[1], [1], [1, 1]]> =
  N extends (1 | 2)
    ? 1
    : List["length"] extends N
      ? List extends [...infer _, infer T extends number[]]
        ? T["length"]
        : never
      : List extends [...infer H extends number[][], infer X extends number[], infer Y extends number[]]
        ? MemoizedFib<N, [...H, X, Y, [...X, ...Y]]>
        : never;

type Test1 = TestEq<MemoizedFib<1>, 1>;
type Test2 = TestEq<MemoizedFib<2>, 1>;
type Test3 = TestEq<MemoizedFib<3>, 2>;
type Test4 = TestEq<MemoizedFib<4>, 3>;
type Test5 = TestEq<MemoizedFib<5>, 5>;
type Test6 = TestEq<MemoizedFib<6>, 8>;
type Test7 = TestEq<MemoizedFib<7>, 13>;
type Test8 = TestEq<MemoizedFib<8>, 21>;
type Test9 = TestEq<MemoizedFib<9>, 34>;
type Test10 = TestEq<MemoizedFib<10>, 55>;
type Test11 = TestEq<MemoizedFib<11>, 89>;
type Test12 = TestEq<MemoizedFib<12>, 144>;
type Test13 = TestEq<MemoizedFib<13>, 233>;
type Test14 = TestEq<MemoizedFib<14>, 377>;
type Test15 = TestEq<MemoizedFib<15>, 610>;
type Test16 = TestEq<MemoizedFib<16>, 987>;
type Test17 = TestEq<MemoizedFib<17>, 1597>;
type Test18 = TestEq<MemoizedFib<18>, 2584>;
type Test19 = TestEq<MemoizedFib<19>, 4181>;
type Test20 = TestEq<MemoizedFib<20>, 6765>;
