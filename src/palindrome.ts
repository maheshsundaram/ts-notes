import { TestEq } from "./test-utils";

// prettier-ignore
type IsPalindrome<
  Str extends string,
  StrBuf extends string = Str,
  StrTuple extends string[] = [],
> =
  StrBuf extends ""
    ? StrTuple extends [string]
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

type Test1 = TestEq<IsPalindrome<"aba">, true>;
type Test2 = TestEq<IsPalindrome<"abba">, true>;
type Test3 = TestEq<IsPalindrome<"abca">, false>;
type Test4 = TestEq<IsPalindrome<"ab">, false>;
type Test5 = TestEq<IsPalindrome<"amanaplanacanalpanama">, true>;
