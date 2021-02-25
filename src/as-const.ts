const v1 = ["one", "two", "three"];
// const v1: string[]

const v2 = ["one", "two", "three"] as const;
// const v2: readonly ["one", "two", "three"]

v2.push("four");
// [E] Property 'push' does not exist on type 'readonly ["one", "two", "three"]'.

type CountArray = typeof v2;
// type CountArray = readonly ["one", "two", "three"]

const v3: CountArray = ["one", "two", "three"];

type CountUnion = CountArray[number];
// type CountUnion = "one" | "two" | "three"

const v5 = {
  ONE: "eins",
  TWO: "zwei",
  THREE: "drei",
};
// const v5: {
//   ONE: string;
//   TWO: string;
//   THREE: string;
// }

const v6 = {
  ONE: "eins",
  TWO: "zwei",
  THREE: "drei",
} as const;
// const v6: {
//   readonly ONE: "eins";
//   readonly TWO: "zwei";
//   readonly THREE: "drei";
// }

type Count = typeof v6[keyof typeof v6];
// type Count = "eins" | "zwei" | "drei"

const acceptOnlyCount = (c: Count) => c;

acceptOnlyCount(v5.THREE);
// v5.THREE: string
// [E] Argument of type 'string' is not assignable to parameter of type 'Count'.

acceptOnlyCount(v6.THREE);
// v6.THREE: "drei"
