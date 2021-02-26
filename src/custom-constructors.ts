class __Constants__ {
  [key: string]: string;
  constructor(values: string[]) {
    values.forEach((key) => {
      this[key] = key;
    });
  }
}

const Constants = __Constants__ as {
  new <T extends readonly string[]>(values: T): { [k in T[number]]: k };
};

const __colors__ = ["BLUE", "GREEN"] as const;

const Colors = new Constants(__colors__);
// const Colors: {
//   BLUE: "BLUE",
//   GREEN: "GREEN",
// }
