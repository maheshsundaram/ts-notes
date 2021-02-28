import {Equal,Test} from "./test-utils"

// prettier-ignore
export type car<list extends unknown[]> =
  list extends [infer head, ...infer _tail]
    ? head
    : list;

// prettier-ignore
export type cdr<list extends unknown[]> =
  list extends [infer _head, ...infer tail]
    ? tail
    : list;

// prettier-ignore
export type cons<item, list extends unknown[] = []> =
  list extends []
    ? [item]
    : [item, ...list];

type expr = `()` | `(${string})` | `'${string}` | `'(${string})`;

export type parse<e extends expr> = e;

type expr1 = `(car '(one two three))`
type pars1 = parse<expr1>;
type test1 = Test<Equal<pars1, `one`>>
