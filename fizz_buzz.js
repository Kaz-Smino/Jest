function fizz_buzz(number) {
  if (number % 15 === 0) {
      return 'fizz_buzz';
  }
  else if (number % 3 === 0) {
      return 'fizz';
  }
  else if (number % 5 === 0) {
      return 'buzz';
  }
  return number;
}

module.exports = fizz_buzz;