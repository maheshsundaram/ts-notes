class PrivateMango {
  #brand = undefined;
  constructor(public color: string, public size: number) {}
  static isMango(o: Object): o is BrandedMango {
    return #brand in o;
  }
}

class PrivateDurian {
  #brand = undefined;
  constructor(public color: string, public size: number) {}
  static isDurian(o: Object): o is BrandedDurian {
    return #brand in o;
  }
}

const privateMango = new PrivateMango("yellow", 10);
const privateDurian = new PrivateDurian("green", 10);

// @ts-expect-error
let privateFruit: PrivateMango = privateDurian;
// Type 'PrivateDurian' is not assignable to type 'PrivateMango'.
// Property '#brand' in type 'PrivateDurian' refers to a different member that cannot be accessed from within type 'PrivateMango'. (tsserver 2322)

const t1 = privateMango instanceof PrivateMango; // true
console.log(t1);
const t2 = privateMango instanceof PrivateDurian; // false
console.log(t2);

const t3 = PrivateMango.isMango(privateMango); // true
console.log(t3);
const t4 = PrivateMango.isMango(privateDurian); // false
console.log(t4);
