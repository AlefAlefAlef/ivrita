import {
  SEP, HEB, EXTSEP, G, W, FIN, B,
} from './utils/characters';

import {
  finnables, toFin, toNotFin,
} from './utils/finals';
import {
  custom, verbsFemaleExtraYod, pluralsWithoutExtraYod, pluralsWithExtraYod,
} from './wordlists';

// Marks are used by early rules to specify a position in a text
// which should be addressed later by later rules.
// For example, M_WORDFIN marks an artificial end of a word,
// which was created by a rule (i.e. wasn't the end of the word in the original text)
// and this ending should be checked for final letters errors (מ=>ם).
const M_WORDFIN = '\u05c8'; // Not a real character

const regexize = (p) => {
  p[0] = new RegExp(p[0], 'g');

  if (p[3] === true) {
    p[3] = `${p[1]}/${p[2]}`;
  }
  return p;
};

export default [
  // Whole Words
  ...custom,

  // הקשב/י => הקשב, הקשיבי
  ...verbsFemaleExtraYod.map((word) => {
    const wordWithoutLastLetter = word.slice(0, word.length - 1);
    const lastLetter = word.slice(word.length - 1);
    let lastLetterMatcher = `(${lastLetter})`;
    if (finnables.includes(lastLetter)) {
      lastLetterMatcher = `(${toFin(lastLetter)}|${toNotFin(lastLetter)})`;
    }
    return [`${wordWithoutLastLetter}${lastLetterMatcher}${SEP}י${B}`, `${wordWithoutLastLetter}${toFin(lastLetter)}`, `${wordWithoutLastLetter}י${lastLetter}י`];
  }),

  // סטודנטים/ות => סטודנטים, סטודנטיות
  ...pluralsWithExtraYod.map((word) => {
    let targetWord = word;
    if (word.includes('(')) { // regex groups
      targetWord = word.replace(new RegExp('\\(.*?\\)'), '$1');
    }
    return [`${word}ים${SEP}י?ות${B}`, `${targetWord}ים`, `${targetWord}יות`];
  }),

  // Beginnings
  [`(${B})(${W}{0,3})י${SEP}ת(${W}{2,})`, '$1$2י$3', '$1$2ת$3'], // שי/תכתוב
  [`(${B})(${W}{0,3})ת${SEP}י(${W}{2,})`, '$1$2י$3', '$1$2ת$3'], // שת/יכתוב

  // Endings
  [`ו${SEP}ה${B}`, 'ו', 'ה'], // בגללה/ו
  [`ה${SEP}ו${B}`, 'ו', 'ה'], // בגללו/ה
  [`(${W})${SEP}ה${B}`, `$1${M_WORDFIN}`, '$1ה'], // בגללו/ה
  [`(${W})ה?${SEP}תה${B}`, '$1ה', '$1תה'], // בכה/תה, רצ/תה
  [`(${W})יו${SEP}י?ה${B}`, '$1יו', '$1יה'], // מחקריו/יה
  [`(${W})ה${SEP}ית${B}`, '$1ה', '$1ית'], // מומחה/ית
  [`(${W})י${SEP}ות${B}`, '$1י', '$1ות'], // מומחי/ות
  [`(${W})ות${SEP}י${B}`, '$1י', '$1ות'], // מומחות/י
  [`(${W})${SEP}ית${B}`, `$1${M_WORDFIN}`, '$1ית'], // סטודנט/ית

  [`(${W})י${SEP}תי${B}`, '$1י', '$1תי'], // יקירי/תי

  ...pluralsWithoutExtraYod.map((word) => [`${word}ים${SEP}ות${B}`, `${word}ים`, `${word}ות`]), // גננים/ות => גננים, גננות
  [`(${W}{4,})נים${SEP}י?ות${B}`, '$1נים', '$1ניות'], // תאורנים/ות
  [`(${W}{4,})טים${SEP}י?ות${B}`, '$1טים', '$1טיות'], // סטודנטים/ות
  [`(${W}{4,})אים${SEP}י?ות${B}`, '$1אים', '$1איות'], // ארגנטינאים/ות

  [`(י)?ים${SEP}?(י)?ות${B}`, '$1ים', '$1$2ות'], // מורים/ות
  [`(י)?ות${SEP}?י?ים${B}`, '$1ים', '$1ות'], // מורות/ים
  [`י${SEP}ות${B}`, 'י', 'ות'], // עורכי/ות

  [`(${W})ה${SEP}י${B}`, '$1ה', '$1י'], // ראה/י

  [`(${W}{2,})ו(${W})${SEP}י${B}`, '$1ו$2', '$1$2י'], // כתוב/י
  [`(${W})${SEP}י${B}`, `$1${M_WORDFIN}`, '$1י'], // לך/י

  [`(${W})(ה)?${SEP}ת${B}`, `$1$2${M_WORDFIN}`, '$1ת'], // נהג/ת, רואה/ת חשבון

  [`(${W})ם${SEP}?ן${B}`, '$1ם', '$1ן'], // אתם/ן
  [`(${W})ן${SEP}?ם${B}`, '$1ם', '$1ן'], // אתן/ם
  [`ה(${W}+)י(${W})ו${SEP}נה`, 'ה$1י$2ו', 'ה$1$2נה'], // הלבישו/נה
  [`(${W}+)ו${SEP}ת(${W}+)נה`, '$1ו', 'ת$2נה'], // יצאו/תצאנה
  [`ת(${W}+)ו${SEP}נה`, 'ת$1ו', 'ת$1נה'], // תדרכו/נה
  [`(${W})${SEP}נה${B}`, `$1${M_WORDFIN}`, '$1נה'], // צאו/נה

  // Parentheses
  [`(${W}+)\\(([ותי]{1,3})\\)([יוהםן]{1,3})${B}`, '$1$3', '$1$2$3'], // מתנגד(ות)יו, מתנגד(ות)יהם
  [`(${W}+)י\\(י\\)(${W}*)(${FIN})${B}`, '$1י$2$3', '$1יי$2$3'], // פני(י)ך
  [`(${W}+)\\(י\\)י(${W}*)(${FIN})${B}`, '$1י$2$3', '$1יי$2$3'], // פנ(י)יך
  [`\\(א\\)נשים${B}`, 'אנשים', 'נשים'], // (א)נשים
  [`(${W}+)ב\\(ת\\)${B}`, '$1ב', '$1בת'], // חושב(ת)

  // Special Syntax
  ['\\[([^|]*?)\\|([^|]*?)\\|([^|]*?)\\]', '$1', '$2', '$3'], // [בן|בת|ילד]
  ['\\[([^|]*?)\\|([^|]*?)\\]', '$1', '$2', true], // [בן|בת]

  // Final Letters fixes
  [`ץ(?=${HEB})`, 'צ', 'צ'], // חרוץה
  [`ך(?=${HEB})`, 'כ', 'כ'], // משךי
  [`ן(?=${HEB})`, 'נ', 'נ'], // השעןי
  [`ם(?=${HEB})`, 'מ', 'מ'], // יזםית
  [`ף(?=${HEB})`, 'פ', 'פ'], // פילוסוףית

  [`([^${G}]+)צ${M_WORDFIN}`, '$1ץ', '$1ץ'], // חרוצ
  [`([^${G}]+)כ${M_WORDFIN}`, '$1ך', '$1ך'], // משוכ
  [`([^${G}]+)נ${M_WORDFIN}`, '$1ן', '$1ן'], // השענ
  [`([^${G}]+)מ${M_WORDFIN}`, '$1ם', '$1ם'], // יזמ
  [`([^${G}]+)פ${M_WORDFIN}`, '$1ף', '$1ף'], // פילוסופ

  // Remove marks
  [`${M_WORDFIN}`, '', ''],
].map(regexize);
