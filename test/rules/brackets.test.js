import {
  genderize, FEMALE, MALE, NEUTRAL,
} from '../../src/ivrita';

test('Two parameters', () => {
  expect(genderize('[בן|בת]', FEMALE)).toBe('בת');
  expect(genderize('[בן|בת]', MALE)).toBe('בן');

  expect(genderize('[נאה|יפה]', FEMALE)).toBe('יפה');
  expect(genderize('[נאה|יפה]', MALE)).toBe('נאה');

  expect(genderize('[חתיך|מהממת]', FEMALE)).toBe('מהממת');
  expect(genderize('[חתיך|מהממת]', MALE)).toBe('חתיך');
});

test('Two parameters neutral', () => {
  expect(genderize('[בן|בת]', NEUTRAL)).toBe('בן/בת');
});

test('Three parameters', () => {
  expect(genderize('[בן|בת|ילד]', FEMALE)).toBe('בת');
  expect(genderize('[בן|בת|ילד]', MALE)).toBe('בן');
  expect(genderize('[בן|בת|ילד]', NEUTRAL)).toBe('ילד');
});

test('Partial options', () => {
  expect(genderize('תוכל[|י|ו]', FEMALE)).toBe('תוכלי');
  expect(genderize('תוכל[|י|ו]', MALE)).toBe('תוכל');
  expect(genderize('תוכל[|י|ו]', NEUTRAL)).toBe('תוכלו');
});
