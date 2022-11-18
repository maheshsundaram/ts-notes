import { TestEq } from "./test-utils";

// prettier-ignore
export type Car<List extends unknown[]> =
  List extends [infer Head, ...unknown[]]
    ? Head
    : List;

// prettier-ignore
export type Cdr<List extends unknown[]> =
  List extends [unknown, ...infer Tail]
    ? Tail
    : List;

// prettier-ignore
export type Cons<Item, List extends unknown[] = []> = [Item, ...List];

type Test1 = TestEq<Car<["a", "b", "c"]>, "a">;
type Test2 = TestEq<Cdr<["a", "b", "c"]>, ["b", "c"]>;
type Test3 = TestEq<Cons<"a", ["b", "c"]>, ["a", "b", "c"]>;
