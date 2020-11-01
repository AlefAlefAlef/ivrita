import Ivrita from '../../src/ivrita';

test('Two parameters', () => {
  expect(Ivrita.genderize('[בן|בת]', Ivrita.FEMALE)).toBe('בת');
  expect(Ivrita.genderize('[בן|בת]', Ivrita.MALE)).toBe('בן');

  expect(Ivrita.genderize('[נאה|יפה]', Ivrita.FEMALE)).toBe('יפה');
  expect(Ivrita.genderize('[נאה|יפה]', Ivrita.MALE)).toBe('נאה');

  expect(Ivrita.genderize('[חתיך|מהממת]', Ivrita.FEMALE)).toBe('מהממת');
  expect(Ivrita.genderize('[חתיך|מהממת]', Ivrita.MALE)).toBe('חתיך');
});

test('Two parameters neutral', () => {
  expect(Ivrita.genderize('[בן|בת]', Ivrita.NEUTRAL)).toBe('בן/בת');
});

test('Three parameters', () => {
  expect(Ivrita.genderize('[בן|בת|ילד]', Ivrita.FEMALE)).toBe('בת');
  expect(Ivrita.genderize('[בן|בת|ילד]', Ivrita.MALE)).toBe('בן');
  expect(Ivrita.genderize('[בן|בת|ילד]', Ivrita.NEUTRAL)).toBe('ילד');
});
