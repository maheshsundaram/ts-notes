import { eq, test, TestEq } from "./test-utils";
import { parse } from "./white-hibiscus";

// empty list
type test1 = TestEq<"()", parse<"()">>;

// atom
type test2 = TestEq<"'atom", parse<"'atom">>;

// quoted empty list
type test3 = TestEq<"'()", parse<"'()">>;

// quoted list
type test4 = TestEq<"'(one two three)", parse<"'(one two three)">>;

// car
type test5 = TestEq<"(car)", parse<"(car)">>;

// bare cdr
type test6 = TestEq<"(cdr)", parse<"(cdr)">>;

// bare cons
type test7 = TestEq<"(cons)", parse<"(cons)">>;

// car of an empty quoted list
type test8 = TestEq<"'()", parse<"(car '())">>;

// cdr of an empty quoted list
type test9 = TestEq<"'()", parse<"(cdr '())">>;

// car of a single item quoted list
type test10 = TestEq<"one", parse<"(car '(one))">>;

// cdr of a single item quoted list
type test11 = TestEq<"one", parse<"(cdr '(one))">>;
