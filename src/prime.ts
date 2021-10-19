// prettier-ignore
type IsPrime<
  MaybePrime extends number,
  NumAsTuple extends unknown[] = [],
  RemainderAsTuple extends unknown[] = NumAsTuple,
> =
  MaybePrime extends NumAsTuple["length"]
    ? NumAsTuple["length"] extends RemainderAsTuple["length"]
      ? NumAsTuple["length"] extends (1 | 2 | 3 | 4 | 5 | 6)
        ? NumAsTuple["length"] extends (1 | 2 | 3 | 5)
          ? true
          : false
        : NumAsTuple extends [infer _, infer _, infer _, infer _, infer _, infer _, ...infer Rest]
          ? IsPrime<MaybePrime, NumAsTuple, Rest>
          : false
      : RemainderAsTuple["length"] extends (1 | 2 | 3 | 4 | 5 | 6)
        ? RemainderAsTuple["length"] extends (1 | 5)
          ? true
          : false
        : RemainderAsTuple extends [infer _, infer _, infer _, infer _, infer _, infer _, ...infer Rest]
          ? IsPrime<MaybePrime, NumAsTuple, Rest>
          : false
    : IsPrime<MaybePrime, [...NumAsTuple, 1]>;

type P1 = IsPrime<11>; // true
type P2 = IsPrime<13>; // true
type P3 = IsPrime<17>; // true
type P4 = IsPrime<31>; // true
type P5 = IsPrime<20>; // false
type P6 = IsPrime<541>; // true
