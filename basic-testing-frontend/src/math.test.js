import { test, it, expect } from "vitest";

import { add } from "./math";

// Unit test just test functionality that is not dependent on other functions.
// We must call our test or it function to create these unit test

// The it/test function must first recieve a string, you will define what you expect
// will happen in the string in a concise manner.
// The second param you pass a pointer to another function or an arrow function
it("should summarieze all number values in an array", () => {
  const result = add([1, 2, 3]);

  // The expect function, we pass the result and add to the function
  // The concatenated function are function that tell it what to expect
  // Note be sure that the concatenated function is what you are looking for.
  // Checkout the other possible methods
  expect(result).toBe(6);
});

// easier to read if we add constants
it("should summarieze all number values in an array", () => {
  // Arrange Phase
  const numbers = [1, 2, 3];

  // Act Phase
  const result = add(numbers);

  // Assert Phase
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield NaN if a least one invalid number is provided", () => {
  // Arrange Phase
  const inputs = ["invalid", 1];

  // Act Phase
  const result = add(inputs);

  // Assert Phase
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values if provided", () => {
  //   Arrange Phase
  const numbers = ["1", "2"];

  // Act Phase
  const result = add(numbers);

  //   Assert Phase
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array if provided', () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
})

it('should throw an error if no value is passed into the function', () => {
    const result = add();

    
});

// Note

// we can modify our package.json to manipulate outputs.

// AAA - Arrange, Act Asset pattern
// Arrange Phase: Deine the testing environment & values
// Act Phsae: Run the actual code/function that should be tested
// Assert Phase: Evaluate the produced value/result and compare it to the expected value/result

// Writing Good Tests
