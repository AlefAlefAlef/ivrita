import Ivrita from '../../src/ivrita';

test('All separators', () => {
  expect(Ivrita.genderize('את/ה', Ivrita.MALE)).toBe('אתה');
  expect(Ivrita.genderize('את.ה', Ivrita.MALE)).toBe('אתה');
  expect(Ivrita.genderize('את\\ה', Ivrita.MALE)).toBe('אתה');
});
