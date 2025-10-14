// exercise-7.test.js
import { describe, it, expect } from "vitest";
import { add } from "Module 1\labex 4\5\labex4\5.js";
import {divide} from "Module 1\labex 4\5\labex4\5.js";

describe("tests for lab 4", () => {
  it("add 1 and 2 should be 3", () => {
    // write tests here
    expect(add(1, 2)).equal(3);
  });

  it("divide 2 and 1 should be 1", () => {
    // write tests here
    expect(divide(2, 1)).equal(2);
  });

});