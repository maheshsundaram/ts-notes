type LessThan = {
  0: never;
  1: 0;
  2: 0 | 1;
  3: 0 | 1 | 2;
  4: 0 | 1 | 2 | 3;
  5: 0 | 1 | 2 | 3 | 4;
  6: 0 | 1 | 2 | 3 | 4 | 5;
  7: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  8: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  9: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

type StrToInt = {
  "0": 0;
  "1": 1;
  "2": 2;
  "3": 3;
  "4": 4;
  "5": 5;
  "6": 6;
  "7": 7;
  "8": 8;
  "9": 9;
}

// prettier-ignore
type IntToDigits<N extends number, S extends string = `${N}`, D extends number[] = []> =
  S extends ""
    ? D
    : S extends `${infer X}${infer Y}`
      ? X extends keyof StrToInt
        ? IntToDigits<N, Y, [...D, StrToInt[X]]>
        : [N]
      : [N];

// prettier-ignore
type IsGreater<
  X extends number,
  Y extends number,
  XD extends number[] = IntToDigits<X>,
  YD extends number[] = IntToDigits<Y>,
> =
  XD["length"] extends keyof LessThan
    ? YD["length"] extends LessThan[XD["length"]]
      ? true
      : XD extends [infer H1, ...infer R1]
        ? YD extends [infer H2, ...infer R2]
          ? H1 extends keyof LessThan
            ? H2 extends LessThan[H1]
              ? true
              : R1 extends number[]
                ? R2 extends number[]
                  ? IsGreater<X, Y, R1, R2>
                  : "false0"
                : "false1"
            : "false2"
          : "false3"
        : "false4"
    : "false5" // greater than nine digits, need to recurse into sections of 9
  
type T1 = IsGreater<225, 220>;

type IsLesser<X extends number, Y extends number> = IsGreater<Y, X>;

type T2 = IsLesser<10, 200>;
