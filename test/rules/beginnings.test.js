import Ivrita from '../../src/ivrita';

test('Word beginnings', () => {
  expect(Ivrita.genderize('י/תכתוב', Ivrita.FEMALE)).toBe('תכתוב');
  expect(Ivrita.genderize('י/תכתוב', Ivrita.MALE)).toBe('יכתוב');
  expect(Ivrita.genderize('שי/תכתוב', Ivrita.FEMALE)).toBe('שתכתוב');
  expect(Ivrita.genderize('שי/תכתוב', Ivrita.MALE)).toBe('שיכתוב');

  expect(Ivrita.genderize('י/תבוא', Ivrita.FEMALE)).toBe('תבוא');
  expect(Ivrita.genderize('י/תבוא', Ivrita.MALE)).toBe('יבוא');
  expect(Ivrita.genderize('ת/יבוא', Ivrita.FEMALE)).toBe('תבוא');
  expect(Ivrita.genderize('ת/יבוא', Ivrita.MALE)).toBe('יבוא');
});
