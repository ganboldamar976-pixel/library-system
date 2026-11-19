const test = require('node:test');
const assert = require('node:assert');
const { calcFine } = require('../src/fine');

test('хоцроогүй бол торгуулъгүй', () => {
  assert.strictEqual(calcFine(0), 0);
});

test('5 хоног хоцорвол 5 × 100 = 500', () => {
  assert.strictEqual(calcFine(5), 500);
});

test('өөр хоногийн тариф ашиглаж болно', () => {
  assert.strictEqual(calcFine(3, 200), 600);
});

test('сөрөг хоног өгвөл алдаа заана', () => {
  assert.throws(() => calcFine(-1), RangeError);
});
