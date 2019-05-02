function fizzbuzz(number) {
  if (number % 3 === 0) {
    return 'fizz';
  }
  return `${ number }`
}

module.exports = fizzbuzz;
