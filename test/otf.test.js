import Ivrita from '../src/element';
import { NEUTRAL, ORIGINAL } from '../src/ivrita';

test('setFontFeatureSettings on clean element', () => {
  const el = document.createElement('p');

  expect(el.style.fontFeatureSettings).toEqual('');

  const ivrita = new Ivrita(el);

  ivrita.setFontFeatureSettings(true);

  expect(el.style.fontFeatureSettings).toEqual('"titl"');

  ivrita.setFontFeatureSettings(false);

  expect(el.style.fontFeatureSettings).toEqual('normal');
});

test('Implicit fontFeatureSettings via setMode on clean element', () => {
  const el = document.createElement('p');

  expect(el.style.fontFeatureSettings).toEqual('');

  const ivrita = new Ivrita(el);

  expect(el.style.fontFeatureSettings).toEqual('');

  ivrita.setMode(NEUTRAL);

  expect(el.style.fontFeatureSettings).toEqual('"titl"');

  ivrita.setMode(ORIGINAL);

  expect(el.style.fontFeatureSettings).toEqual('normal');
});

test('OpenType setting on element with pre-existing settings', () => {
  const el = document.createElement('p');

  el.style.fontFeatureSettings = '"ss01" 1, "tnum"';

  const ivrita = new Ivrita(el);

  expect(el.style.fontFeatureSettings).toEqual('"ss01" 1, "tnum"');

  ivrita.setFontFeatureSettings(true);

  expect(el.style.fontFeatureSettings).toEqual('"ss01" 1, "tnum", "titl"');

  ivrita.setFontFeatureSettings(false);

  expect(el.style.fontFeatureSettings).toEqual('"ss01" 1, "tnum"');
});
