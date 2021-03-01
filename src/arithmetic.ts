// prettier-ignore
type number_to_tuple<n extends number, tuple extends unknown[] = []> =
  tuple["length"] extends n
    ? tuple
    : number_to_tuple<n, [0, ...tuple]>;

// prettier-ignore
type add<x extends number, y extends number> =
  [...number_to_tuple<x>, ...number_to_tuple<y>]["length"];

type n1 = add<43, 43>;

// 43 is the (current) upperbound, otherwise ts complains that
// "Type instantiation is excessively deep and possibly infinite."
