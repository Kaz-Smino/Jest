const fizz_buzz = require('./fizz_buzz');

test('3 convert to fizz' , () => {
  expect(fizz_buzz(3)).toBe('fizz');
});