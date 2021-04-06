import { genderize, Mode } from '../../src/ivrita';

test('Whole words', () => {
  expect(genderize('אנשי/ות עסקים', Mode.FEMALE)).toBe('נשות עסקים');
  expect(genderize('אנשי/ות עסקים', Mode.MALE)).toBe('אנשי עסקים');

  expect(genderize('א.נשים', Mode.FEMALE)).toBe('נשים');
  expect(genderize('א.נשים', Mode.MALE)).toBe('אנשים');

  expect(genderize('א.נשי', Mode.FEMALE)).toBe('נשות');
  expect(genderize('א.נשי', Mode.MALE)).toBe('אנשי');

  expect(genderize('איש/ת', Mode.FEMALE)).toBe('אשת');
  expect(genderize('איש/ת', Mode.MALE)).toBe('איש');
  expect(genderize('איש/אשת', Mode.FEMALE)).toBe('אשת');
  expect(genderize('איש/אשת', Mode.MALE)).toBe('איש');
  expect(genderize('אשת/איש', Mode.FEMALE)).toBe('אשת');
  expect(genderize('אשת/איש', Mode.MALE)).toBe('איש');
  expect(genderize('גבר/אישה', Mode.FEMALE)).toBe('אישה');
  expect(genderize('גבר/אישה', Mode.MALE)).toBe('גבר');
  expect(genderize('איש/אישה', Mode.MALE)).toBe('איש');

  expect(genderize('אח/ות', Mode.FEMALE)).toBe('אחות');
  expect(genderize('אח/ות', Mode.MALE)).toBe('אח');

  expect(genderize('אחי/ותי', Mode.FEMALE)).toBe('אחותי');
  expect(genderize('אחי/ותי', Mode.MALE)).toBe('אחי');

  expect(genderize('לו/לה, לה/לו', Mode.FEMALE)).toBe('לה, לה');
  expect(genderize('לו/לה, לה/לו', Mode.MALE)).toBe('לו, לו');

  expect(genderize('בן/בת, בת/בן', Mode.FEMALE)).toBe('בת, בת');
  expect(genderize('בן/בת, בת/בן', Mode.MALE)).toBe('בן, בן');

  expect(genderize('הוא/היא, היא/הוא', Mode.FEMALE)).toBe('היא, היא');
  expect(genderize('הוא/היא, היא/הוא', Mode.MALE)).toBe('הוא, הוא');

  expect(genderize('אנשי/ות', Mode.FEMALE)).toBe('נשות');
  expect(genderize('אנשי/ות', Mode.MALE)).toBe('אנשי');
  expect(genderize('א.נשות', Mode.FEMALE)).toBe('נשות');
  expect(genderize('א.נשות', Mode.MALE)).toBe('אנשי');

  expect(genderize('מישהו/י', Mode.FEMALE)).toBe('מישהי');
  expect(genderize('מישהו/י', Mode.MALE)).toBe('מישהו');

  expect(genderize('אחד/ת, אחד/אחת, אחת/אחד', Mode.FEMALE)).toBe('אחת, אחת, אחת');
  expect(genderize('אחד/ת, אחד/אחת, אחת/אחד', Mode.MALE)).toBe('אחד, אחד, אחד');

  expect(genderize('יקירי/תי', Mode.FEMALE)).toBe('יקירתי');
  expect(genderize('יקירי/תי', Mode.MALE)).toBe('יקירי');

  expect(genderize('זה/זאת', Mode.FEMALE)).toBe('זאת');
  expect(genderize('זה/זאת', Mode.MALE)).toBe('זה');
  expect(genderize('זה/ו', Mode.FEMALE)).toBe('זו');
  expect(genderize('זה/ו', Mode.MALE)).toBe('זה');
  expect(genderize('זו/ה', Mode.FEMALE)).toBe('זו');
  expect(genderize('זו/ה', Mode.MALE)).toBe('זה');

  expect(genderize('נשוי/אה', Mode.FEMALE)).toBe('נשואה');
  expect(genderize('נשוי/אה', Mode.MALE)).toBe('נשוי');
  expect(genderize('נשוי/ה', Mode.FEMALE)).toBe('נשואה');
  expect(genderize('נשוי/ה', Mode.MALE)).toBe('נשוי');
});
