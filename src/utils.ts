export type join<T extends unknown[], D extends string> =
  T extends [] ? '' :
    T extends [string] ? `${T[0]}` :
      T extends [string, ...infer U] ? `${T[0]}${D}${join<U, D>}` :
        string;

export type split<S extends string, D extends string> =
  string extends S ? string[] :
    S extends '' ? [] :
      S extends `${infer T}${D}${infer U}` ? [T, ...split<U, D>] :
        [S];

export type filter<items extends unknown[], value> =
  items extends []
    ? []
    : items extends [infer head, ...infer tail]
      ? head extends value
        ? filter<tail, value>
        : [head, ...filter<tail, value>]
      : items; 

