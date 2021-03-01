import { eq, test } from "./test-utils";
import { parse } from "./white-hibiscus"

// empty list
type expr1 = `()`
type pars1 = parse<expr1>;
type test1 = test<eq<pars1, `()`>>;

// atom
type expr2 = `'atom`
type pars2 = parse<expr2>;
type test2 = test<eq<pars2, `'atom`>>;

// quoted empty list
type expr3 = `'()`
type pars3 = parse<expr3>;
type test3 = test<eq<pars3, expr3>>;
// quoted list

// bare car
// type expr3 = `(car)`
// type pars3 = parse<expr3>;
// type test3 = test<eq<pars3, `(car)`>>;
// 
// // bare cdr
// type expr4 = `(cdr)`
// type pars4 = parse<expr4>;
// type test4 = test<eq<pars4, `(cdr)`>>;
// 
// // bare cons
// type expr5 = `(cons)`
// type pars5 = parse<expr5>;
// type test5 = test<eq<pars5, `(cons)`>>;
// 
// // car of an empty quoted list
// type expr6 = `(car '())`
// type pars6 = parse<expr6>;
// type test6 = test<eq<pars6, `'()`>>;
// 
// // cdr of an empty quoted list
// type expr7 = `(cdr '())`
// type pars7 = parse<expr7>;
// type test7 = test<eq<pars7, `'()`>>;
// 
// // car of a single item quoted list
// type expr8 = `(car '(one))`
// type pars8 = parse<expr8>;
// type test8 = test<eq<pars8, `one`>>;
// 
// // cdr of a single item quoted list
// type expr9 = `(cdr '(one))`
// type pars9 = parse<expr9>;
// type test9 = test<eq<pars9, `one`>>;
