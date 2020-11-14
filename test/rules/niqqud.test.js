import { genderize, FEMALE } from '../../src/ivrita';

test('Skip niqqud words', () => {
  expect(genderize('מעצּבֻּ/תֻ', FEMALE)).toBe('מעצּבֻּ/תֻ');
});
