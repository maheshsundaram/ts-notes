function f(x: unknown, y: {} | null | undefined) {
  x = y; // always worked
  y = x; // used to error, now works
}
const t: {} = 10;
const x: {} = "10";

type FirstIfString<T> = T extends [infer S extends string, ...unknown[]]
  ? S
  : never;

type LastIfString<T> = T extends [...infer _, infer S extends string]
  ? S
  : never;

function get<T, K extends string & keyof T>(obj: T, key: K) {
  // Now an error.
  console.log(`Grabbing property '${key}'.`);
  return obj[key];
}

const doubles = [Math.PI, Math.E];
const numbersToShow = doubles;
numbersToShow.push((42).toString(2));
// Uncaught TypeError: double.toFixed is not a function
doubles.map((double) => double.toFixed());
