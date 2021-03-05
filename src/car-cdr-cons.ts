// prettier-ignore
export type MaxListLength = 40;

export type IntU = Ints[number];
export type IntsShift = Ints extends [number, ...infer Next] ? Next : never;
export type NextInt<T> = T extends keyof IntsShift ? IntsShift[T] : "NoNextInt";
export type IntMap = {[K in keyof Ints & string as `${K}`]: Ints[K]};
export type StrToInt<T extends keyof IntMap> = IntMap[T];

export type NewList<i = 0, k extends IntU = 0, T = i, results extends unknown[] = []> = {
  results: results;
  continue: NewList<NextInt<i>, k, T extends i ? NextInt<i> : T, [...results, T]>;
}[k extends i ? (i extends k ? "results" : "continue") : "continue"];

type RangeTest = NewList<0, 40>;
type RangeTest2 = NewList<0, 10, number>;

// prettier-ignore
type Slice<List extends UnknownList, A extends number, B extends number> =
  List;


// prettier-ignore
export type OrderedList<T> =
  | NewList<0,0,T>
  | NewList<0,1,T>
  | NewList<0,2,T>
  | NewList<0,3,T>
  | NewList<0,4,T>
  | NewList<0,5,T>
  | NewList<0,6,T>
  | NewList<0,7,T>
  | NewList<0,8,T>
  | NewList<0,9,T>;

// prettier-ignore
type LengthToList<L,T> =
  L extends   0 ? NewList<0,0,T> :
    L extends 1 ? NewList<0,1,T> :
    L extends 2 ? NewList<0,2,T> :
    L extends 3 ? NewList<0,3,T> :
    L extends 4 ? NewList<0,4,T> :
    L extends 5 ? NewList<0,5,T> :
    L extends 6 ? NewList<0,6,T> :
    L extends 7 ? NewList<0,7,T> :
    L extends 8 ? NewList<0,8,T> :
    L extends 9 ? NewList<0,9,T> :
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

export type UnknownList = GenericList<unknown>;
export type StringList = GenericList<string>;
export type UnorderedList = GenericList<number>;

// prettier-ignore
export type Car<List extends UnknownList> =
  List extends [infer Head, ...infer _] ? Head : [];
// prettier-ignore
export type Cdr<List extends UnknownList> =
  List extends [infer Head] ? Head :
  List extends [infer _, ...infer Tail] ? Tail : [];
// prettier-ignore
export type Cons<T extends unknown | UnknownList, List extends UnknownList = []> =
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
// type SortList<
//   Data extends UnorderedList,
//   Results extends LengthToList<Data["length"]> = LengthToList<Data["length"]>
// > = {
//   results: Results;
//   continue: Results extends [] ? SortList<[], Results> : 
// }[Data extends [] ? "results" : "continue"];
// 
// type SortedList = SortList<[2, 1, 3]>;

export type Ints = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256];
