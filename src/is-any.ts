export type IsAny<T> = 0 extends 1 & T ? true : false;
export type IsAny2<T> = 1 & T extends 0 ? true : false;
export type Any1 = IsAny<any>;
export type Any2 = IsAny2<any>;
