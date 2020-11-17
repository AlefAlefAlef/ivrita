import {
  G, MAKAF, SEP, EXTSEP, B,
} from './utils/characters';

export const custom = [
  [`א${EXTSEP}נשים`, 'אנשים', 'נשים'], // א.נשים
  [`א${EXTSEP}נשי(?!ם)`, 'אנשי', 'נשות'], // א.נשי
  [`את${SEP}ה`, 'אתה', 'את'], // את/ה
  [`איש${SEP}(?:אש)?ת`, 'איש', 'אשת'], // איש/אשת, איש/ת
  [`אשת${SEP}איש`, 'איש', 'אשת'], // אשת/איש
  [`(גבר|איש)${SEP}אישה`, '$1', 'אישה'], // גבר/אישה, איש/אישה
  [`אח${SEP}ות${B}`, 'אח', 'אחות'], // אח/ות
  [`ל(ו|ה)${SEP}ל(ו|ה)${B}`, 'לו', 'לה'], // לו/לה, לה/לו
  [`ב(ן|ת)${SEP}ב(ן|ת)${B}`, 'בן', 'בת'], // בת/בן, בן/בת
  [`ה(ו|י)א${SEP}ה(ו|י)א${B}`, 'הוא', 'היא'], // הוא/היא, היא/הוא
  [`אנשי${SEP}ות${B}`, 'אנשי', 'נשות'], // אנשי/ות
  [`מישהו${SEP}י${B}`, 'מישהו', 'מישהי'], // מישהו/י
  [`אחד${SEP}(אח)?ת${B}`, 'אחד', 'אחת'], // אחד/ת, אחד/אחת
  [`אחת${SEP}(אח)?ד${B}`, 'אחד', 'אחת'], // אחת/ד, אחת/אחד
  [`יקיר(|י)${SEP}תי${B}`, 'יקירי', 'יקירתי'], // יקירי/תי
  [`צור${SEP}י${B}`, 'צור', 'צרי'], // צור/צרי
];

// For most verbs, we follow the rules of:
// כתוב/י => Vav before last letter => Vav removed => כתבי
// else:
// לך/י => Yod added after original word => לכי
// However, some verbs need an aditional Yod before their last letter:
// הקשב => Add Yod before and after Bet => הקשיבי
// This is the list of words which need that extra Yod:
export const verbsFemaleExtraYod = [
  'השב',
  'הקשב',
  'הפעל',
  'הרגש',
  'התמד',
  'הרם',
  'הדגם',
  'הלבש',
  'הרבץ',
];

// Most plurals don't need an extra Yod on their female form: מורים->מורות
// These are the exceptions which need a Yod:
export const pluralsWithExtraYod = [
  'יזמ',
  'מומח',
  'ישראל',
  'מצר',
  'אוסטרל',
  'אקדמ',
  'סטודנט',
  'מאסטר(א?)נט',
  'אדריכל',
  'ירושלמ',
  `תל([${MAKAF}]| )אביב`,
  'יהוד',
  'ערב',
  'אשכנז',
  'מזרח',
  'רוס',
  'ספרד',
  'סלאב',
  'צרפת',
  'ברב(א?)ר',
  'מלאכ',
  'היפסטר',
  'ס(א?)ח',
  `ח([${G}])כ`,
  `משת([${G}])פ`,
  `מנכ([${G}])ל`,
  `עו([${G}])ד`,
  `עו([${G}])ס`,
  `רו([${G}])ח`,
];
