import Ivrita from '../../src/ivrita';

test('Basic braces functionality', () => {
  expect(Ivrita.genderize('{רוצים/ות}', Ivrita.FEMALE)).toBe('רוצים/ות');
  expect(Ivrita.genderize('{רוצים/ות}', Ivrita.MALE)).toBe('רוצים/ות');

  expect(Ivrita.genderize('{הרבה מעצבים/ות רוצים/ות ללמוד תכנות}', Ivrita.FEMALE)).toBe('הרבה מעצבים/ות רוצים/ות ללמוד תכנות');
  expect(Ivrita.genderize('{הרבה מעצבים/ות רוצים/ות ללמוד תכנות}', Ivrita.MALE)).toBe('הרבה מעצבים/ות רוצים/ות ללמוד תכנות');
});

test('Braces mixed in a sentence', () => {
  expect(Ivrita.genderize('הרבה מעצבים/ות {רוצים/ות} למצוא את עצמם/ן', Ivrita.FEMALE)).toBe('הרבה מעצבות רוצים/ות למצוא את עצמן');
  expect(Ivrita.genderize('הרבה מעצבים/ות {רוצים/ות} למצוא את עצמם/ן', Ivrita.MALE)).toBe('הרבה מעצבים רוצים/ות למצוא את עצמם');

  expect(Ivrita.genderize('הרבה {מעצבים/ות} רוצים/ות לראות את {עצמם/ן} כאילו הם/ן יצאו ממצריים כגבר/אישה {חזק.ה} ועצמאי.ת', Ivrita.FEMALE)).toBe('הרבה מעצבים/ות רוצות לראות את עצמם/ן כאילו הן יצאו ממצריים כאישה חזק.ה ועצמאית');
  expect(Ivrita.genderize('הרבה {מעצבים/ות} רוצים/ות לראות את {עצמם/ן} כאילו הם/ן יצאו ממצריים כגבר/אישה {חזק.ה} ועצמאי.ת', Ivrita.MALE)).toBe('הרבה מעצבים/ות רוצים לראות את עצמם/ן כאילו הם יצאו ממצריים כגבר חזק.ה ועצמאי');
});

test('Brackets inside braces', () => {
  expect(Ivrita.genderize('{[בן|בת]}', Ivrita.FEMALE)).toBe('[בן|בת]');
  expect(Ivrita.genderize('{[בן|בת]}', Ivrita.MALE)).toBe('[בן|בת]');
});

test('Strings with Ivrita constants stay the same', () => {
  expect(Ivrita.genderize('מי שכתב/ה את הטקסט הזה לא {רצה/תה} שיהיה לנו קל {__IVRITA_PROTECTED__:333:__IVRITA_PROTECTED__}', Ivrita.MALE)).toBe('מי שכתב/ה את הטקסט הזה לא {רצה/תה} שיהיה לנו קל {__IVRITA_PROTECTED__:333:__IVRITA_PROTECTED__}');
  expect(Ivrita.genderize('מי שכתב/ה את הטקסט הזה לא {רצה/תה} שיהיה לנו קל {__IVRITA_PROTECTED__:333:__IVRITA_PROTECTED__}', Ivrita.FEMALE)).toBe('מי שכתב/ה את הטקסט הזה לא {רצה/תה} שיהיה לנו קל {__IVRITA_PROTECTED__:333:__IVRITA_PROTECTED__}');
});
