// a class implementing an interface is a contract on what an instance of the
// class has. Since an instance of a class won't contain a construct signature,
// it cannot satisfy the interface.

// https://stackoverflow.com/a/13408029/15287885

interface Y extends String {}

class Y {
  constructor(s: string) {
    return s;
  }
}

const y1: Y = "hello";
const y2 = new Y("world");
