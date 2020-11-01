import Ivrita from '../../src/ivrita';

test('Multiple options slash', () => {
  expect(Ivrita.genderize('ו/או', Ivrita.FEMALE)).toBe('ו/או');
  expect(Ivrita.genderize('ו/או', Ivrita.MALE)).toBe('ו/או');

  expect(Ivrita.genderize('או/או', Ivrita.FEMALE)).toBe('או/או');
  expect(Ivrita.genderize('או/או', Ivrita.MALE)).toBe('או/או');
});

test('Multiple words slash', () => {
  expect(Ivrita.genderize('אבן/בתיאבון', Ivrita.FEMALE)).toBe('אבן/בתיאבון');
  expect(Ivrita.genderize('אבן/בתיאבון', Ivrita.MALE)).toBe('אבן/בתיאבון');

  expect(Ivrita.genderize('גבר/אישה', Ivrita.FEMALE)).toBe('גבר/אישה');
  expect(Ivrita.genderize('גבר/אישה', Ivrita.MALE)).toBe('גבר/אישה');

  expect(Ivrita.genderize('יספרו/נהרו', Ivrita.FEMALE)).toBe('יספרו/נהרו'); // unchanged
  expect(Ivrita.genderize('יספרו/נהרו', Ivrita.MALE)).toBe('יספרו/נהרו'); // unchanged

  expect(Ivrita.genderize('הלו/להבה', Ivrita.FEMALE)).toBe('הלו/להבה'); // unchanged
  expect(Ivrita.genderize('הלו/להבה', Ivrita.MALE)).toBe('הלו/להבה'); // unchanged

  expect(Ivrita.genderize('בכה/תהום/שלום', Ivrita.FEMALE)).toBe('בכה/תהום/שלום'); // unchanged
  expect(Ivrita.genderize('בכה/תהום/שלום', Ivrita.MALE)).toBe('בכה/תהום/שלום'); // unchanged

  expect(Ivrita.genderize('יזם/יתד', Ivrita.FEMALE)).toBe('יזם/יתד'); // unchanged
  expect(Ivrita.genderize('יזם/יתד', Ivrita.MALE)).toBe('יזם/יתד'); // unchanged

  expect(Ivrita.genderize('יזמים/יותר', Ivrita.FEMALE)).toBe('יזמים/יותר'); // unchanged
  expect(Ivrita.genderize('יזמים/יותר', Ivrita.MALE)).toBe('יזמים/יותר'); // unchanged

  expect(Ivrita.genderize('ים/הר', Ivrita.FEMALE)).toBe('ים/הר'); // unchanged
  expect(Ivrita.genderize('ים/הר', Ivrita.MALE)).toBe('ים/הר'); // unchanged
});

test('Singular/Plural slash', () => {
  expect(Ivrita.genderize('תפקיד/ים', Ivrita.FEMALE)).toBe('תפקיד/ים'); // unchanged
  expect(Ivrita.genderize('תפקיד/ים', Ivrita.MALE)).toBe('תפקיד/ים'); // unchanged
});

test('Final letters and abbreviations', () => {
  expect(Ivrita.genderize('דרושים׳', Ivrita.FEMALE)).toBe('דרושים׳'); // unchanged
  expect(Ivrita.genderize('דרושים׳', Ivrita.MALE)).toBe('דרושים׳'); // unchanged

  expect(Ivrita.genderize('מע”מ', Ivrita.FEMALE)).toBe('מע”מ'); // unchanged
  expect(Ivrita.genderize('מע”מ', Ivrita.MALE)).toBe('מע”מ'); // unchanged

  expect(Ivrita.genderize('פ', Ivrita.FEMALE)).toBe('פ'); // unchanged
  expect(Ivrita.genderize('פ', Ivrita.MALE)).toBe('פ'); // unchanged
});
