function fizzbuzz(number) {
  if (number === 0) {
    return '0';
  }
  if ((number % 3 === 0) && (number % 5 === 0)) {
    return 'fizzbuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return `${ number }`
}

module.exports = fizzbuzz;
