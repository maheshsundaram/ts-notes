// prettier-ignore
export type MaxListLength = 40;

// prettier-ignore
export type Ints = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,/*41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256*/];

export type Expect<A, _ extends A> = A;

export type IntU = Ints[number];
export type IntsShift = Ints extends [number, ...infer Next] ? Next : never;
export type NextInt<T> = T extends keyof IntsShift ? IntsShift[T] : "NoNextInt";
export type IntMap = {[K in keyof Ints & string as `${K}`]: Ints[K]};
export type StrToInt<T extends keyof IntMap> = IntMap[T];

export type MakeList<k extends IntU = 0, i = 0, T = i, list extends unknown[] = []> = {
  list: list;
  next: MakeList<k, NextInt<i>, T extends i ? NextInt<i> : T, [...list, T]>;
}[k extends i ? (i extends k ? "list" : "next") : "next"];

export type OrderedListMap = {
  [K in IntU]: MakeList<K>
}

export type OrderedListU = OrderedListMap[keyof OrderedListMap];

export type MakeGenericList<T> = {
  [K in IntU]: MakeList<K,0,T>
}

export type UnknownListMap = MakeGenericList<unknown>;
export type StringListMap = MakeGenericList<string>;
export type UnorderedListMap = MakeGenericList<number>;

export type UnknownListU = UnknownListMap[keyof UnknownListMap]
export type StringListU = StringListMap[keyof StringListMap]
export type UnorderedListU = UnorderedListMap[keyof UnorderedListMap]

// prettier-ignore
export type Car<List extends UnknownListU> =
  List extends [infer Head, ...infer _] ? Head : [];

type One = Car<["one","two"]>;
type Test8 = Expect<"one", One>;

// prettier-ignore
export type Cdr<List extends UnknownListU> =
  List extends [infer Head] ? Head :
  List extends [infer _, ...infer Tail] ? Tail : [];

type Two = Cdr<["one","two"]>;
type Test7 = Expect<["two"], Two>;

// prettier-ignore
export type Cons<
  T extends unknown | UnknownListU,
  List extends UnknownListU = []
> =
  [T, ...List];

type OneTwoThree = Cons<One, ["two", "three"]>;
type Test9 = Expect<["one","two","three"], OneTwoThree>;

type Filter<Items extends unknown[], Value> =
  Items extends []
    ? []
    : Items extends [infer Head, ...infer Tail]
      ? Head extends Value
        ? Filter<Tail, Value>
        : [Head, ...Filter<Tail, Value>]
      : Items; 

type OneThree = Filter<OneTwoThree, "two">;
type Test10 = Expect<["one", "three"], OneThree>;

// prettier-ignore
export type Find<Items extends UnorderedListU, Value> =
  Items extends [infer Head, ...infer Tail]
    ? Head extends Value
      ? Value
      : Tail extends UnorderedListU ? Find<Tail, Value> : "__never__"
    : [];

type Find1 = Find<[3,1,2], 1>;
type Test3 = Expect<1, Find1>;

export type FindWithIndex<Items extends UnorderedListU, Value, index = 0> =
  Items extends [infer Head, ...infer Tail]
    ? Head extends Value
      ? { Index: index, Value: Value }
      : Tail extends UnorderedListU
        ? FindWithIndex<Tail, Value, NextInt<index>>
        : "__never__"
    : [];

type Find2 = FindWithIndex<[3,1,2], 1>;
type Test4 = Expect<{ Index: 1; Value: 1 }, Find2>;

type Array1 = [3,0,2,1,2,1,2];
type Find3 = FindWithIndex<Array1, 1>;
type Test5 = Expect<{ Index:3; Value: 1 }, Find3>;

type Value1 = Array1[Find3["Index"]];
type Test6 = Expect<1, Value1>;

[].join()

export type Join<List extends unknown[], Seperator extends string> =
  List extends [] ? '' :
    List extends [string] ? `${List[0]}` :
      List extends [string, ...infer U] ? `${List[0]}${Seperator}${Join<U, Seperator>}` :
        string;

type Join1 = Join<["one", "two", "three"], " ">;
type Test11 = Expect<"one two three", Join1>;

export type Split<Str extends string, Seperator extends string> =
  string extends Str
    ? string[]
    : Str extends ''
    ? []
    : Str extends `${infer Head}${Seperator}${infer Tail}`
    ? [Head, ...Split<Tail, Seperator>]
    : [Str];

type Split1 = Split<"one two three", " ">;
type Test12 = Expect<["one", "two", "three"], Split1>;