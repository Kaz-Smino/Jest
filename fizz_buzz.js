function fizz_buzz(number) {
  if (number % 3 === 0) {
      return 'fizz';
  }
  else if (number % 5 === 0) {
      return 'buzz';
  }
}

module.exports = fizz_buzz;