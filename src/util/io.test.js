// Note that if we are using Jest we must declare it at top of the file and beffore library declares

import { it, expect, vi } from "vitest";
// this is also found in our io.js
import { promises as fs } from "fs";

import writeData from "./io.js";

// We mock is our third fs party library
// vitest automatically moves this test to the top
vi.mock("fs");
// allows us to create function simulation
vi.mock("path", () => {
  return {
    // default must be called because it is a default export when we call it.
    // has to be named default
    // default host a join property
    default: {
      // replacement of the join that comes from path
      join: (...args) => {
        // returns last element
        // which returns the filename which we check for
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const testData = "Test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // This spy function allows to know if it was activated
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "Test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  // This spy function allows to know if it was activated
  // expect(fs.writeFile).toBeCalled();
  // expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
