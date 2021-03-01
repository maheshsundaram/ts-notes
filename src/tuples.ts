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
