import { genderize, FEMALE, MALE } from '../../src/ivrita';

test('Word beginnings', () => {
  expect(genderize('י/תכתוב', FEMALE)).toBe('תכתוב');
  expect(genderize('י/תכתוב', MALE)).toBe('יכתוב');
  expect(genderize('שי/תכתוב', FEMALE)).toBe('שתכתוב');
  expect(genderize('שי/תכתוב', MALE)).toBe('שיכתוב');

  expect(genderize('ת/יכתוב', FEMALE)).toBe('תכתוב');
  expect(genderize('ת/יכתוב', MALE)).toBe('יכתוב');
  expect(genderize('שת/יכתוב', FEMALE)).toBe('שתכתוב');
  expect(genderize('שת/יכתוב', MALE)).toBe('שיכתוב');

  expect(genderize('ת/ירצה', FEMALE)).toBe('תרצה');
  expect(genderize('ת/ירצה', MALE)).toBe('ירצה');
  expect(genderize('י/תרצה', FEMALE)).toBe('תרצה');
  expect(genderize('י/תרצה', MALE)).toBe('ירצה');

  expect(genderize('י/תבוא', FEMALE)).toBe('תבוא');
  expect(genderize('י/תבוא', MALE)).toBe('יבוא');
  expect(genderize('ת/יבוא', FEMALE)).toBe('תבוא');
  expect(genderize('ת/יבוא', MALE)).toBe('יבוא');
});
