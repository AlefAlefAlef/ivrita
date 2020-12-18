import Ivrita from '../src/element';

import { FEMALE } from '../src/ivrita';

const template = `
  <div id="content">
    <form>
      <h1>הרשמ/י עכשיו!</h1>
      <input type="text" id="name" placeholder="הכנס/י את שמך כאן" />
      <input type="text" id="city" placeholder="הכנס/י את העיר שבה את/ה גר/ה כאן" />
      <a href="#" title="לחץ/י כאן כדי להתנתק" id="logout">התנתק/י</a>
      <button>נקה/י את הטופס</button>
      <input type="submit" value="שלח/י" />
      <input type="button" value="בטל/י" />
    </form>
  </div>
  `;

test('Input placeholder', () => {
  document.body.innerHTML = template;
  const name = document.getElementById('name');
  const city = document.getElementById('city');
  const link = document.querySelector('a');
  const button = document.querySelector('button');
  const inputSubmit = document.querySelector('input[type=submit]');
  const inputButton = document.querySelector('input[type=button]');

  const ivrita = new Ivrita(document.body);
  ivrita.setMode(FEMALE);

  expect(name.getAttribute('placeholder')).toBe('הכניסי את שמך כאן');
  expect(city.getAttribute('placeholder')).toBe('הכניסי את העיר שבה את גרה כאן');
  expect(link.innerHTML).toBe('התנתקי');
  expect(link.getAttribute('title')).toBe('לחצי כאן כדי להתנתק');
  expect(button.innerHTML).toBe('נקי את הטופס');
  expect(inputSubmit.value).toBe('שלחי');
  expect(inputButton.value).toBe('בטלי');
});
