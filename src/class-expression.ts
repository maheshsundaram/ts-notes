class __Constant__ {
  [key: string]: string;
  constructor(values: string[]) {
    values.forEach((key) => {
      this[key] = key;
    });
  }
}

const Constant = (__Constant__ as unknown) as {
  new <T extends readonly string[]>(values: T): { [k in T[number]]: k };
};
