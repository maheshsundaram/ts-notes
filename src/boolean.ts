// prettier-ignore
type OR<X, Y> =
  X extends true
    ? true
    : Y extends true
      ? true
      : false;

type OR1 = OR<true, true>;
type OR2 = OR<true, false>;
type OR3 = OR<false, true>;
type OR4 = OR<false, false>;

// prettier-ignore
type AND<X, Y> =
  X extends true
    ? Y extends true
      ? true
      : false
    : false;

type AND1 = AND<true, true>;
type AND2 = AND<true, false>;
type AND3 = AND<false, true>;
type AND4 = AND<false, false>;
