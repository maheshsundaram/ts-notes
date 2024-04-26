type Brand<T, Brand extends string> = T & {
  readonly [B in Brand as `__${B}_brand`]: never;
};

type BrandedMango = Brand<Mango, "Mango">;

type BrandedDurian = Brand<Durian, "Durian">;

const newMango = (m: Mango): BrandedMango => m as BrandedMango;
const newDurian = (d: Durian): BrandedDurian => d as BrandedDurian;

const brandedMango = newMango(mango);
const brandedDurian = newDurian(durian);

// @ts-expect-error
let brandedFruit: BrandedMango = brandedDurian;
// Type 'BrandedDurian' is not assignable to type 'BrandedMango'.
// Property '__Mango_brand' is missing in type 'BrandedDurian' but required in type '{ readonly __Mango_brand: never; }'. (tsserver 2322)
