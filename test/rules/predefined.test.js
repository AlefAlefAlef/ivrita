import Ivrita from '../../src/ivrita';

test('Whole words', () => {
  expect(Ivrita.genderize('אנשי/ות עסקים', Ivrita.FEMALE)).toBe('נשות עסקים');
  expect(Ivrita.genderize('אנשי/ות עסקים', Ivrita.MALE)).toBe('אנשי עסקים');

  expect(Ivrita.genderize('א.נשים', Ivrita.FEMALE)).toBe('נשים');
  expect(Ivrita.genderize('א.נשים', Ivrita.MALE)).toBe('אנשים');

  expect(Ivrita.genderize('איש/אשת', Ivrita.FEMALE)).toBe('אשת');
  expect(Ivrita.genderize('איש/אשת', Ivrita.MALE)).toBe('איש');
  expect(Ivrita.genderize('אשת/איש', Ivrita.FEMALE)).toBe('אשת');
  expect(Ivrita.genderize('אשת/איש', Ivrita.MALE)).toBe('איש');

  // Female
  expect(Ivrita.genderize('רוצ/י', Ivrita.FEMALE)).toBe('רוצי');
  expect(Ivrita.genderize('רוצ/י', Ivrita.MALE)).toBe('רוץ');

  expect(Ivrita.genderize('קומ/י', Ivrita.FEMALE)).toBe('קומי');
  expect(Ivrita.genderize('קומ/י', Ivrita.MALE)).toBe('קום');

  expect(Ivrita.genderize('עופ/י', Ivrita.FEMALE)).toBe('עופי');
  expect(Ivrita.genderize('עופ/י', Ivrita.MALE)).toBe('עוף');

  expect(Ivrita.genderize('שים/י', Ivrita.FEMALE)).toBe('שימי');
  expect(Ivrita.genderize('שים/י', Ivrita.MALE)).toBe('שים');

  expect(Ivrita.genderize('אח/ות', Ivrita.FEMALE)).toBe('אחות');
  expect(Ivrita.genderize('אח/ות', Ivrita.MALE)).toBe('אח');

  expect(Ivrita.genderize('לו/לה, לה/לו', Ivrita.FEMALE)).toBe('לה, לה');
  expect(Ivrita.genderize('לו/לה, לה/לו', Ivrita.MALE)).toBe('לו, לו');

  expect(Ivrita.genderize('בן/בת, בת/בן', Ivrita.FEMALE)).toBe('בת, בת');
  expect(Ivrita.genderize('בן/בת, בת/בן', Ivrita.MALE)).toBe('בן, בן');

  expect(Ivrita.genderize('הוא/היא, היא/הוא', Ivrita.FEMALE)).toBe('היא, היא');
  expect(Ivrita.genderize('הוא/היא, היא/הוא', Ivrita.MALE)).toBe('הוא, הוא');

  expect(Ivrita.genderize('אנשי/ות', Ivrita.FEMALE)).toBe('נשות');
  expect(Ivrita.genderize('אנשי/ות', Ivrita.MALE)).toBe('אנשי');

  expect(Ivrita.genderize('מישהו/י', Ivrita.FEMALE)).toBe('מישהי');
  expect(Ivrita.genderize('מישהו/י', Ivrita.MALE)).toBe('מישהו');

  expect(Ivrita.genderize('אחד/ת, אחד/אחת, אחת/אחד', Ivrita.FEMALE)).toBe('אחת, אחת, אחת');
  expect(Ivrita.genderize('אחד/ת, אחד/אחת, אחת/אחד', Ivrita.MALE)).toBe('אחד, אחד, אחד');
});
