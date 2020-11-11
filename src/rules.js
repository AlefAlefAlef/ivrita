export const SEP = '[\\\\/.]';
export const HEB = '[א-ת]';
const EXTSEP = '[\\\\./—־-]';
const G = '\'‎"”׳״'; // "Gershayim"
const W = `[א-ת${G}]`;
const FIN = '[ןףךםץ]';
const B = `(?=^|$|\b|[^א-ת${G}?\u0590-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C7\u05EF-\u05F2\uFB2A-\uFB4F])`; // Boundary, like "\b" in regex. All unicode characters which can be part of a hebrew word

// Marks are used by early rules to specify a position in a text
// which should be addressed later by later rules.
// For example, M_WORDFIN marks an artificial end of a word,
// which was created by a rule (i.e. wasn't the end of the word in the original text)
// and this ending should be checked for final letters errors (מ=>ם).
const M_WORDFIN = '\u05c8'; // Not a real character

const regexize = (p) => {
  p[0] = new RegExp(p[0], 'g');
  return p;
};

export default [
  // Whole Words
  [`א${EXTSEP}נשים`, 'אנשים', 'נשים'], // א.נשים
  [`א${EXTSEP}נשי(?!ם)`, 'אנשי', 'נשות'], // א.נשי
  [`את${SEP}ה`, 'אתה', 'את'], // את/ה
  [`איש${SEP}אשת`, 'איש', 'אשת'], // איש/אשת
  [`אשת${SEP}איש`, 'איש', 'אשת'], // אשת/איש
  [`(גבר|איש)${SEP}אישה`, '$1', 'אישה'], // גבר/אישה, איש/אישה
  [`רו(ץ|צ)${SEP}י${B}`, 'רוץ', 'רוצי'], // רוצ/י
  [`קו(ם|מ)${SEP}י${B}`, 'קום', 'קומי'], // קומ/י
  [`עו(ף|פ)${SEP}י${B}`, 'עוף', 'עופי'], // עופ/י
  [`שי(ם|מ)${SEP}י${B}`, 'שים', 'שימי'], // שימ/י
  [`ו?ודא${SEP}י${B}`, 'ודא', 'ודאי'], // ודא/י
  [`שלח${SEP}י${B}`, 'שלח', 'שלחי'], // שלח/י
  [`אח${SEP}ות${B}`, 'אח', 'אחות'], // אח/ות
  [`ל(ו|ה)${SEP}ל(ו|ה)${B}`, 'לו', 'לה'], // לו/לה, לה/לו
  [`ב(ן|ת)${SEP}ב(ן|ת)${B}`, 'בן', 'בת'], // בת/בן, בן/בת
  [`ה(ו|י)א${SEP}ה(ו|י)א${B}`, 'הוא', 'היא'], // הוא/היא, היא/הוא
  [`אנשי${SEP}ות${B}`, 'אנשי', 'נשות'], // אנשי/ות
  [`מישהו${SEP}י${B}`, 'מישהו', 'מישהי'], // מישהו/י
  [`אחד${SEP}(אח)?ת${B}`, 'אחד', 'אחת'], // אחד/ת, אחד/אחת
  [`אחת${SEP}(אח)?ד${B}`, 'אחד', 'אחת'], // אחת/ד, אחת/אחד
  [`יזמים${SEP}י?ות${B}`, 'יזמים', 'יזמיות'], // יזמים/ות, יזמים/יות
  [`מומחים${SEP}י?ות${B}`, 'מומחים', 'מומחיות'], // מומחים/ות, מומחים/יות
  [`מכונאים${SEP}י?ות${B}`, 'מכונאים', 'מכונאיות'], // מכונאים/ות, מומחים/יות
  [`ישראלים${SEP}י?ות${B}`, 'ישראלים', 'ישראליות'], // ישראלים/ות, ישראלים/יות
  [`יהודים${SEP}י?ות${B}`, 'יהודים', 'יהודיות'], // יהודים/ות, יהודים/יות
  [`ערבים${SEP}י?ות${B}`, 'ערבים', 'ערביות'], // ערבים/ות, ערבים/יות
  [`אשכנזים${SEP}י?ות${B}`, 'אשכנזים', 'אשכנזיות'], // אשכנזים/ות, אשכנזים/יות
  [`מזרחים${SEP}י?ות${B}`, 'מזרחים', 'מזרחיות'], // מזרחים/ות, מזרחים/יות
  [`רוסים${SEP}י?ות${B}`, 'רוסים', 'רוסיות'], // מזרחים/ות, מזרחים/יות
  [`רוסים${SEP}י?ות${B}`, 'רוסים', 'רוסיות'], // מזרחים/ות, מזרחים/יות
  [`ספרדים${SEP}י?ות${B}`, 'ספרדים', 'ספרדיות'], // ספרדים/ות, ספרדים/יות
  [`סלאבים${SEP}י?ות${B}`, 'סלאבים', 'סלאביות'], // סלאבים/ות, סלאבים/יות
  [`צרפתים${SEP}י?ות${B}`, 'צרפתים', 'צרפתיות'], // צרפתים/ות, צרפתים/יות
  [`ברבא?רים${SEP}י?ות${B}`, 'ברבא?רים', 'ברבא?ריות'], // ברבא?רים/ות, ברבא?רים/יות
  [`גננים${SEP}י?ות${B}`, 'גננים', 'גננות'],
  [`מלאכים${SEP}י?ות${B}`, 'מלאכים', 'מלאכיות'],
  [`היפסטרים${SEP}י?ות${B}`, 'היפסטרים', 'היפסטריות'],
  [`סא?חים${SEP}י?ות${B}`, 'סא?חים', 'סא?חיות'],
  [`ח[${G}]כים${SEP}י?ות${B}`, 'ח״כים', 'ח״כיות'],
  [`משת[${G}]פים${SEP}י?ות${B}`, 'משת״פים', 'משת״פיות'],

  // Beginnings
  [`(${B})(${W}{0,3})י${SEP}ת(${W}{2,})`, '$1$2י$3', '$1$2ת$3'], // שי/תכתוב
  [`(${B})(${W}{0,3})ת${SEP}י(${W}{2,})`, '$1$2י$3', '$1$2ת$3'], // שת/יכתוב
  // Endings
  [`ו${SEP}ה${B}`, 'ו', 'ה'], // בגללה/ו
  [`ה${SEP}ו${B}`, 'ו', 'ה'], // בגללו/ה
  [`(${W})${SEP}ה${B}`, `$1${M_WORDFIN}`, '$1ה'], // בגללו/ה
  [`(${W})ה?${SEP}תה${B}`, '$1ה', '$1תה'], // בכה/תה, רצ/תה
  [`(${W})י${SEP}תי${B}`, '$1י', '$1תי'], // יקירי/תי
  [`(${W})יו${SEP}י?ה${B}`, '$1יו', '$1יה'], // מחקריו/יה
  [`(${W})ה${SEP}ית${B}`, '$1ה', '$1ית'], // מומחה/ית
  [`(${W})י${SEP}ות${B}`, '$1י', '$1ות'], // מומחי/ות
  [`(${W})ות${SEP}י${B}`, '$1י', '$1ות'], // מומחות/י
  [`(${W})${SEP}ית${B}`, `$1${M_WORDFIN}`, '$1ית'], // סטודנט/ית

  [`(${W}{4,})נים${SEP}י?ות${B}`, '$1נים', '$1ניות'], // תאורנים/ות
  [`(${W}{4,})טים${SEP}י?ות${B}`, '$1טים', '$1טיות'], // סטודנטים/ות
  [`(${W}{4,})אים${SEP}י?ות${B}`, '$1אים', '$1איות'], // ארגנטינאים/ות
  [`(י)?ים${SEP}?(י)?ות${B}`, '$1ים', '$1$2ות'], // מורים/ות
  [`(י)?ות${SEP}?י?ים${B}`, '$1ים', '$1ות'], // מורות/ים

  [`י${SEP}ות${B}`, 'י', 'ות'], // עורכי/ות
  [`(${W})ו(${W})${SEP}י${B}`, '$1ו$2', '$1$2י'], // עורכי/ות

  [`(${W})ה${SEP}י${B}`, '$1ה', '$1י'], // ראה/י
  [`(${FIN})${SEP}י${B}`, `$1${M_WORDFIN}`, 'י$1י'], //  השען/י
  [`(${W})${SEP}י${B}`, `$1${M_WORDFIN}`, 'י$1י'], // הקשב/י
  [`(${W})(ה)?${SEP}ת${B}`, `$1$2${M_WORDFIN}`, '$1ת'], // נהג/ת, רואה/ת חשבון
  [`(${W})ם${SEP}?ן${B}`, '$1ם', '$1ן'], // אתם/ן
  [`(${W})ן${SEP}?ם${B}`, '$1ם', '$1ן'], // אתן/ם
  [`(${W}+)ו${SEP}ת(${W}+)נה`, '$1ו', 'ת$2נה'], // צאו/תצאנה
  [`(${W})${SEP}נה${B}`, `$1${M_WORDFIN}`, '$1נה'], // צאו/נה

  // Parentheses
  [`(${W}+)\\(([ותי]{1,3})\\)([יוהםן]{1,3})${B}`, '$1$3', '$1$2$3'], // מתנגד(ות)יו, מתנגד(ות)יהם
  [`(${W}+)י\\(י\\)(${W}*)(${FIN})${B}`, '$1י$2$3', '$1יי$2$3'], // פני(י)ך
  [`(${W}+)\\(י\\)י(${W}*)(${FIN})${B}`, '$1י$2$3', '$1יי$2$3'], // פנ(י)יך
  [`\\(א\\)נשים${B}`, 'אנשים', 'נשים'], // (א)נשים
  [`(${W}+)ב\\(ת\\)${B}`, '$1ב', '$1בת'], // חושב(ת)

  // Special Syntax
  ['\\[([^|]*?)\\|([^|]*?)\\|([^|]*?)\\]', '$1', '$2', '$3'], // [בן|בת|ילד]
  ['\\[([^|]*?)\\|([^|]*?)\\]', '$1', '$2'], // [בן|בת]

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
