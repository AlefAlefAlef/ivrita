import { genderize, FEMALE, MALE } from '../../src/ivrita';

test('Basic braces functionality', () => {
  expect(genderize('{רוצים/ות}', FEMALE)).toBe('רוצים/ות');
  expect(genderize('{רוצים/ות}', MALE)).toBe('רוצים/ות');

  expect(genderize('{הרבה מעצבים/ות רוצים/ות ללמוד תכנות}', FEMALE)).toBe('הרבה מעצבים/ות רוצים/ות ללמוד תכנות');
  expect(genderize('{הרבה מעצבים/ות רוצים/ות ללמוד תכנות}', MALE)).toBe('הרבה מעצבים/ות רוצים/ות ללמוד תכנות');
});

test('Braces mixed in a sentence', () => {
  expect(genderize('הרבה מעצבים/ות {רוצים/ות} למצוא את עצמם/ן', FEMALE)).toBe('הרבה מעצבות רוצים/ות למצוא את עצמן');
  expect(genderize('הרבה מעצבים/ות {רוצים/ות} למצוא את עצמם/ן', MALE)).toBe('הרבה מעצבים רוצים/ות למצוא את עצמם');

  expect(genderize('הרבה {מעצבים/ות} רוצים/ות לראות את {עצמם/ן} כאילו הם/ן יצאו ממצריים כגבר/אישה {חזק.ה} ועצמאי.ת', FEMALE)).toBe('הרבה מעצבים/ות רוצות לראות את עצמם/ן כאילו הן יצאו ממצריים כאישה חזק.ה ועצמאית');
  expect(genderize('הרבה {מעצבים/ות} רוצים/ות לראות את {עצמם/ן} כאילו הם/ן יצאו ממצריים כגבר/אישה {חזק.ה} ועצמאי.ת', MALE)).toBe('הרבה מעצבים/ות רוצים לראות את עצמם/ן כאילו הם יצאו ממצריים כגבר חזק.ה ועצמאי');
});

test('Brackets inside braces', () => {
  expect(genderize('{[בן|בת]}', FEMALE)).toBe('[בן|בת]');
  expect(genderize('{[בן|בת]}', MALE)).toBe('[בן|בת]');
});
