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

interface K {
  new (): string;
}
// a class implementing an interface is a contract on what an instance of the
// class has. Since an instance of a class won't contain a construct signature,
// it cannot satisfy the interface.
// https://stackoverflow.com/a/13408029/15287885
class Y {
  constructor() {
    return "hey";
  }
}
