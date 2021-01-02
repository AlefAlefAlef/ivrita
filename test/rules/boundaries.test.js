import { genderize, FEMALE, MALE } from '../../src/ivrita';

test('Word ending with special chars', () => {
  expect(genderize('בוא/י"', FEMALE)).toBe('בואי"');
  expect(genderize('בוא/י"', MALE)).toBe('בוא"');

  expect(genderize('מרגיש/ה?', FEMALE)).toBe('מרגישה?');
  expect(genderize('מרגיש/ה?', MALE)).toBe('מרגיש?');
});

test('Word beginning with special chars', () => {
  expect(genderize('"בוא/י', FEMALE)).toBe('"בואי');
  expect(genderize('"בוא/י', MALE)).toBe('"בוא');
});

test('Rules beginning with boundary', () => {
  expect(genderize('י/תכתוב י/תרצה', MALE)).toBe('יכתוב ירצה');
});
