/* eslint-disable quote-props */
export const fins = {
  'ן': 'נ',
  'ף': 'פ',
  'ך': 'כ',
  'ם': 'מ',
  'ץ': 'צ',
};
/* eslint-enable quote-props */
export const finnables = Object.keys(fins).concat(Object.values(fins));
export const finals = Object.keys(fins);

export const toFin = (notFin) => Object.keys(fins).find((key) => fins[key] === notFin) || notFin;
export const toNotFin = (fin) => (fins[fin] || fin);
