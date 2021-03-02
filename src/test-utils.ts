export type eq<a, b> = a extends b ? (b extends a ? true : false) : false;
export type test<value extends true> = value;
export type TestEq<A, B extends A> = A;
