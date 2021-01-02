import {
  genderize, FEMALE, MALE, NEUTRAL,
} from '../../src/ivrita';

test('Singular possessive', () => {
  expect(genderize('חבר(ת)ו', FEMALE)).toBe('חברתו');
  expect(genderize('חבר(ת)ו', MALE)).toBe('חברו');
});

test('Grandma/pa', () => {
  expect(genderize('סב(ת)א', FEMALE)).toBe('סבתא');
  expect(genderize('סב(ת)א', MALE)).toBe('סבא');
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

  expect(genderize('הפע(י)ל/י', FEMALE)).toBe('הפעילי');
  expect(genderize('הפע(י)ל/י', MALE)).toBe('הפעל');
});

test('Neutral plural', () => {
  expect(genderize('הודעתך(ם)', FEMALE)).toBe('הודעתך');
  expect(genderize('הודעתך(ם)', MALE)).toBe('הודעתך');
  expect(genderize('הודעתך(ם)', NEUTRAL)).toBe('הודעתכם');
  expect(genderize('הודעתך(ן)', NEUTRAL)).toBe('הודעתכן');
  expect(genderize('הודעתך(םן)', NEUTRAL)).toBe('הודעתכםן');
  expect(genderize('הודעתך(ןם)', NEUTRAL)).toBe('הודעתכןם');
  expect(genderize('הודעתך(ם.ן)', NEUTRAL)).toBe('הודעתכם.ן');
  expect(genderize('הודעתך(ם/ן)', NEUTRAL)).toBe('הודעתכם/ן');

  expect(genderize('שלך(ם)', FEMALE)).toBe('שלך');
  expect(genderize('שלך(ם)', MALE)).toBe('שלך');
  expect(genderize('שלך(ם)', NEUTRAL)).toBe('שלכם');
  expect(genderize('שלך(ן)', NEUTRAL)).toBe('שלכן');

  expect(genderize('שלכ(ם)', FEMALE)).toBe('שלך');
  expect(genderize('שלכ(ם)', MALE)).toBe('שלך');
  expect(genderize('שלכ(ם)', NEUTRAL)).toBe('שלכם');
  expect(genderize('שלכ(ן)', NEUTRAL)).toBe('שלכן');
});
