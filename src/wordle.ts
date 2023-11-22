// https://www.typescriptlang.org/play#code/PTAEHUHsCcBMBsCmoCWA7UAXAFsgKgJ4AOiAygMbQpGZbHIDOBDmiAtgDSgCuD6A5gCgQocpDSwUmFOICG8OiQahZErOyLxZrUCypp+oeFMTR5DAHSDBmeqADi3RAwYAGUAF4IMBIgA8AEQBAHzCYKAAegD81rYkDk4uAEye3nBIgSFhoJExNnaOzgwAzKlQ6f5BoSK5sQWJDAAsZT4ZVdm1+fGFLgCsLRWZ1eHR1iJ4uCpoaJCY2oiwopCwyABGiPCQAO6gWyjwCqwHoASQ3FiTqgxbplyyyjfH99mIAB6asuig2NuotCjKNiyFZcWDiADktAYlEgx24aCQLhOZ3B0GQAHkANK7KTYC7IK43aCgdYCXRESD7BZWay0ul0kTgRDg47rUBoRALMmYSDk4y0HDIfgNVBoHmgIFoAhGRCYVjQBgcbI3FkKXjIHAA0D8RAcqjkPlSUAAM3h5Gk4lAAEkTWc1F8WLJyABrSAAN1Mxs2WzGYCttC2MGdylW0rR5G4CpQHvg0rBZIYkDYsuwZOMzuQAG1HdBMFwLAW0SwALqpPQCCwMTRSAAUQQAlMrU+Q8V8zsTyPdkHtjphIxgAgBBABCAGEAqLxZmhwEuAFh7PQAFx8W6vFSNXMH5SKA3qwJMpywYuAARXevfewQ+YfT8YKeQQ5HJHwx73VX0A7qK6G8CTOlgAuR8nx3N8D1AcFwVAb9-1AICn0-c9L2UAADAASABvdBjVMUA8AAX0wk9CKwtAcOJABVfCUOg0BMzwfMCw3fk-Ao09gkAujSGLABuWkRAAKV4WhZFAIg0TlaVwVNNBzRkNAoONGBDTlMk9hwdleVkaB+AYLpkAAGVleUGD8ewkPfa9b3vLxP03My5yybIAFk40QN1QAAKxQXSgLiQzUiMuVTFMocxxPABRLIalGbIAE0zlEVRdE5b5flDHg+AMOi0G4Nh1mgUtLWS7SzGlSBjR-W89JEI1OwwNkxDQD1cwWSctJ4NB5O+UxEAsPDJhQFZRK1HBtGyPAd2dGYtmUOqzngRY2VUcrKsFMTIBcFBViQUA3XkRJRXxFRoDK-TQAABU2vgdsQIKTMCzNcvy0xVxqToJtTOblHWtF5F2IMuCkcEfsDdRoDQbSUGcfqAAlepB46BJ3Fq+HEIDgAAKkxwQZLky1hSKe7TBrewAKqgQuEHNAGHJl8gdgV5yeegr608e9gJyexMyG15Sw8AXQGphgecZ0tvwCOLECICdyc5p9hcrTc6wCesLHQch4G4FYGFJ0W+bZiXnNkAh1llpcADlIBIAJH0x4A12QHoGGJ6AzIs8D6aFmmPY-L3ed95QWdMGzQHl13TPsYJ9dLMCPwjvxhej3nxdAKWiDgsOEOzhOo5jwPQATpOnrygrU+cxBVkzq2iF9AbkHVaAAFpjSdbk7BuTKCVWd0NVwDAtVE1g2A+HQX12Zs8WyTzhK7n7sG0RQCX4T4af+CQ3lAdxxUac7yl8C7I38cy46sgRQ-l9CMOd12HO965bi34ISJv4zTDv4WiS4ABGZ-MNf4Kbt7BUxpl-UASQ-7XwaLfYB98wHFEgQA+UH9QGP0aM-FC-FsYDVGnYdA+4LSQwONKVMOtjorDmPsZQFUJ7aERgvIgJAurZXFLIN0lJFhIFkM6bklxUHEntnvVox8C4vgvghK+4BUysCrE6UwJF95IEPmiMyGDHZ4SoGwPweBQ54ALlfCcAQSLYVwlRGi348CaNYvecmejT6gCviYyiJFDHUVopYlAWiKI2LwnxT6WoZJSlALAVQ5BkCjV5LqBgR8LiL3WoSUw2QwTOE0rQd8PAM5fHidwHkTcxAjyQDodYnZ1R-GyIPCm2UsmTGNFSfq-pRB-RkSodQBT5hGBMGYeATYUAtlQMoRATo8SFPlF5SkHJYBWH8nA3CXgDHgCMZhGcLi8CLIwgEKKLiABKRjMHZAAGLKTOJgIgOTzrp1SAEQAvBuAEv9220ya6XKuYAJl37l2ArlXLw1zAAX+28+IUiTCyLCcSWyE5s7gohZCqF0KYWwrhfChFiKkXIpRaitF6KMWYqxdinFuK8X4oJYSolxKSWkrJeSillKqXUppbSul9KGWMqZcyllrK2Xso5Zyrl3KeW8r5fygVgqhXCpFaKsV4qJWSqldKklts67O3UCwMk3l+B+QKN-VISD34zjnIORcrhhhPlitM+wKQvBardjqpcC4uAGo6J0E1pRzXQLfpavVc5hzuqfva0YQA
//
// Wordle in the TypeScript type system, using
// conditional types and template string literals.

type Guess0 = Wordle<"">;
//  ^?

type Guess2 = Wordle<"">;
//  ^?

type Guess3 = Wordle<"">;
//  ^?

type Guess4 = Wordle<"">;
//  ^?

type Guess5 = Wordle<"">;
//  ^?

// The annotated code below will tell you the answer, as well as
// explain how it is made, don't scroll unless you're OK with the answer being spoiled.

// We'll be needing to split the guess into many letters,
// we'll use this generic split function I found in stackoverflow

// It works by recursively doing something like [start, ...rest] = string.split("")
// which in our case will turn "ABC" into ["A", "B", "C"]

type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];

// Just a pretty 'function' for splitting with no args
type Letters<G extends string> = Split<G, "">;

// My dev jigs:
type L = Letters<"ABCDE">;
//  ^?

// You can see how by using [number] on an array of strings
// it can be converted into a union here. The idea is that
// TS knows it could be any of the possible values in the array
type PossibleLetters = L[number];
//   ^?

// This is the real work, it's two ternaries. Here's the JS version:
/**
function guessLetter(G: string, Ans: string, idx: number) => 
    G[idx] === Ans[idx] ? "Yep" : 
      Ans.split("").includes(G[idx]) ? "Maybe" : "Nope"
 */

type GuessLetter<
  G extends string,
  Ans extends string,
  idx extends number
> = Letters<G>[idx] extends Letters<Ans>[idx]
  ? Yep
  : Letters<G>[idx] extends Letters<Ans>[number]
  ? Meb
  : Nop;

// The user-facing type we use above then is a template string which
// just uses that type against index 0 to 4
type WordlePure<G extends string> = `${GuessLetter<G, Answer, 0>}${GuessLetter<
  G,
  Answer,
  1
>}${GuessLetter<G, Answer, 2>}${GuessLetter<G, Answer, 3>}${GuessLetter<
  G,
  Answer,
  4
>}`;

/** This type intentionally hides the details of what's happening to avoid leaking the answer */
type Wordle<G extends string> = `${Whitespacer}${WordlePure<G>}`;

type Trim<T> = T extends `${" "}${infer U}`
  ? Trim<U>
  : T extends `${infer U}${" "}`
  ? Trim<U>
  : T;

// This funny dance is to ensure that the answer
// does not end up in the auto-complete because it
// is a string in the file. It creates a template literal
// which is each letter joined.
type Answer = `${"W"}${"A"}${"T"}${"E"}${"R"}`;

// For output
type Yep = "🟩";
type Nop = "🔲";
type Meb = "🟨";
type Whitespacer =
  "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ";

// Guess testing jig:
type G1 = GuessLetter<"A", "A", 0>;
//   ^?

type G2 = GuessLetter<"A", "B", 0>;
//   ^?

type G3 = GuessLetter<"A", "BA", 0>;
//   ^?
