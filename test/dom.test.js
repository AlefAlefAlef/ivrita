import Ivrita from '../src/ivrita';

const template = `
  <div id="content">
    <p>[מעצבים|מתכנתות|הייטקיסטים] רבים/ות מרגישים/ות <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.</p>
  </div>
  `;

test('DOM plug-in', () => {
  document.body.innerHTML = template;
  const paragraph = document.querySelector('#content p');

  const ivrita = new Ivrita();

  // Female
  ivrita.setMode(Ivrita.FEMALE);
  expect(paragraph.innerHTML).toBe('מתכנתות רבות מרגישות <i>תסכול</i>, כאשר <b>פונות</b> אליהן שלא בשפתן.');

  // Male
  ivrita.setMode(Ivrita.MALE);
  expect(paragraph.innerHTML).toBe('מעצבים רבים מרגישים <i>תסכול</i>, כאשר <b>פונים</b> אליהם שלא בשפתם.');

  // Neutral
  ivrita.setMode(Ivrita.NEUTRAL);
  expect(paragraph.innerHTML).toBe('הייטקיסטים רבים/ות מרגישים/ות <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.');

  // Back to original
  ivrita.setMode(Ivrita.ORIGINAL);
  expect(paragraph.innerHTML).toBe('[מעצבים|מתכנתות|הייטקיסטים] רבים/ות מרגישים/ות <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.');
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
