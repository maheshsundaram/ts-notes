type list = `(${string})`

type concat<T extends unknown[], D extends string> =
    T extends [] ? '' :
      T extends [string] ? `${T[0]}` :
        T extends [string, ...infer U] ? `${T[0]}${D}${concat<U, D>}` :
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
  split<concat<split<concat<split<l, `)`>, "">, `(`>, "">, " ">;

/// ---

type car<l extends list> = atoms<l>[0];

type cdr<l extends list> = `(${concat<filter<atoms<l>, atoms<l>[0]>, " ">})`

type cons<s extends string, l extends list> = `(${s} ${concat<atoms<l>, " ">})`

/// ---

type t = `(one two three)`

type a = car<t>; // type a = "one"

type b = cdr<t>; // type b = "(two three)"

type c = cdr<b>; // type c = "(three)"

type d = cdr<c> // type f = "()"

type e = cons<cons<a, b>, cons<a,b>>; // type d = "((one two three) one two three)"

type f = car<e> // TODO: type e = "(one two three)"
