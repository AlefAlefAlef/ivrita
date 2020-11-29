import { genderize, FEMALE, MALE } from '../../src/ivrita';

test('Word ending with special chars', () => {
  expect(genderize('בוא/י"', FEMALE)).toBe('בואי"');
  expect(genderize('בוא/י"', MALE)).toBe('בוא"');
});

test('Word beginning with special chars', () => {
  expect(genderize('"בוא/י', FEMALE)).toBe('"בואי');
  expect(genderize('"בוא/י', MALE)).toBe('"בוא');
});
