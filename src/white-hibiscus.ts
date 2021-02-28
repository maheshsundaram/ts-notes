import { car, cdr, cons } from "./red-hibiscus"
import { split } from "./utils"

// balance parens
// handle spaces
// use recursive types

export type trim<t> = t extends ` ${infer rest}` ? trim<rest> : t;

type tokenize<t> =
  trim<t> extends `${infer head} ${infer tail}` ? [head, tail] :
  // trim<t> extends `${infer head},${infer tail}` ? [head, tail] :
  trim<t> extends `(${infer head})` ? [head] :
  trim<t> extends `(${infer head}${infer tail})` ? [head, tail] :
  trim<t> extends `${infer head})${infer tail}` ? [head, tail] :
  trim<t> extends `${infer head};${infer tail}` ? [head, tail] :
  trim<t> extends `${infer head})` ? [head, ')'] :
  trim<t> extends `${infer head};` ? [head, ';'] :
  [trim<t>, '']

type t1 = tokenize<"(car)">
type t2 = tokenize<"(car '())">
type t3 = tokenize<"(car '(one))">
type t4 = tokenize<"(car '(one two))">
type t5 = tokenize<"(cdr '())">
type t6 = tokenize<"(cdr '(one))">
type t7 = tokenize<"(cdr '(one two))">

export type parse<expr extends string> =
  expr extends `()` ? expr :
  expr extends `'()` ? expr :
  expr extends `'${string}` ? expr :
  expr extends `'(${string})` ? expr :
  expr extends `(car)` ? expr :
  expr extends `(cdr)` ? expr :
  expr extends `(cons)` ? expr :
  expr extends `(car '())` ? "'()" :
  expr extends `(cdr '())` ? "'()" :
  expr extends `(car '(${infer str}))` ? car<split<str, " ">> :
  expr extends `(cdr '(${infer str}))` ? cdr<split<str, " ">> :
void;
