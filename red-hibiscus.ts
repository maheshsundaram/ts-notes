export type car<list extends unknown[]> = list extends []
  ? []
  : list extends [infer head, ...infer _tail]
  ? head extends unknown[]
    ? head
    : head extends unknown
    ? head
    : never
  : never;

export type cdr<list extends unknown[]> = list extends []
  ? []
  : list extends [infer _head, ...infer tail]
  ? tail
  : car<list>;

export type cons<item, list extends unknown[] = []> = list extends []
  ? [item]
  : [item, ...list];

type t1 = cons<cons<"blue", ["green", "red"]>, ["one", "two", "three"]>;
// type t1 = [["blue", "green", "red"], "one", "two", "three"]

type t2 = car<t1>;
// type t2 = ["blue", "green", "red"]

type t3 = car<cdr<t1>>;
// type t3 = "one"

type t4 = cons<car<cdr<t1>>, cons<car<cdr<cdr<t1>>>>>;
// type t4 = ["one", "two"]

type t5 = car<[]>;
// type t5 = []

type t6 = cdr<[]>;
// type t6 = []
