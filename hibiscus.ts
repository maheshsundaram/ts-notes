type concat<T extends unknown[], D extends string> =
    T extends [] ? '' :
      T extends [string] ? `${T[0]}` :
        T extends [string, ...infer U] ? `${T[0]}${D}${concat<U, D>}` :
          string;

type left_paren = `(`;
type right_paren = `)`;
type list = concat<[left_paren,string,right_paren], ''>;

type quote = `'`;
type quote_list = concat<[quote,left_paren,string,right_paren], ''>;

type split<S extends string, D extends string> =
  string extends S ? string[] :
    S extends '' ? [] :
      S extends `${infer T}${D}${infer U}` ? [T, ...split<U, D>] :
        [S];

type split_left_paren<s extends string> = split<s, left_paren>;
type split_right_paren<s extends string> = split<s, right_paren>;

type atoms<l extends list> =
  split<concat<split_left_paren<concat<split_right_paren<l>, "">>, "">, " ">;

type filter<items extends unknown[], value extends string> =
  items extends []
    ? []
    : items extends [infer head, ...infer tail]
      ? head extends value
        ? filter<tail, value>
        : [head, ...filter<tail, value>]
      : items; 

/// ---

type car<l extends list> = atoms<l>[0];

type cdr<l extends list> = `(${concat<filter<atoms<l>, atoms<l>[0]>, " ">})`

type cons<s extends string, l extends list> = `(${s} ${concat<atoms<l>, " ">})`

/// ---

type t = `(one two three)`

type a = car<t>; // type a = "one"

type b = cdr<t>; // type b = "(two three)"

type c = cdr<b>; // type c = "(three)"

type d = cons<a, b> // type d = "(one two three)"
