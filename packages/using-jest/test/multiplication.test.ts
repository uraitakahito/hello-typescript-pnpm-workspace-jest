import mul from '../src/multiplication';

test('multiplies 2 and 3 to give 6', () => {
  expect(mul(2, 3)).toBe(6);
});
