import { Equal, Test } from "./test-utils";
import { car, cdr, cons } from "./red-hibiscus";

type blue = "blue";
type green = "green";
type red = "red";

type one = "one";
type two = "two";
type three = "three";

type colors = [blue, green, red];
type numbers = [one, two, three];

type expr1 = car<colors>;
type test1 = Test<Equal<expr1, blue>>;

type expr2 = cons<blue, [green, red]>;
type test2 = Test<Equal<expr2, [blue, green, red]>>;

type expr3 = cons<expr2, numbers>;
type test3 = Test<Equal<expr3, [colors, ...numbers]>>;

type expr4 = [];
type test4a = Test<Equal<expr4, car<expr4>>>;
type test4b = Test<Equal<expr4, cdr<expr4>>>;

type expr5 = car<cdr<expr3>>;
type test5 = Test<Equal<expr5, one>>;

type expr6 = cons<one, cons<two, cons<three, []>>>;
type test6 = Test<Equal<expr6, numbers>>;

type expr7 = cdr<["one"]>;
type test7 = Test<Equal<expr7, "one">>;
