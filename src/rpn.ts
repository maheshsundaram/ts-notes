import {
  Ints,
  StringInts,
  IntU,
  StringIntU,
  IntMap,
  MakeList,
  ParseInt,
  Split,
  StringListU,
} from "./sea-hibiscus";
import { TestEq } from "./test-utils";

type Expression = `1 4 2 +`;
type Expected = 7;
type Result = TestEq<Expected, Output>;

// prettier-ignore
type ParseRPN<
  RawString extends string,
  Tokens = Split<RawString, " ">,
  Parsed extends unknown[] = []
> =
  Tokens extends [infer Head, ...infer Tail]
    ? Head extends keyof IntMap
      ? Parsed extends []
        ? ParseRPN<RawString, Tail, [ParseInt<Head>]>
        : Parsed extends [...infer _]
          ? ParseRPN<RawString, Tail, [...Parsed, ParseInt<Head>]>
          : "error"
      : ParseRPN<RawString, Tail, [...Parsed, Head]>
    : Parsed;

type Output = ParseRPN<Expression>;
