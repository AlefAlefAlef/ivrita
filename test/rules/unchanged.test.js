import { genderize, FEMALE, MALE } from '../../src/ivrita';

test('Multiple options slash', () => {
  expect(genderize('ו/או', FEMALE)).toBe('ו/או');
  expect(genderize('ו/או', MALE)).toBe('ו/או');

  expect(genderize('או/או', FEMALE)).toBe('או/או');
  expect(genderize('או/או', MALE)).toBe('או/או');
});

test('Multiple words slash', () => {
  expect(genderize('אבן/בתיאבון', FEMALE)).toBe('אבן/בתיאבון');
  expect(genderize('אבן/בתיאבון', MALE)).toBe('אבן/בתיאבון');

  expect(genderize('יספרו/נהרו', FEMALE)).toBe('יספרו/נהרו'); // unchanged
  expect(genderize('יספרו/נהרו', MALE)).toBe('יספרו/נהרו'); // unchanged

  expect(genderize('הלו/להבה', FEMALE)).toBe('הלו/להבה'); // unchanged
  expect(genderize('הלו/להבה', MALE)).toBe('הלו/להבה'); // unchanged

  expect(genderize('בכה/תהום/שלום', FEMALE)).toBe('בכה/תהום/שלום'); // unchanged
  expect(genderize('בכה/תהום/שלום', MALE)).toBe('בכה/תהום/שלום'); // unchanged

  expect(genderize('יזם/יתד', FEMALE)).toBe('יזם/יתד'); // unchanged
  expect(genderize('יזם/יתד', MALE)).toBe('יזם/יתד'); // unchanged

  expect(genderize('יזמים/יותר', FEMALE)).toBe('יזמים/יותר'); // unchanged
  expect(genderize('יזמים/יותר', MALE)).toBe('יזמים/יותר'); // unchanged

  expect(genderize('ים/הר', FEMALE)).toBe('ים/הר'); // unchanged
  expect(genderize('ים/הר', MALE)).toBe('ים/הר'); // unchanged
});

test('Singular/Plural slash', () => {
  expect(genderize('תפקיד/ים', FEMALE)).toBe('תפקיד/ים'); // unchanged
  expect(genderize('תפקיד/ים', MALE)).toBe('תפקיד/ים'); // unchanged
});

test('Final letters and abbreviations', () => {
  expect(genderize('דרושים׳', FEMALE)).toBe('דרושים׳'); // unchanged
  expect(genderize('דרושים׳', MALE)).toBe('דרושים׳'); // unchanged

  expect(genderize('מע”מ', FEMALE)).toBe('מע”מ'); // unchanged
  expect(genderize('מע”מ', MALE)).toBe('מע”מ'); // unchanged

  expect(genderize('פ', FEMALE)).toBe('פ'); // unchanged
  expect(genderize('פ', MALE)).toBe('פ'); // unchanged

  expect(genderize('דסקטופ', FEMALE)).toBe('דסקטופ'); // unchanged
  expect(genderize('דסקטופ', MALE)).toBe('דסקטופ'); // unchanged
});
