// prettier-ignore
type NextInt<I> =
  I extends 0 ? 1 :
    I extends 1 ? 2 :
    I extends 2 ? 3 :
    I extends 3 ? 4 :
    I extends 4 ? 5 :
    I extends 5 ? 6 :
    I extends 6 ? 7 :
    I extends 7 ? 8 :
    I extends 8 ? 9 :
    I extends 9 ? 10 :
  "NoNextInt";

// prettier-ignore
export type Ints =
  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type RangeIndex<i = 0, k extends Ints = 0, results extends unknown[] = []> = {
  results: results;
  continue: RangeIndex<NextInt<i>, k, [...results, i]>;
}[k extends i ? (i extends k ? "results" : "continue") : "continue"];

type RangeTest = RangeIndex<0, 10>;

// prettier-ignore
type OrderedList =
  | RangeIndex<0,0>
  | RangeIndex<0,1>
  | RangeIndex<0,2>
  | RangeIndex<0,3>
  | RangeIndex<0,4>
  | RangeIndex<0,5>
  | RangeIndex<0,6>
  | RangeIndex<0,7>
  | RangeIndex<0,8>
  | RangeIndex<0,9>;

// prettier-ignore
type LengthToList<L> =
  L extends   0 ? RangeIndex<0,0> :
    L extends 1 ? RangeIndex<0,1> :
    L extends 2 ? RangeIndex<0,2> :
    L extends 3 ? RangeIndex<0,3> :
    L extends 4 ? RangeIndex<0,4> :
    L extends 5 ? RangeIndex<0,5> :
    L extends 6 ? RangeIndex<0,6> :
    L extends 7 ? RangeIndex<0,7> :
    L extends 8 ? RangeIndex<0,8> :
    L extends 9 ? RangeIndex<0,9> :
  "NoNextLength";

// prettier-ignore
type GenericList<T> =
  | []
  | [T]
  | [T,T]
  | [T,T,T]
  | [T,T,T,T]
  | [T,T,T,T,T]
  | [T,T,T,T,T,T]
  | [T,T,T,T,T,T,T]
  | [T,T,T,T,T,T,T,T]
  | [T,T,T,T,T,T,T,T,T]
  | [T,T,T,T,T,T,T,T,T,T];

type UnknownList = GenericList<unknown>;
type StringList = GenericList<string>;
type UnorderedList = GenericList<number>;

// prettier-ignore
type Car<List extends UnknownList> =
  List extends [infer Head, ...infer _] ? Head : [];
// prettier-ignore
type Cdr<List extends UnknownList> =
  List extends [infer Head] ? Head :
  List extends [infer _, ...infer Tail] ? Tail : [];
// prettier-ignore
type Cons<T extends unknown | UnknownList, List extends UnknownList = []> =
  [T, ...List]

type ABC = ["a", "b", "c"];

type A = Car<ABC>;
type BC = Cdr<ABC>;
type _ABC_ = Cons<Car<ABC>, Cdr<ABC>>;

type Filter<items extends unknown[], value> =
  items extends []
    ? []
    : items extends [infer head, ...infer tail]
      ? head extends value
        ? Filter<tail, value>
        : [head, ...Filter<tail, value>]
      : items; 

// prettier-ignore
type SortList<
  Data extends UnorderedList,
  Results extends LengthToList<Data["length"]> = LengthToList<Data["length"]>
> = {
  results: Results;
  continue: Results extends [] ? SortList<[], Results> : 
}[Data extends [] ? "results" : "continue"];

type SortedList = SortList<[2, 1, 3]>;
