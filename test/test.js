var assert = require('assert');

var fizzbuzz = require('../src/index.js');
var jsc = require('jsverify');

describe('fizzbuzz', () => {
  it('will return a string of 0 when given 0 as an argument', () => {
    assert.strictEqual(fizzbuzz(0), '0');
  });
  it('will return a string of 1 when given 1 as an argument', () => {
    assert.strictEqual(fizzbuzz(1), '1');
  });
  it('will return a string of 2 when given 2 as an argument', () => {
    assert.strictEqual(fizzbuzz(2), '2');
  });
  it('will return a string of fizz when given a multiple of 3 as an argument', () => {
    assert.strictEqual(fizzbuzz(3), 'fizz');
    assert.strictEqual(fizzbuzz(6), 'fizz');
  });
  it('will return a string of buzz when given a multiple of 5 as an argument', () => {
    assert.strictEqual(fizzbuzz(5), 'buzz');
    assert.strictEqual(fizzbuzz(10), 'buzz');
  });
  it('will return a string of fizzbuzz when given a multiple of 3 and 5 as an argument', () => {
    assert.strictEqual(fizzbuzz(15), 'fizzbuzz');
  });
  it('will return either the input as a string or fizz if a multiple of 3 or buzz if a multiple of 5', () => {
    const allChecksPass = jsc.checkForall(jsc.integer, (number) => {
      if (number === 0) {
        return fizzbuzz(number) === '0';
      }
      if ((number % 3 === 0) && (number % 5 === 0)) {
        return fizzbuzz(number) === 'fizzbuzz';
      }
        if(number % 3 === 0) {
        return fizzbuzz(number) === 'fizz';
      }
      if(number % 5 === 0) {
        return fizzbuzz(number) === 'buzz';
      }
      return fizzbuzz(number) === `${number}`;
    });
    assert.strictEqual(allChecksPass, true);
  })
});
