import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from 'vitest';

import { User } from './hooks';

// We can outsource code but it might make you test act weird since some function change
//  the value of the outsourced code, so we must use HOOKS
const testEmail = 'test@test.com';
let user = new User(testEmail);
// We can add the before and after to describe or to the file like here
beforeAll(() => {
  console.log('beforeAll()');
});

beforeEach(() => {
  user = new User(testEmail);
  console.log('beforeEach()');
})

afterEach(() => {
  // user = new User(testEmail);
  console.log('afterEach()');
})

afterAll(() => {
  console.log('afterAll()');
})

// if you dont want to add concurrent in every it use the following:
// describe.concurrent()

// Forces test to run concurrently
it.concurrent('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {


  expect(user).toHaveProperty('email');
});

it.concurrent('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it.concurrent('should clear the email', () => {

  user.clearEmail();

  expect(user.email).toBe('');
});

it.concurrent('should still have an email property after clearing the email', () => {

  user.clearEmail();

  expect(user).toHaveProperty('email');
});
