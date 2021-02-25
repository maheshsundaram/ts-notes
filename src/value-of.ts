const fruits = {
  mango: "orange",
  durian: "yellow",
  noni: "green",
} as const;

type color = typeof fruits[keyof typeof fruits];
// type color = "orange" | "yellow" | "green"

type ValueOf<T> = T[keyof T];

type color2 = ValueOf<typeof fruits>;
// type color2 = "orange" | "yellow" | "green"
