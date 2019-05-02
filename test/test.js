var assert = require('assert');

var fizzbuzz = require('../src/index.js');

describe('fizzbuzz', () => {
  it('will return a string of the input given', () => {
    assert.equal(fizzbuzz(1), '1');
  })
})
