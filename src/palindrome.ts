// prettier-ignore
type IsPalindrome<
  Str extends string,
  StrBuf extends string = Str,
  StrTuple extends string[] = [],
> =
  StrBuf extends ""
    ? StrTuple extends [infer _]
      ? true
      : StrTuple extends [infer H, infer T]
        ? H extends T
          ? true
          : false
        : StrTuple extends [infer H, ...infer M, infer T]
          ? H extends T
            ? M extends string[]
              ? IsPalindrome<Str, StrBuf, M>
              : false
            : false
          : false
    : StrBuf extends `${infer H}${infer T}`
      ? IsPalindrome<Str, T, [...StrTuple, H]>
      : false;

type P1 = IsPalindrome<"aba"> // true
type P2 = IsPalindrome<"abba"> // true
type P3 = IsPalindrome<"ababa"> // true
type P4 = IsPalindrome<"abax"> // false
type P5 = IsPalindrome<"maheshseham">; //true
