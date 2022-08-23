// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

type Fruit<F> = F extends string ? { name: F } : never;

type FruitU = Fruit<'papaya' | 'mango'> | (Fruit<'mango'> & { large: true; taste: 'great' });

const eatFruit = (fruit: FruitU) => {
  if (fruit.name === 'mango' && 'large' in fruit) {
    // fruit.taste: "great"
  }
  if (fruit.name === 'mango' && fruit.large) {
    // Property 'large' does not exist on type '{ name: "mango"; }'.
  }
};
