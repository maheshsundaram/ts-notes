import { test, eq } from "./test-utils";

// https://stackoverflow.com/questions/52489261/typescript-can-i-define-an-n-length-tuple-type
// https://stackoverflow.com/questions/55127004/how-to-transform-union-type-to-tuple-type

// prettier-ignore
type tuple<t, n extends number> =
  // n extends n
  // triggers distribution over union
  n extends n ?
    number extends n ? t[] : tuple_of<t, n> :
  never;

// prettier-ignore
type tuple_of<t, n extends number, r extends unknown[] = []> =
  r["length"] extends n ? r : tuple_of<t, n, [t, ...r]>;

type one = [0];
type two = [...one, ...one];
type three = [...one, ...one, ...one];

type tuple_to_number<t extends unknown[]> = t["length"];

/// ---

type numbers = [number, number, number];

type wrap_key<t> = {
  [k in keyof t]: { key: t[k] };
};

type wrapped_numbers1 = wrap_key<numbers>;

type wrapped_numbers2 = {
  [k in keyof numbers]: { key: numbers[k] };
};

type test1 = test<eq<wrapped_numbers1, wrapped_numbers2>>;
// wrapped_numbers1 and wrapped_numbers2 are not equal, though they should be
//
// "The issue here is that we only map to tuple and array types when we
// instantiate a generic homomorphic mapped type for a tuple or array (see
// #26063). We should probably also do it for homomorphic mapped types with a
// keyof T where T is non-generic type."
// https://github.com/microsoft/TypeScript/issues/27995#issuecomment-433056847
//
// https://stackoverflow.com/questions/66429203/why-are-these-two-mapped-tuple-types-not-equal
