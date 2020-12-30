import Ivrita from '../src/element';
import TextObject from '../src/textObject';

import {
  FEMALE, MALE, NEUTRAL, ORIGINAL,
} from '../src/ivrita';

const template = `
  <div id="content">
    <p>[מעצבים|מתכנתות|הייטקיסטים] רבים/ות <u>מרגישים/ות</u> <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.</p>
  </div>
  `;

test('DOM plug-in', () => {
  document.body.innerHTML = template;
  const paragraph = document.querySelector('#content p');

  const ivrita = new Ivrita();

  // Female
  ivrita.setMode(FEMALE);
  expect(paragraph.innerHTML).toBe('מתכנתות רבות <u>מרגישות</u> <i>תסכול</i>, כאשר <b>פונות</b> אליהן שלא בשפתן.');

  // Male
  ivrita.setMode(MALE);
  expect(paragraph.innerHTML).toBe('מעצבים רבים <u>מרגישים</u> <i>תסכול</i>, כאשר <b>פונים</b> אליהם שלא בשפתם.');

  // Neutral
  ivrita.setMode(NEUTRAL);
  expect(paragraph.innerHTML).toBe('הייטקיסטים רבים/ות <u>מרגישים/ות</u> <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.');

  // Back to original
  ivrita.setMode(ORIGINAL);
  expect(paragraph.innerHTML).toBe('[מעצבים|מתכנתות|הייטקיסטים] רבים/ות <u>מרגישים/ות</u> <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.');

  // Back to male
  ivrita.setMode(MALE);
  expect(paragraph.innerHTML).toBe('מעצבים רבים <u>מרגישים</u> <i>תסכול</i>, כאשר <b>פונים</b> אליהם שלא בשפתם.');

  // Destroy
  ivrita.destroy();
  expect(paragraph.innerHTML).toBe('[מעצבים|מתכנתות|הייטקיסטים] רבים/ות <u>מרגישים/ות</u> <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.');

  expect(ivrita.nodes.size).toEqual(0);
});

test('Default mode is working', () => {
  document.body.innerHTML = template;
  const paragraph = document.querySelector('#content p');

  new Ivrita();
  expect(paragraph.innerHTML).toBe('הייטקיסטים רבים/ות <u>מרגישים/ות</u> <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.');
});

test('Single element passed to constructor', () => {
  document.body.innerHTML = template;
  const ivrita = new Ivrita(document.querySelector('#content'));
  const bold = document.querySelector('#content p b');

  ivrita.setMode(MALE);
  expect(bold.innerHTML).toBe('פונים');
});

test('Multiple elements passed to constructor', () => {
  document.body.innerHTML = template;
  const ivrita = new Ivrita(document.querySelectorAll('b, u, i'));
  const bold = document.querySelector('#content p b');
  const underlined = document.querySelector('#content p u');
  const italic = document.querySelector('#content p i');

  ivrita.setMode(MALE);
  expect(bold.innerHTML).toBe('פונים');
  expect(underlined.innerHTML).toBe('מרגישים');
  expect(italic.innerHTML).toBe('תסכול');
  expect(document.body.querySelector('#content p').textContent).toBe('[מעצבים|מתכנתות|הייטקיסטים] רבים/ות מרגישים תסכול, כאשר פונים אליהם/ן שלא בשפתם/ן.');
});

test('Array of elements passed to constructor', () => {
  document.body.innerHTML = template;
  const bold = document.querySelector('#content p b');
  const underlined = document.querySelector('#content p u');
  const italic = document.querySelector('#content p i');
  const ivrita = new Ivrita([bold, underlined, italic]);

  ivrita.setMode(MALE);
  expect(bold.innerHTML).toBe('פונים');
  expect(underlined.innerHTML).toBe('מרגישים');
  expect(italic.innerHTML).toBe('תסכול');
});

test('<title> tag is changed', () => {
  document.documentElement.innerHTML = `
  <html>
    <head>
      <title>צור/י קשר</title>
    </head>
    <body>
      ${template}
    </body>
  </html>`;

  const title = document.documentElement.querySelector('title');
  const ivrita = new Ivrita();

  ivrita.setMode(FEMALE);
  expect(title.innerHTML).toBe('צרי קשר');
});

test('Ovserver catches new elements added', () => {
  document.body.innerHTML = template;
  const i = new Ivrita(document.body);

  document.body.innerHTML += '<b>את/ה נהדר/ת</b>';
  i.setMode(MALE);

  // Using setTimeout to push the test to the message queue,
  // which will be executed after the MutationObserver finishes.
  setTimeout(() => {
    expect(document.body.textContent).toBe('ddd');
  }, 0);
});

test('jQuery element passed to constructor', () => {
  document.body.innerHTML = template;
  const ivrita = new Ivrita(jQuery('#content'));
  const bold = document.querySelector('#content p b');

  ivrita.setMode(MALE);
  expect(bold.innerHTML).toBe('פונים');
});

test('jQuery function', () => {
  document.body.innerHTML = template;

  const ivrita = jQuery('#content').ivrita();
  const bold = document.querySelector('#content p b');

  ivrita.setMode(MALE);
  expect(bold.innerHTML).toBe('פונים');
});

test('jQuery function with gender', () => {
  document.body.innerHTML = template;

  jQuery('#content p b').ivrita(MALE);
  const p = document.querySelector('#content p');

  expect(p.textContent).toBe('[מעצבים|מתכנתות|הייטקיסטים] רבים/ות מרגישים/ות תסכול, כאשר פונים אליהם/ן שלא בשפתם/ן.');
});

test('Bad element passed to constructor', () => {
  document.body.innerHTML = template;
  expect(() => {
    new Ivrita('#content'); // Should be DOMElement, not string
  }).toThrow(Error);
});

test('Node singletons', () => {
  const textNodeRegister = jest.spyOn(TextObject.instances, 'set');

  document.body.innerHTML = template;
  const ivrita = new Ivrita(document.querySelector('#content'));
  ivrita.setMode(FEMALE);

  const bold = document.querySelector('#content p b');
  const ivrita2 = new Ivrita(bold);
  ivrita2.setMode(MALE);
  expect(document.getElementById('content').textContent.trim()).toBe('מתכנתות רבות מרגישות תסכול, כאשר פונים אליהן שלא בשפתן.');
  expect(ivrita.nodes.size).toEqual(4);
  expect(ivrita2.nodes.size).toEqual(1);
  expect(textNodeRegister).toHaveBeenCalledTimes(4);
});

test('Events', () => {
  const listener = jest.fn();

  document.body.innerHTML = template;
  const ivrita = new Ivrita(document.querySelector('#content'));

  document.addEventListener(Ivrita.EVENT_MODE_CHANGED, listener);

  ivrita.setMode(MALE);
  expect(listener.mock.calls.length).toBe(1);
  expect(listener.mock.calls[0][0].detail.mode).toBe(MALE);

  ivrita.setMode(FEMALE);
  expect(listener.mock.calls.length).toBe(2);
  expect(listener.mock.calls[1][0].detail.mode).toBe(FEMALE);
});

test('data-ivrita-disable', () => {
  document.body.innerHTML = '<p>[מעצבים|מתכנתות|הייטקיסטים] רבים/ות <u data-ivrita-disable="true">מרגישים/ות</u> <i>תסכול</i>, כאשר <b>פונים/ות</b> אליהם/ן שלא בשפתם/ן.</p>';
  const paragraph = document.querySelector('p');

  const ivrita = new Ivrita();

  ivrita.setMode(FEMALE);
  expect(paragraph.innerHTML).toBe('מתכנתות רבות <u data-ivrita-disable="true">מרגישים/ות</u> <i>תסכול</i>, כאשר <b>פונות</b> אליהן שלא בשפתן.');
});

test('No breaking space is preserved', () => {
  document.body.innerHTML = '<p>מתכנתים/ות&nbsp;רבים/ות</p>';

  new Ivrita(document.body.childNodes[0], FEMALE);

  expect(document.body.innerHTML).toBe('<p>מתכנתות&nbsp;רבות</p>');
});
