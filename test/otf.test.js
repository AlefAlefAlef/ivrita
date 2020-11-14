import Ivrita from '../src/ivrita';

test('OpenType setting on clean element', () => {
  const el = document.createElement('p');

  expect(el.style.fontFeatureSettings).toEqual('');

  const ivrita = new Ivrita(el);

  expect(el.style.fontFeatureSettings).toEqual('"titl"');

  ivrita.setFontFeatureSettings(false);

  expect(el.style.fontFeatureSettings).toEqual('');
});

test('OpenType setting on element with pre-existing settings', () => {
  const el = document.createElement('p');

  el.style.fontFeatureSettings = '"ss01" 1, "tnum"';

  expect(el.style.fontFeatureSettings).toEqual('"ss01" 1, "tnum"');

  const ivrita = new Ivrita(el);

  expect(el.style.fontFeatureSettings).toEqual('"ss01" 1, "tnum", "titl"');

  ivrita.setFontFeatureSettings(false);

  expect(el.style.fontFeatureSettings).toEqual('"ss01" 1, "tnum"');
});