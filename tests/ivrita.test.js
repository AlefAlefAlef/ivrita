import Ivrita from '../src/ivrita';

const template = `
  <div id="content">
    <p>מעצבים/ות רבים/ות מרגישים/ות <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.</p>
  </div>
  `;

test('DOM plug-in', () => {
  document.body.innerHTML = template;
  const paragraph = document.querySelector('#content p');

  const ivrita = new Ivrita();

  // Female
  ivrita.setMode(Ivrita.FEMALE);
  expect(paragraph.innerHTML).toBe('מעצבות רבות מרגישות <i>תסכול</i>, כאשר <b>פונות</b> אליהן שלא בשפתן.');

  // Male
  ivrita.setMode(Ivrita.MALE);
  expect(paragraph.innerHTML).toBe('מעצבים רבים מרגישים <i>תסכול</i>, כאשר <b>פונים</b> אליהם שלא בשפתם.');

  // Back to original
  ivrita.setMode(Ivrita.NEUTRAL);
  expect(paragraph.innerHTML).toBe('מעצבים/ות רבים/ות מרגישים/ות <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.');
});

test('Good element passed to constructor', () => {
  document.body.innerHTML = template;
  const ivrita = new Ivrita(document.querySelector('#content'));
  const bold = document.querySelector('#content p b');

  ivrita.setMode(Ivrita.MALE);
  expect(bold.innerHTML).toBe('פונים');
});

test('Bad element passed to constructor', () => {
  document.body.innerHTML = template;
  expect(() => {
    // eslint-disable-next-line no-new
    new Ivrita('#content'); // Should be DOMElement, not string
  }).toThrow(Error);
});

test('Word beginnings', () => {
  expect(Ivrita.genderize('א.נשים', Ivrita.FEMALE)).toBe('נשים');
  expect(Ivrita.genderize('אנשי/ות עסקים', Ivrita.FEMALE)).toBe('נשות עסקים');
});

test('Skip niqqud words', () => {
  expect(Ivrita.genderize('מעצּבֻּ/תֻ', Ivrita.FEMALE)).toBe('מעצּבֻּ/תֻ');
});

test('Whole words', () => {
  // Female
  expect(Ivrita.genderize('רוצ/י', Ivrita.FEMALE)).toBe('רוצי');
  expect(Ivrita.genderize('קומ/י', Ivrita.FEMALE)).toBe('קומי');
  expect(Ivrita.genderize('עופ/י', Ivrita.FEMALE)).toBe('עופי');
  expect(Ivrita.genderize('שים/י', Ivrita.FEMALE)).toBe('שימי');
  expect(Ivrita.genderize('אח/ות', Ivrita.FEMALE)).toBe('אחות');
  expect(Ivrita.genderize('לו/לה, לה/לו', Ivrita.FEMALE)).toBe('לה, לה');
  expect(Ivrita.genderize('הוא/היא, היא/הוא', Ivrita.FEMALE)).toBe('היא, היא');
  expect(Ivrita.genderize('אנשי/ות', Ivrita.FEMALE)).toBe('נשות');
  expect(Ivrita.genderize('מישהו/י', Ivrita.FEMALE)).toBe('מישהי');
  expect(Ivrita.genderize('אחד/ת, אחד/אחת', Ivrita.FEMALE)).toBe('אחת, אחת');

  // Male
  expect(Ivrita.genderize('רוצ/י', Ivrita.MALE)).toBe('רוץ');
  expect(Ivrita.genderize('קומ/י', Ivrita.MALE)).toBe('קום');
  expect(Ivrita.genderize('עופ/י', Ivrita.MALE)).toBe('עוף');
  expect(Ivrita.genderize('שים/י', Ivrita.MALE)).toBe('שים');
  expect(Ivrita.genderize('אח/ות', Ivrita.MALE)).toBe('אח');
  expect(Ivrita.genderize('לו/לה, לה/לו', Ivrita.MALE)).toBe('לו, לו');
  expect(Ivrita.genderize('הוא/היא, היא/הוא', Ivrita.MALE)).toBe('הוא, הוא');
  expect(Ivrita.genderize('אנשי/ות', Ivrita.MALE)).toBe('אנשי');
  expect(Ivrita.genderize('מישהו/י', Ivrita.MALE)).toBe('מישהו');
  expect(Ivrita.genderize('אחד/ת, אחד/אחת', Ivrita.MALE)).toBe('אחד, אחד');
});
