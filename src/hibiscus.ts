type list = `(${string})`

type join<T extends unknown[], D extends string> =
    T extends [] ? '' :
      T extends [string] ? `${T[0]}` :
        T extends [string, ...infer U] ? `${T[0]}${D}${join<U, D>}` :
          string;

type split<S extends string, D extends string> =
  string extends S ? string[] :
    S extends '' ? [] :
      S extends `${infer T}${D}${infer U}` ? [T, ...split<U, D>] :
        [S];

type filter<items extends unknown[], value> =
  items extends []
    ? []
    : items extends [infer head, ...infer tail]
      ? head extends value
        ? filter<tail, value>
        : [head, ...filter<tail, value>]
      : items; 

type atoms<l extends list> =
  split<join<split<join<split<l, `)`>, "">, `(`>, "">, " ">;

/// ---

type car<l extends list> = atoms<l>[0];

type cdr<l extends list> = `(${join<filter<atoms<l>, atoms<l>[0]>, " ">})`

type _car<list extends unknown[]> =
  list extends []
    ? []
    : list extends [infer head, ...infer _tail]
      ? head extends unknown[]
        ? head
        : head extends unknown
          ? head
          : never
        : never;

type _cdr<list extends unknown[]> =
  list extends []
    ? []
    : list extends [infer _head, ...infer tail]
      ? tail
      : _car<list>;

type _cons<item, list extends unknown[]> =
  list extends []
    ? [item]
    : [item, ...list];

type y = _cons<_cons<"blue",["green","red"]>, ["one","two","three"]>;
type y2 = _car<y>;
type y3 = _car<["one","two"]>;

type cons<s extends string, l extends list> = `(${join<[s, ...atoms<l>], " ">})`

/// ---

type t = `(one two three)`

type a = car<t>; // type a = "one"

type b = cdr<t>; // type b = "(two three)"
type b_ = _cdr<["one","two","three"]>; // type b = "(two three)"

type c = cdr<b>; // type c = "(three)"

type d = cdr<c>; // type f = "()"

type x = cons<a, d>; // TODO: type x = "(one)"

type e = cons<cons<a, b>, cons<a,b>>; // type d = "((one two three) one two three)"

type f = car<e> // TODO: type e = "(one two three)"
