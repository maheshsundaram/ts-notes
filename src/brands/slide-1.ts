type Mango = {
  color: string;
  size: number;
};

type Durian = {
  color: string;
  size: number;
};

const mango: Mango = {
  color: "yellow",
  size: 10,
};

const durian: Durian = {
  color: "green",
  size: 10,
};

let fruit: Mango = durian; // Works, structural typing
