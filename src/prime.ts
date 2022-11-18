import type { TestEq } from "./test-utils";

// prettier-ignore
type IsPrime<N extends number, T extends unknown[] = [], D extends unknown[] = T> =
  N extends T["length"]
    ? T["length"] extends (1 | 2 | 3 | 5)
      ? true
      : D["length"] extends (1 | 2 | 3 | 4 | 5 | 6)
        ? D["length"] extends (1 | 5)
          ? true
          : false
        : D extends [number, number, number, number, number, number, ...infer Rest]
          ? IsPrime<N, T, Rest>
          : false
      : IsPrime<N, [...T, 1]>;

type Test1 = TestEq<IsPrime<1>, true>;
type Test2 = TestEq<IsPrime<2>, true>;
type Test3 = TestEq<IsPrime<3>, true>;
type Test4 = TestEq<IsPrime<4>, false>;
type Test5 = TestEq<IsPrime<5>, true>;
type Test6 = TestEq<IsPrime<6>, false>;
type Test7 = TestEq<IsPrime<7>, true>;
type Test8 = TestEq<IsPrime<8>, false>;
type Test9 = TestEq<IsPrime<9>, false>;
type Test10 = TestEq<IsPrime<10>, false>;
type Test11 = TestEq<IsPrime<11>, true>;
type Test12 = TestEq<IsPrime<12>, false>;
type Test13 = TestEq<IsPrime<13>, true>;
type Test14 = TestEq<IsPrime<14>, false>;
type Test15 = TestEq<IsPrime<15>, false>;
type Test16 = TestEq<IsPrime<16>, false>;
type Test17 = TestEq<IsPrime<17>, true>;
type Test18 = TestEq<IsPrime<18>, false>;
type Test19 = TestEq<IsPrime<19>, true>;
type Test20 = TestEq<IsPrime<20>, false>;
type Test21 = TestEq<IsPrime<21>, false>;
type Test22 = TestEq<IsPrime<22>, false>;
type Test23 = TestEq<IsPrime<23>, true>;
type Test24 = TestEq<IsPrime<24>, false>;
type Test25 = TestEq<IsPrime<25>, true>;
type Test26 = TestEq<IsPrime<26>, false>;
type Test27 = TestEq<IsPrime<27>, false>;
type Test28 = TestEq<IsPrime<28>, false>;
type Test29 = TestEq<IsPrime<29>, true>;
type Test30 = TestEq<IsPrime<30>, false>;
type Test31 = TestEq<IsPrime<31>, true>;
type Test32 = TestEq<IsPrime<32>, false>;
type Test33 = TestEq<IsPrime<33>, false>;
type Test34 = TestEq<IsPrime<34>, false>;
type Test35 = TestEq<IsPrime<35>, true>;
type Test36 = TestEq<IsPrime<36>, false>;
type Test37 = TestEq<IsPrime<37>, true>;
type Test38 = TestEq<IsPrime<38>, false>;
type Test39 = TestEq<IsPrime<39>, false>;
type Test40 = TestEq<IsPrime<40>, false>;
type Test41 = TestEq<IsPrime<41>, true>;
type Test42 = TestEq<IsPrime<42>, false>;
type Test43 = TestEq<IsPrime<43>, true>;
type Test44 = TestEq<IsPrime<44>, false>;
type Test45 = TestEq<IsPrime<45>, false>;
type Test46 = TestEq<IsPrime<46>, false>;
type Test47 = TestEq<IsPrime<47>, true>;
type Test48 = TestEq<IsPrime<48>, false>;
type Test49 = TestEq<IsPrime<49>, true>;
type Test50 = TestEq<IsPrime<50>, false>;
type Test51 = TestEq<IsPrime<51>, false>;
type Test52 = TestEq<IsPrime<52>, false>;
type Test53 = TestEq<IsPrime<53>, true>;
type Test54 = TestEq<IsPrime<54>, false>;
type Test55 = TestEq<IsPrime<55>, true>;
type Test56 = TestEq<IsPrime<56>, false>;
type Test57 = TestEq<IsPrime<57>, false>;
type Test58 = TestEq<IsPrime<58>, false>;
type Test59 = TestEq<IsPrime<59>, true>;
type Test60 = TestEq<IsPrime<60>, false>;
type Test61 = TestEq<IsPrime<61>, true>;
type Test62 = TestEq<IsPrime<62>, false>;
type Test63 = TestEq<IsPrime<63>, false>;
type Test64 = TestEq<IsPrime<64>, false>;
type Test65 = TestEq<IsPrime<65>, true>;
type Test66 = TestEq<IsPrime<66>, false>;
type Test67 = TestEq<IsPrime<67>, true>;
type Test68 = TestEq<IsPrime<68>, false>;
type Test69 = TestEq<IsPrime<69>, false>;
type Test70 = TestEq<IsPrime<70>, false>;
type Test71 = TestEq<IsPrime<71>, true>;
type Test72 = TestEq<IsPrime<72>, false>;
type Test73 = TestEq<IsPrime<73>, true>;
type Test74 = TestEq<IsPrime<74>, false>;
type Test75 = TestEq<IsPrime<75>, false>;
type Test76 = TestEq<IsPrime<76>, false>;
type Test77 = TestEq<IsPrime<77>, true>;
type Test78 = TestEq<IsPrime<78>, false>;
type Test79 = TestEq<IsPrime<79>, true>;
type Test80 = TestEq<IsPrime<80>, false>;
type Test81 = TestEq<IsPrime<81>, false>;
type Test82 = TestEq<IsPrime<82>, false>;
type Test83 = TestEq<IsPrime<83>, true>;
type Test84 = TestEq<IsPrime<84>, false>;
type Test85 = TestEq<IsPrime<85>, true>;
type Test86 = TestEq<IsPrime<86>, false>;
type Test87 = TestEq<IsPrime<87>, false>;
type Test88 = TestEq<IsPrime<88>, false>;
type Test89 = TestEq<IsPrime<89>, true>;
type Test90 = TestEq<IsPrime<90>, false>;
type Test91 = TestEq<IsPrime<91>, true>;
type Test92 = TestEq<IsPrime<92>, false>;
type Test93 = TestEq<IsPrime<93>, false>;
type Test94 = TestEq<IsPrime<94>, false>;
type Test95 = TestEq<IsPrime<95>, true>;
type Test96 = TestEq<IsPrime<96>, false>;
type Test97 = TestEq<IsPrime<97>, true>;
type Test98 = TestEq<IsPrime<98>, false>;
type Test99 = TestEq<IsPrime<99>, false>;
type Test100 = TestEq<IsPrime<100>, false>;
