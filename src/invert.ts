type M = Record<PropertyKey, PropertyKey>;

type MKV<T extends M> = {
  [K in keyof T]: { key: K; value: T[K] };
}[keyof T];

export type Invert<T extends M> = {
  [K in MKV<T>["value"]]: Extract<MKV<T>, { value: K }>["key"];
};

type En = {
  hello: string;
};
type EnToDe = {
  hello: "hallo";
  "guten morgen": "guten morning";
  "gute nacht": "good night";
  "guten abend": "good evening";
};

type DeToEn = Invert<EnToDe>;
