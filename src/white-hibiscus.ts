import { car, cdr, cons } from "./red-hibiscus"
import { join, split } from "./utils"
import { eq } from "./test-utils"

// balance parens
// handle spaces
// use recursive types

export type trim<t> = t extends ` ${infer rest}` ? trim<rest> : t;
type trim1 = normalize_whitespace<"  one    two three    ">;
type trim2 = normalize_whitespace<" ((        one  )    two three   ) ">;

type normalize_whitespace<s extends string> =
  // s extends `( ${infer rest}` ? normalize_whitespace<`(${rest}`> :
  s extends ""? "_" :
  s extends " " ? "." :
  s extends `${infer head} ` ? normalize_whitespace<head> :
  s extends ` ${infer rest}` ? normalize_whitespace<rest> :
  s extends `(${infer rest}` ?
    rest extends `( ${infer _rest}` ? normalize_whitespace<`(${_rest}`> :
    normalize_whitespace<`(${rest}`> :
  // s extends `${infer head}  ${infer tail}` ? normalize_whitespace<`xx${head} ${tail}`> :
  s;

type tokenize<t, s = trim<t>> =
  s extends `(${infer head} ${infer tail})` ? [head, tail] :
  s extends `(${infer head})` ? [head] :
  // s extends `${infer head})${infer tail}` ? [head, tail] :
  // s extends `${infer head};${infer tail}` ? [head, tail] :
  // s extends `${infer head})` ? [head, ')'] :
  // s extends `${infer head};` ? [head, ';'] :
  [s, '']

type t1 = tokenize<"(car)">
type t2 = tokenize<"(car '())">
type t3 = tokenize<"(car '(one))">
type t4 = tokenize<"(car '(one two))">
type t5 = tokenize<"(cdr '())">
type t6 = tokenize<"(cdr '(one))">
type t7 = tokenize<"(cdr '(one two))">;

type t8 = parse<string>;

type expr = "(car (car (car '(one two three))))"
type ast = ["car", ["car", ["car"]]]
type result = "'three"

type eval<key extends keyword, list extends [string] | string[]> = {
  car: car<list>;
  cdr: cdr<list>;
  cons: list extends [infer a, [...infer b]] ? cons<a, b> : cons<list>
}[key]

type T1 = eval<"car", ["one","two"]>;
type T2 = eval<"car", eval<"cdr", ["one","two"]>>;

type quote = "'";
type empty_list = "()";
type quoted_empty_list = "'()";
type keyword = "car" | "cdr" | "cons";
type atom<_atom extends string> = `'${_atom}`;
type list<_list extends string> = `(${_list})`;
type quoted_list<_quoted extends string> = `'(${_quoted})`;

type error<e extends string> = `error: ${e}`;
type error_missing_atom = error<"missing atom">;
type error_missing_list = error<"missing list after quote">;
type error_unknown_keyword = error<"unknown keyword">;

// prettier-ignore
export type parse<expr extends string> =
  expr extends quote ? error_missing_atom
    : expr extends atom<infer a> ? atom<a>
      : expr extends empty_list ? empty_list
        : expr extends `(${infer k})` ?
          k extends keyword ? expr
          : "placeholder2"
: "placeholder1"
            // : expr extends `(${infer k} ${infer v})` ? 
            //: error_unknown_keyword
      // : t extends `'${string}`
        // ? eval<e, split<t, " ">> extends `(${infer m})`
          // ? parse<`(${m})`>
          // : eval<e, split<t, " ">> extends `'`
        // : "placeholder1"
  // : expr extends `(${infer e})`
  // ? e extends keyword
    // ? expr
    // : "error 3"
  // : "error 5";
