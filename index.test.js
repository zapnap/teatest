const tt = require('./index');

test('produces a valid hex color', () => {
  expect(tt()).toMatch(/^#[0-9a-f]{6}$/i);
});