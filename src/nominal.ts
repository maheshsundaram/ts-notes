// WIP

type Tagged<N, T extends string> = N & `${T}`

// const uuidTag = Symbol("UUID");
type UUID = Tagged<string, "uuid">;

const printUUID = (u: UUID) => {
  console.log(u);
};

const makeUUID = (_s?: string) => {
  return {
    value: Math.random().toString(), // TODO
    __tag__: uuidTag,
  };
};

const id = makeUUID();
// const id: {
//   value: string;
//   __tag__: symbol;
// }
