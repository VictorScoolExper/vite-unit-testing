import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

// done is a parameter that allows us to wait for the response
// The it statement below was ment for callbacks
it("should generate a token value", (done) => {
  // Arrange
  const testUserEmail = "test@test.com";

  // Act
  generateToken(testUserEmail, (err, token) => {
    // Assert
    // expect(token).toBeDefined();
    // done();

    // the trycatch can help us get back help errors in console
    try {
      expect(token).toBeDefined();
      done();
    } catch (error) {
      done(error);
    }
  });
});

// The below example if meant for promises
it('should generate a token value', () => {
    const testUserEmail = 'test@test.com';
    
    // you can concatenate resolves or reject
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
})

it('should generate a token value', async () => {
    const testUserEmail = 'test@test.com';
    
    const token = await generateTokenPromise(testUserEmail);

    // we do not need return when we have async await
    expect(token).toBeDefined();
})
