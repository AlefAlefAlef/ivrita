import { genderize, Mode } from '../../src/ivrita';

test('Word beginnings', () => {
  expect(genderize('י/תכתוב', Mode.FEMALE)).toBe('תכתוב');
  expect(genderize('י/תכתוב', Mode.MALE)).toBe('יכתוב');
  expect(genderize('שי/תכתוב', Mode.FEMALE)).toBe('שתכתוב');
  expect(genderize('שי/תכתוב', Mode.MALE)).toBe('שיכתוב');

  expect(genderize('ת/יכתוב', Mode.FEMALE)).toBe('תכתוב');
  expect(genderize('ת/יכתוב', Mode.MALE)).toBe('יכתוב');
  expect(genderize('שת/יכתוב', Mode.FEMALE)).toBe('שתכתוב');
  expect(genderize('שת/יכתוב', Mode.MALE)).toBe('שיכתוב');

  expect(genderize('ת/ירצה', Mode.FEMALE)).toBe('תרצה');
  expect(genderize('ת/ירצה', Mode.MALE)).toBe('ירצה');
  expect(genderize('י/תרצה', Mode.FEMALE)).toBe('תרצה');
  expect(genderize('י/תרצה', Mode.MALE)).toBe('ירצה');

  expect(genderize('י/תבוא', Mode.FEMALE)).toBe('תבוא');
  expect(genderize('י/תבוא', Mode.MALE)).toBe('יבוא');
  expect(genderize('ת/יבוא', Mode.FEMALE)).toBe('תבוא');
  expect(genderize('ת/יבוא', Mode.MALE)).toBe('יבוא');
});
