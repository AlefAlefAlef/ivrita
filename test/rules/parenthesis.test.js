import { genderize, FEMALE, MALE } from '../../src/ivrita';

test('Singular possessive', () => {
  expect(genderize('חבר(ת)ו', FEMALE)).toBe('חברתו');
  expect(genderize('חבר(ת)ו', MALE)).toBe('חברו');
});

test('Men/Women', () => {
  expect(genderize('(א)נשים', FEMALE)).toBe('נשים');
  expect(genderize('(א)נשים', MALE)).toBe('אנשים');
});

test('Third person ending Tav', () => {
  expect(genderize('חושב(ת)', FEMALE)).toBe('חושבת');
  expect(genderize('חושב(ת)', MALE)).toBe('חושב');
});

test('Plural possessive', () => {
  expect(genderize('מתנגד(ות)יו', FEMALE)).toBe('מתנגדותיו');
  expect(genderize('מתנגד(ות)יו', MALE)).toBe('מתנגדיו');

  expect(genderize('מתנגד(ות)יהן', FEMALE)).toBe('מתנגדותיהן');
  expect(genderize('מתנגד(ות)יהן', MALE)).toBe('מתנגדיהן');

  expect(genderize('מעריצ(ות)יו', FEMALE)).toBe('מעריצותיו');
  expect(genderize('מעריצ(ות)יו', MALE)).toBe('מעריציו');
});

test('Yod in the middle', () => {
  expect(genderize('עלי(י)ך', FEMALE)).toBe('עלייך');
  expect(genderize('עלי(י)ך', MALE)).toBe('עליך');

  expect(genderize('פנ(י)יך', FEMALE)).toBe('פנייך');
  expect(genderize('פנ(י)יך', MALE)).toBe('פניך');
});
