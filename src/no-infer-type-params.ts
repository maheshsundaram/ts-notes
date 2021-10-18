// https://github.com/Microsoft/TypeScript/issues/14829
export type NoInfer<T> = T & { [K in keyof T]: T[K] };

class Animal {
  move: unknown;
}
class Dog extends Animal {
  woof: unknown;
}

declare function doSomething<T>(value: T, getDefault: () => T): void;

// Wanted an error here - getDefault() ought to return same type as 'value'
doSomething(new Dog(), () => new Animal());

declare function assertEqual<T>(actual: T, expected: T): boolean;

const g = { x: 3, y: 2 };

// fixed: assertEqual(g, { x: 3 }); // Forgot y, wanted error
