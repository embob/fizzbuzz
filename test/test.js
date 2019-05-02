var assert = require('assert');

var fizzbuzz = require('../src/index.js');
var jsc = require('jsverify');

describe('fizzbuzz', () => {
  it('will return a string of 1 when given 1 as an argument', () => {
    assert.strictEqual(fizzbuzz(1), '1');
  });
  it('will return a string of 2 when given 2 as an argument', () => {
    assert.strictEqual(fizzbuzz(2), '2');
  });
  it('will return a string  when given any number as an argument', () => {
    const allChecksPass = jsc.checkForall(jsc.integer, (number) => fizzbuzz(number) === `${number}`);
    assert.strictEqual(allChecksPass, true);
  })
  it('will return a string of fizz when given a multiple of 3 as an argument', () => {
    assert.strictEqual(fizzbuzz(3), 'fizz');
  })
});
