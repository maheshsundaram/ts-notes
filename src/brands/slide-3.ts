class StructuralMango {
  constructor(public color: string, public size: number) {}
}

class StructuralDurian {
  constructor(public color: string, public size: number) {}
}

const structuralMango = new StructuralMango("yellow", 10);
const structuralDurian = new StructuralDurian("green", 10);

let structuralFruit: StructuralMango = structuralDurian;
