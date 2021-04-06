import { genderize, Mode } from '../../src/ivrita';

test('Two parameters', () => {
  expect(genderize('[בן|בת]', Mode.FEMALE)).toBe('בת');
  expect(genderize('[בן|בת]', Mode.MALE)).toBe('בן');

  expect(genderize('[נאה|יפה]', Mode.FEMALE)).toBe('יפה');
  expect(genderize('[נאה|יפה]', Mode.MALE)).toBe('נאה');

  expect(genderize('[חתיך|מהממת]', Mode.FEMALE)).toBe('מהממת');
  expect(genderize('[חתיך|מהממת]', Mode.MALE)).toBe('חתיך');
});

test('Two parameters neutral', () => {
  expect(genderize('[בן|בת]', Mode.NEUTRAL)).toBe('בן/בת');
});

test('Three parameters', () => {
  expect(genderize('[בן|בת|ילד]', Mode.FEMALE)).toBe('בת');
  expect(genderize('[בן|בת|ילד]', Mode.MALE)).toBe('בן');
  expect(genderize('[בן|בת|ילד]', Mode.NEUTRAL)).toBe('ילד');
});

test('Partial options', () => {
  expect(genderize('תוכל[|י|ו]', Mode.FEMALE)).toBe('תוכלי');
  expect(genderize('תוכל[|י|ו]', Mode.MALE)).toBe('תוכל');
  expect(genderize('תוכל[|י|ו]', Mode.NEUTRAL)).toBe('תוכלו');
});
