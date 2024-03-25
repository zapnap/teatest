const tt = require('./index');

test('produces a valid hex color', () => {
  expect(tt.randomColor()).toMatch(/^#[0-9a-f]{6}$/i);
});
