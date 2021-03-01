// the input and output of a conditional type are types
// they're (pure) functions
//
// ...infer creates a type variable...
//
// ...string extends T...
//
// conditional types distribute over unions, not intersections
// distributing over intersections is not (yet) possible

/// ---

// recursive conditional types
// https://github.com/microsoft/TypeScript/pull/40002
// https://github.com/microsoft/TypeScript/issues/26223#issuecomment-513187373
type R<T> = { left: "one"; right: "two" }[T extends number ? "left" : "right"];
type one = R<number>;
type two = R<string>;
