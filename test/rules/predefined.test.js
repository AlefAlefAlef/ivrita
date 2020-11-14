import { genderize, FEMALE, MALE } from '../../src/ivrita';

test('Whole words', () => {
  expect(genderize('אנשי/ות עסקים', FEMALE)).toBe('נשות עסקים');
  expect(genderize('אנשי/ות עסקים', MALE)).toBe('אנשי עסקים');

  expect(genderize('א.נשים', FEMALE)).toBe('נשים');
  expect(genderize('א.נשים', MALE)).toBe('אנשים');

  expect(genderize('איש/אשת', FEMALE)).toBe('אשת');
  expect(genderize('איש/אשת', MALE)).toBe('איש');
  expect(genderize('אשת/איש', FEMALE)).toBe('אשת');
  expect(genderize('אשת/איש', MALE)).toBe('איש');
  expect(genderize('גבר/אישה', FEMALE)).toBe('אישה');
  expect(genderize('גבר/אישה', MALE)).toBe('גבר');
  expect(genderize('איש/אישה', MALE)).toBe('איש');

  // Female
  expect(genderize('רוצ/י', FEMALE)).toBe('רוצי');
  expect(genderize('רוצ/י', MALE)).toBe('רוץ');

  expect(genderize('קומ/י', FEMALE)).toBe('קומי');
  expect(genderize('קומ/י', MALE)).toBe('קום');

  expect(genderize('עופ/י', FEMALE)).toBe('עופי');
  expect(genderize('עופ/י', MALE)).toBe('עוף');

  expect(genderize('שים/י', FEMALE)).toBe('שימי');
  expect(genderize('שים/י', MALE)).toBe('שים');

  expect(genderize('אח/ות', FEMALE)).toBe('אחות');
  expect(genderize('אח/ות', MALE)).toBe('אח');

  expect(genderize('לו/לה, לה/לו', FEMALE)).toBe('לה, לה');
  expect(genderize('לו/לה, לה/לו', MALE)).toBe('לו, לו');

  expect(genderize('בן/בת, בת/בן', FEMALE)).toBe('בת, בת');
  expect(genderize('בן/בת, בת/בן', MALE)).toBe('בן, בן');

  expect(genderize('הוא/היא, היא/הוא', FEMALE)).toBe('היא, היא');
  expect(genderize('הוא/היא, היא/הוא', MALE)).toBe('הוא, הוא');

  expect(genderize('אנשי/ות', FEMALE)).toBe('נשות');
  expect(genderize('אנשי/ות', MALE)).toBe('אנשי');

  expect(genderize('מישהו/י', FEMALE)).toBe('מישהי');
  expect(genderize('מישהו/י', MALE)).toBe('מישהו');

  expect(genderize('אחד/ת, אחד/אחת, אחת/אחד', FEMALE)).toBe('אחת, אחת, אחת');
  expect(genderize('אחד/ת, אחד/אחת, אחת/אחד', MALE)).toBe('אחד, אחד, אחד');
});
