import Ivrita from '../../src/ivrita';

test('Skip niqqud words', () => {
  expect(Ivrita.genderize('מעצּבֻּ/תֻ', Ivrita.FEMALE)).toBe('מעצּבֻּ/תֻ');
});
