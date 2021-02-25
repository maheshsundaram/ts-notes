// https://github.com/microsoft/TypeScript/issues/42709

// "It’s almost as if TypeScript is forcing a nominal type alias for undefined on
// developers, while most TypeScript typing is structural."

// "Not many developers distinguish the return type of function declarations from
// the return type of function types as two separate type positions, and void is
// (probably?) the only type whose behavior differs based on its usage in these
// two places."

export const __void__ = (() => {})();

// # assignable to void
// ## void
const v1: void = __void__;
// ## undefined
const v2: void = __void__ as undefined;
// ## any
const v3: void = __void__ as any;

// # void is assignable to
// ## void
const t1: void = __void__;
// ## unknown
const t2: unknown = __void__;
// ## any
const t3: any = __void__;
