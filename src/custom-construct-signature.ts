class __Constants__ {
  [key: string]: string;
  constructor(values: string[]) {
    values.forEach((key) => {
      this[key] = key;
    });
  }
}

// https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures
// https://www.typescriptlang.org/docs/handbook/2/classes.html#class-expressions

// Using a class expression, cast __Constants__ with a custon construct signature
const Constants = __Constants__ as {
  new <T extends readonly string[]>(values: T): { [k in T[number]]: k };
};

const __colors__ = ["BLUE", "GREEN"] as const;

// Using the custom constuct signature, Colors1 has typed properties and values.
const Colors1 = new Constants(__colors__);
// Colors is of type {
//   BLUE: "BLUE",
//   GREEN: "GREEN",
// }

// Using the default class, Colors2 remains dynamic
const Colors2 = new __Constants__(["BLUE","GREEN"]);
// Colors2 is of type { [key: string]: string }
