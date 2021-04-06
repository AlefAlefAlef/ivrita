import { genderize, Mode } from '../../src/ivrita';

test('Word ending with special chars', () => {
  expect(genderize('בוא/י"', Mode.FEMALE)).toBe('בואי"');
  expect(genderize('בוא/י"', Mode.MALE)).toBe('בוא"');

  expect(genderize('מרגיש/ה?', Mode.FEMALE)).toBe('מרגישה?');
  expect(genderize('מרגיש/ה?', Mode.MALE)).toBe('מרגיש?');
});

test('Word beginning with special chars', () => {
  expect(genderize('"בוא/י', Mode.FEMALE)).toBe('"בואי');
  expect(genderize('"בוא/י', Mode.MALE)).toBe('"בוא');
});

test('Rules beginning with boundary', () => {
  expect(genderize('י/תכתוב י/תרצה', Mode.MALE)).toBe('יכתוב ירצה');

  expect(genderize('ישראלים/ות סטודנטים/ות', Mode.FEMALE)).toBe('ישראליות סטודנטיות');
});
