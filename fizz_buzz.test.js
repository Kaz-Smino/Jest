const fizz_buzz = require('./fizz_buzz');

test('3 convert to fizz' , () => {
  expect(fizz_buzz(3)).toBe('fizz');
});

test('6 convert to fizz' , () => {
  expect(fizz_buzz(6)).toBe('fizz');
});

test('5 convert to buzz' , () => {
  expect(fizz_buzz(5)).toBe('buzz');
});