const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('rounds the first argument correctly', () => {
    assert.strictEqual(calculateNumber(2.4, 0), 2);
    assert.strictEqual(calculateNumber(2.5, 0), 3);
    assert.strictEqual(calculateNumber(2.9, 0), 3);
  });

  it('rounds the second argument correctly', () => {
    assert.strictEqual(calculateNumber(0, 3.4), 3);
    assert.strictEqual(calculateNumber(0, 3.5), 4);
    assert.strictEqual(calculateNumber(0, 3.9), 4);
  });

  it('returns the correct sum for various inputs', () => {
    assert.strictEqual(calculateNumber(1.2, 3.4), 4);
    assert.strictEqual(calculateNumber(1.7, 3.5), 6);
    assert.strictEqual(calculateNumber(1.3, 3.9), 5);
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
    assert.strictEqual(calculateNumber(2.6, 3.8), 7);
    assert.strictEqual(calculateNumber(1.4, 2.1), 3);
  });
});
