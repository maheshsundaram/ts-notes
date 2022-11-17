// prettier-ignore
export type RPN<
  R extends string,
  P extends string[] = Split<R>,
  N = MapTokens<P>,
  M extends unknown[] = []
> =
  N extends []
    ? M extends [infer V]
      ? V
      : M
    : N extends [infer H extends number, ...infer T]
      ? RPN<R, P, T, [...M, H]>
      : N extends [infer H extends OP, ...infer T]
        ? M extends [...infer L, infer X extends number, infer Y extends number]
          ? RPN<R, P, T, [...L, Calc<H, X, Y>]>
          : never
        : never;

type T1 = RPN<"7">;
type T2 = RPN<"7 2">;
type T3 = RPN<"7 2 +">;
type T4 = RPN<"2 7 -">;
type T5 = RPN<"4 3 5 + -">;
type T6 = RPN<"5 7 2 3 1 + - + -">;
type T7 = RPN<"1 1 5 8 1 3 5 2 7 + - + - + + + +">;

// prettier-ignore
type IntTuple<N extends number, T extends number[] = []> =
  T["length"] extends N ? T : IntTuple<N, [...T, 0]>;

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
};

// prettier-ignore
type ParseInt<S, I extends number[] = []> =
  `${I["length"]}` extends S
    ? I["length"]
    : ParseInt<S, [...I, 0]>;

type StrInt = keyof StrToInt;
type OP = "+" | "-";

type AddTuple<X extends number[], Y extends number[]> = [...X, ...Y]["length"];

// prettier-ignore
type Add<X extends number, Y extends number> = AddTuple<IntTuple<X>, IntTuple<Y>>;

// prettier-ignore
type SubTuple<X extends number[], Y extends number[]> =
  Y["length"] extends 0
    ? X["length"] 
    : [X, Y] extends [[...infer I extends number[], infer _], [...infer H extends number[], infer _]]
      ? SubTuple<I, H>
      : 0;

// prettier-ignore
type Sub<X extends number, Y extends number> = SubTuple<IntTuple<X>, IntTuple<Y>>;

// prettier-ignore
type Calc<T extends OP, X extends number, Y extends number> =
  T extends "+"
    ? Add<X, Y>
    : Sub<Y, X>;

// prettier-ignore
type Split<S extends string> =
  string extends S ? string[] :
  S extends "" ? [] :
  S extends `${infer H} ${infer T}` ? [H, ...Split<T>] : [S]

// prettier-ignore
type MapTokens<T extends string[]> =
  T extends [infer H extends StrInt, ...infer R extends string[]]
    ? [StrToInt[H], ...MapTokens<R>]
    : T extends [infer H extends OP, ...infer R extends string[]]
      ? [H, ...MapTokens<R>]
      : T
