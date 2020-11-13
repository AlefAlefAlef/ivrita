import Ivrita from '../../src/ivrita';

test('No multiple slashes on neutral', () => {
  expect(Ivrita.genderize('הקלד/י', Ivrita.NEUTRAL)).toBe('הקלד/י'); // unchanged
});
