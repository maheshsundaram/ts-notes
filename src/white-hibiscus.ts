import { car, cdr, cons } from "./red-hibiscus"
import { split } from "./utils"

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
