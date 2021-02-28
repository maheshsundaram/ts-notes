export type Equal<a, b> = a extends b ? (b extends a ? true : false) : false;
export type Test<value extends true> = value;
