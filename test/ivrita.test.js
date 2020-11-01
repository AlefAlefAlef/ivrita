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
