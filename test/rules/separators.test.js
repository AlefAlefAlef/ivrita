import { genderize, Mode } from '../../src/ivrita';

test('All separators', () => {
  expect(genderize('את/ה', Mode.MALE)).toBe('אתה');
  expect(genderize('את.ה', Mode.MALE)).toBe('אתה');
  expect(genderize('את\\ה', Mode.MALE)).toBe('אתה');
});
