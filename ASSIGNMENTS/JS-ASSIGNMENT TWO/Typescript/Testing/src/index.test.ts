import { sum } from ".";
import { subtraction } from "./tes2";
import {multiplication} from "./tes2";
import { division } from ".";
import {addition } from "./tes2";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// test 2
test("test sub...", () => {
  expect(subtraction(5, 3)).toBe(2);
});

//test 3
test("test multi...", () => {
  expect(multiplication(7, 3)).toBe(21);});

//test 4
test("test div..", () => {
  expect(division(8, 4)).toBe(3);
});