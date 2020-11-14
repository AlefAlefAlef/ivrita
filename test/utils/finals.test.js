import {
  finnables, toFin, toNotFin,
} from '../../src/utils/finals';

test('Finnables helper', () => {
  expect(finnables).toContain('ם');
  expect(finnables).toContain('מ');
  expect(finnables).toContain('ן');
  expect(finnables).toContain('ץ');
  expect(finnables).toContain('כ');

  expect(finnables).not.toContain('ד');
  expect(finnables).not.toContain('5');
  expect(finnables).not.toContain('j');
});

test('toFin helper', () => {
  expect(toFin('מ')).toEqual('ם');
  expect(toFin('נ')).toEqual('ן');
  expect(toFin('צ')).toEqual('ץ');
  expect(toFin('כ')).toEqual('ך');

  expect(toFin('ץ')).toEqual('ץ');
  expect(toFin('ם')).toEqual('ם');

  expect(toFin('י')).toEqual('י');
  expect(toFin('8')).toEqual('8');
  expect(toFin('h')).toEqual('h');
});

test('toNotFin helper', () => {
  expect(toNotFin('ם')).toEqual('מ');
  expect(toNotFin('ן')).toEqual('נ');
  expect(toNotFin('ץ')).toEqual('צ');
  expect(toNotFin('ך')).toEqual('כ');

  expect(toNotFin('צ')).toEqual('צ');
  expect(toNotFin('מ')).toEqual('מ');

  expect(toNotFin('י')).toEqual('י');
  expect(toNotFin('8')).toEqual('8');
  expect(toNotFin('h')).toEqual('h');
});
