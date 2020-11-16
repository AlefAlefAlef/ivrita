import { genderize, NEUTRAL } from '../../src/ivrita';

test('No multiple slashes on neutral', () => {
  expect(genderize('הקלד/י', NEUTRAL)).toBe('הקלד/י'); // unchanged
});
