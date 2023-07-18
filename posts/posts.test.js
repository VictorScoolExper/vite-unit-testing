import { describe, expect, it, beforeEach } from "vitest";
import { extractPostData } from "./posts";

const testTitle = "Test title";
const testContent = "Test content";
// we simulate the form calls
let testFormData = {
  title: testTitle,
  content: testContent,
  get(identifier) {
    return this[identifier];
  },
};

describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });

  it("should extract title and content from the provided form data", () => {
    // const testTitle = 'Test title';
    // const testContent = 'Test content';
    // // we simulate the form calls
    // const testFormData = {
    //     title: testTitle,
    //     content: testContent,
    //     get(identifier){
    //         return this[identifier]
    //     },
    // };

    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
