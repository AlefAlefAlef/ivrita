import Ivrita from '../../src/ivrita';

test('Singular possessive', () => {
  expect(Ivrita.genderize('חבר(ת)ו', Ivrita.FEMALE)).toBe('חברתו');
  expect(Ivrita.genderize('חבר(ת)ו', Ivrita.MALE)).toBe('חברו');
});

test('Men/Women', () => {
  expect(Ivrita.genderize('(א)נשים', Ivrita.FEMALE)).toBe('נשים');
  expect(Ivrita.genderize('(א)נשים', Ivrita.MALE)).toBe('אנשים');
});

test('Third person ending Tav', () => {
  expect(Ivrita.genderize('חושב(ת)', Ivrita.FEMALE)).toBe('חושבת');
  expect(Ivrita.genderize('חושב(ת)', Ivrita.MALE)).toBe('חושב');
});

test('Plural possessive', () => {
  expect(Ivrita.genderize('מתנגד(ות)יו', Ivrita.FEMALE)).toBe('מתנגדותיו');
  expect(Ivrita.genderize('מתנגד(ות)יו', Ivrita.MALE)).toBe('מתנגדיו');

  expect(Ivrita.genderize('מתנגד(ות)יהן', Ivrita.FEMALE)).toBe('מתנגדותיהן');
  expect(Ivrita.genderize('מתנגד(ות)יהן', Ivrita.MALE)).toBe('מתנגדיהן');

  expect(Ivrita.genderize('מעריצ(ות)יו', Ivrita.FEMALE)).toBe('מעריצותיו');
  expect(Ivrita.genderize('מעריצ(ות)יו', Ivrita.MALE)).toBe('מעריציו');
});

test('Yod in the middle', () => {
  expect(Ivrita.genderize('עלי(י)ך', Ivrita.FEMALE)).toBe('עלייך');
  expect(Ivrita.genderize('עלי(י)ך', Ivrita.MALE)).toBe('עליך');

  expect(Ivrita.genderize('פנ(י)יך', Ivrita.FEMALE)).toBe('פנייך');
  expect(Ivrita.genderize('פנ(י)יך', Ivrita.MALE)).toBe('פניך');
});
