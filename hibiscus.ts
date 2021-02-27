type index = string | number | boolean | bigint;

type concat<T extends unknown[], D extends string> =
    T extends [] ? '' :
      T extends [index] ? `${T[0]}` :
        T extends [index, ...infer U] ? `${T[0]}${D}${concat<U, D>}` :
          string;

type right_paren = `)`;
type left_paren = `(`;
type semicolon = `;`;
type quote = `'`;

type list<str extends string> = concat<[left_paren,str,right_paren], ''>;
type quote_list<str extends string> = concat<[quote,left_paren,str,right_paren], ''>;

type split<S extends string, D extends string> =
  string extends S ? string[] :
    S extends '' ? [] :
      S extends `${infer T}${D}${infer U}` ? [T, ...split<U, D>] :
        [S];

type t<s extends string> = split<s, ' '>;
type c = t<"(one two three)">

type car_of_list = car<"(one two three)">
