import defaultSwitch, { initDefaultSwitch } from '../../src/ui/index';
import { FEMALE } from '../../src/ivrita';

// Jest can't read SCSS, and we don't need it anyway
jest.mock('../../src/ui/style.scss', () => ({}));

beforeAll(() => {
  if (!document.getElementsByClassName('ivrita-switch').length) {
    initDefaultSwitch();
  }
  expect(document.getElementsByClassName('ivrita-switch').length).toEqual(1);
});

test('All buttons in default switch contain aria-labels', () => {
  expect(Array.from(document.getElementsByClassName('ivrita-button')).map((el) => el.getAttribute('aria-label'))).toStrictEqual([
    'שינוי לשון הפנייה של האתר לאיש',
    'שינוי לשון הפנייה של האתר לאישה',
    'שינוי לשון הפנייה של האתר לניטרלי',
  ]);
});

test('The selected button has an aria-selected attribute', () => {
  expect(Array.from(document.getElementsByClassName('ivrita-button')).filter((el) => el.getAttribute('aria-selected') == 'true').length).toEqual(1);

  defaultSwitch.setMode(FEMALE);

  expect(Array.from(document.getElementsByClassName('ivrita-button')).filter((el) => el.getAttribute('aria-selected') == 'true').length).toEqual(1);
  expect(document.querySelector('.ivrita-mode-changer[data-ivrita-mode="2"]').getAttribute('aria-selected')).toEqual('true');
});

test('The list has the right roles and aria-activedescendant', () => {
  defaultSwitch.setMode(FEMALE);

  const defaultSwitchElement = document.getElementById('ivrita-default-switch');

  expect(defaultSwitchElement.getAttribute('role')).toEqual('listbox');
  expect(defaultSwitchElement.getAttribute('aria-activedescendant')).toEqual(`ivrita-default-switch-button-${FEMALE}`);

  expect(
    Array.from(defaultSwitchElement.getElementsByClassName('ivrita-mode-changer'))
      .every((e) => e.getAttribute('role') === 'option'),
  ).toEqual(true);
});
