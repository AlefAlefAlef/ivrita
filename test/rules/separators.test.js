import { genderize, MALE } from '../../src/ivrita';

test('All separators', () => {
  expect(genderize('את/ה', MALE)).toBe('אתה');
  expect(genderize('את.ה', MALE)).toBe('אתה');
  expect(genderize('את\\ה', MALE)).toBe('אתה');
});
