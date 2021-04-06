import { genderize, Mode } from '../../src/ivrita';

test('Basic braces functionality', () => {
  expect(genderize('{רוצים/ות}', Mode.FEMALE)).toBe('רוצים/ות');
  expect(genderize('{רוצים/ות}', Mode.MALE)).toBe('רוצים/ות');

  expect(genderize('{הרבה מעצבים/ות רוצים/ות ללמוד תכנות}', Mode.FEMALE)).toBe('הרבה מעצבים/ות רוצים/ות ללמוד תכנות');
  expect(genderize('{הרבה מעצבים/ות רוצים/ות ללמוד תכנות}', Mode.MALE)).toBe('הרבה מעצבים/ות רוצים/ות ללמוד תכנות');
});

test('Braces mixed in a sentence', () => {
  expect(genderize('הרבה מעצבים/ות {רוצים/ות} למצוא את עצמם/ן', Mode.FEMALE)).toBe('הרבה מעצבות רוצים/ות למצוא את עצמן');
  expect(genderize('הרבה מעצבים/ות {רוצים/ות} למצוא את עצמם/ן', Mode.MALE)).toBe('הרבה מעצבים רוצים/ות למצוא את עצמם');

  expect(genderize('הרבה {מעצבים/ות} רוצים/ות לראות את {עצמם/ן} כאילו הם/ן יצאו ממצריים כגבר/אישה {חזק.ה} ועצמאי.ת', Mode.FEMALE)).toBe('הרבה מעצבים/ות רוצות לראות את עצמם/ן כאילו הן יצאו ממצריים כאישה חזק.ה ועצמאית');
  expect(genderize('הרבה {מעצבים/ות} רוצים/ות לראות את {עצמם/ן} כאילו הם/ן יצאו ממצריים כגבר/אישה {חזק.ה} ועצמאי.ת', Mode.MALE)).toBe('הרבה מעצבים/ות רוצים לראות את עצמם/ן כאילו הם יצאו ממצריים כגבר חזק.ה ועצמאי');
});

test('Brackets inside braces', () => {
  expect(genderize('{[בן|בת]}', Mode.FEMALE)).toBe('[בן|בת]');
  expect(genderize('{[בן|בת]}', Mode.MALE)).toBe('[בן|בת]');
});
