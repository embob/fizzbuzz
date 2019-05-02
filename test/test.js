var assert = require('assert');

var fizzbuzz = require('../src/index.js');

describe('fizzbuzz', () => {
  it('will return a string of 1 when given 1 as an argument', () => {
    assert.strictEqual(fizzbuzz(1), '1');
  });
  it('will return a string of 2 when given 2 as an argument', () => {
    assert.strictEqual(fizzbuzz(2), '2');
  })
});
