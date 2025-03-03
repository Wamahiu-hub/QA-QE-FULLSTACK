"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const tes2_1 = require("./tes2");
const tes2_2 = require("./tes2");
const _2 = require(".");
test("adds 1 + 2 to equal 3", () => {
    expect((0, _1.sum)(1, 2)).toBe(3);
});
// test 2
test("test sub...", () => {
    expect((0, tes2_1.subtraction)(5, 3)).toBe(2);
});
//test 3
test("test multi...", () => {
    expect((0, tes2_2.multiplication)(7, 3)).toBe(21);
});
//test 4
test("test div..", () => {
    expect((0, _2.division)(8, 4)).toBe(2);
});
