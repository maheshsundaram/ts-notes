import { split } from "./utils";
import { TestEq } from "./test-utils";
import { Range, TupleToIndexMap } from "./keyof";

type csv = `col1,col2,col3\none,two,three\nfour,five,six`;

type split_cols<str extends string> = split<str, ",">;
type split_rows<str extends string> = split<str, "\n">;

type parse_rows<csv extends string, rows = split_rows<csv>> = {
  [row in keyof rows]: rows[row] extends string
    ? split_cols<rows[row]>
    : "invalid csv";
};

type expected1 = [
  ["col1", "col2", "col3"],
  ["one", "two", "three"],
  ["four", "five", "six"]
];

type x = ["one", "two", "three"];
type y = x["length"];

type actual1 = parse_rows<csv>;

type test1 = TestEq<actual1, expected1>;

type expected2 = [
  { col1: "one"; col2: "two"; col3: "three" },
  { col1: "four"; col2: "five"; col3: "six" }
];

type MapR<
  data extends unknown[][],
  header extends string[] = string[],
  width extends header["length"] = header["length"],
  rows extends { [k in keyof header[number]]: string }[] = {
    [k in keyof header[number]]: string;
  }[]
> = {
  // @ts-ignore
  next: data extends [infer header, ...infer tail]
    ? tail extends string[]
      ? MapR<[tail], header>
      : "L"
    : "R";
  done: rows;
}[data extends [] ? "done" : "next"];

type mapRTest = MapR<expected1>;

type map_rows<rows extends string[][]> = rows extends [
  infer header,
  ...infer rest
]
  ? header extends string[]
    ? rest extends string[][]
      ? {
          [row in keyof rest]: row extends string ? "n" : "s";
        }
      : "right"
    : "invalid"
  : "bottom";

type actual2 = map_rows<actual1>;

type test2 = TestEq<expected2, actual2>;
