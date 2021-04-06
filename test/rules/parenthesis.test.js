import { genderize, Mode } from '../../src/ivrita';

test('Singular possessive', () => {
  expect(genderize('חבר(ת)ו', Mode.FEMALE)).toBe('חברתו');
  expect(genderize('חבר(ת)ו', Mode.MALE)).toBe('חברו');
});

test('Grandma/pa', () => {
  expect(genderize('סב(ת)א', Mode.FEMALE)).toBe('סבתא');
  expect(genderize('סב(ת)א', Mode.MALE)).toBe('סבא');
});

test('Men/Women', () => {
  expect(genderize('(א)נשים', Mode.FEMALE)).toBe('נשים');
  expect(genderize('(א)נשים', Mode.MALE)).toBe('אנשים');
});

test('Third person ending Tav', () => {
  expect(genderize('חושב(ת)', Mode.FEMALE)).toBe('חושבת');
  expect(genderize('חושב(ת)', Mode.MALE)).toBe('חושב');
});

test('Plural possessive', () => {
  expect(genderize('מתנגד(ות)יו', Mode.FEMALE)).toBe('מתנגדותיו');
  expect(genderize('מתנגד(ות)יו', Mode.MALE)).toBe('מתנגדיו');

  expect(genderize('מתנגד(ות)יהן', Mode.FEMALE)).toBe('מתנגדותיהן');
  expect(genderize('מתנגד(ות)יהן', Mode.MALE)).toBe('מתנגדיהן');

  expect(genderize('מעריצ(ות)יו', Mode.FEMALE)).toBe('מעריצותיו');
  expect(genderize('מעריצ(ות)יו', Mode.MALE)).toBe('מעריציו');
});

test('Yod in the middle', () => {
  expect(genderize('עלי(י)ך', Mode.FEMALE)).toBe('עלייך');
  expect(genderize('עלי(י)ך', Mode.MALE)).toBe('עליך');

  expect(genderize('פנ(י)יך', Mode.FEMALE)).toBe('פנייך');
  expect(genderize('פנ(י)יך', Mode.MALE)).toBe('פניך');

  expect(genderize('הפע(י)ל/י', Mode.FEMALE)).toBe('הפעילי');
  expect(genderize('הפע(י)ל/י', Mode.MALE)).toBe('הפעל');
});

test('Mode.Neutral plural', () => {
  expect(genderize('הודעתך(ם)', Mode.FEMALE)).toBe('הודעתך');
  expect(genderize('הודעתך(ם)', Mode.MALE)).toBe('הודעתך');
  expect(genderize('הודעתך(ם)', Mode.NEUTRAL)).toBe('הודעתכם');
  expect(genderize('הודעתך(ן)', Mode.NEUTRAL)).toBe('הודעתכן');
  expect(genderize('הודעתך(םן)', Mode.NEUTRAL)).toBe('הודעתכםן');
  expect(genderize('הודעתך(ןם)', Mode.NEUTRAL)).toBe('הודעתכןם');
  expect(genderize('הודעתך(ם.ן)', Mode.NEUTRAL)).toBe('הודעתכם.ן');
  expect(genderize('הודעתך(ם/ן)', Mode.NEUTRAL)).toBe('הודעתכם/ן');

  expect(genderize('שלך(ם)', Mode.FEMALE)).toBe('שלך');
  expect(genderize('שלך(ם)', Mode.MALE)).toBe('שלך');
  expect(genderize('שלך(ם)', Mode.NEUTRAL)).toBe('שלכם');
  expect(genderize('שלך(ן)', Mode.NEUTRAL)).toBe('שלכן');

  expect(genderize('שלכ(ם)', Mode.FEMALE)).toBe('שלך');
  expect(genderize('שלכ(ם)', Mode.MALE)).toBe('שלך');
  expect(genderize('שלכ(ם)', Mode.NEUTRAL)).toBe('שלכם');
  expect(genderize('שלכ(ן)', Mode.NEUTRAL)).toBe('שלכן');
});
