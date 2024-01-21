const fizz_buzz = require('./fizz_buzz');

// fizz
test('3 convert to fizz' , () => {
  expect(fizz_buzz(3)).toBe('fizz');
});

// buzz
test('5 convert to buzz' , () => {
  expect(fizz_buzz(5)).toBe('buzz');
});

// fizz_buzz
test('15 convert to fizz_buzz' , () => {
  expect(fizz_buzz(15)).toBe('fizz_buzz');
});

// else
test('2 convert to 2' , () => {
  expect(fizz_buzz(2)).toBe(2);
});