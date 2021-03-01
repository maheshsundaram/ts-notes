type t = "one" | "two" | "three";

type k = {
  [u in t]: u;
};
