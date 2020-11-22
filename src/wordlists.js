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
  [`יקיר(י?)${SEP}תי${B}`, 'יקירי', 'יקירתי'], // יקירי/תי
  [`אהוב(י?)${SEP}תי${B}`, 'אהובי', 'אהובתי'], // יקירי/תי
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
  'הקלד',
];

// Most plurals don't need an extra Yod on their female form: מורים->מורות
// These are the exceptions which need a Yod:
export const pluralsWithExtraYod = [
  '(א|ס)ובי(י?)קטיב', // אוביקטיבי וסוביקטיבי
  `אחמ([${G}]?)ש`,
  `ח([${G}])כ`,
  `מ([${G}])פ`,
  `מנכ([${G}]?)ל`,
  `מפא([${G}]?)יניק`,
  `משת([${G}]?)פ`,
  `עו([${G}])(ס|ד)`,
  `רו([${G}])ח`,
  `רשג([${G}]?)ד`,
  'א(י?)כפת',
  'אביב',
  'אח',
  'אגרונומ',
  'אדריכל',
  'אוטיסט',
  'אוסטר(ל?)',
  'אופטימ',
  'אחרא',
  'איטלק',
  'אינדיבידואליסט',
  'אירונ',
  'אירופא',
  'אכזר',
  'אלגנט',
  'אלכוהוליסט',
  'אלמונ',
  'אמית',
  'אמריק(א|נ)',
  'אנאלפבית',
  'אנגל',
  'אנוש',
  'אנטישמ',
  'אנליסט',
  'אנרכיסט',
  'אסטרולוג',
  'אסיאת',
  'אפריק(נ|א)',
  'אצנ',
  'אקדמ(א?)',
  'אקטואל',
  'אקטיביסט',
  'אקרא',
  'ארטיסט',
  'אשכנז',
  'אתאיסט',
  'אתיופ',
  'בוגדנ',
  'בולגר',
  'בטחונ',
  'ביביסט',
  'ב(י?)דיונ',
  'בינונ',
  'בינלאומ',
  'בל(א?)גניסט',
  'בלוגר',
  'בלונד',
  'במא',
  'ברב(א?)ר',
  'ברונט',
  'בריט',
  'ברמנ',
  `ג${G}ובניק`,
  `ג${G}ינג${G}`,
  'גות',
  'גיטריסט',
  'גר(א?)פ',
  'גרמנ',
  'גרפיקא',
  'דברנ',
  'דוקטורנט',
  'דושבג',
  'דיאטנ',
  'דינ(א?)מ',
  '(י?)הוד',
  'הי(פ?)סטר',
  'היפ',
  'הססנ',
  'הנדסא',
  'הרמונ',
  'וטרינר',
  'זכא',
  'חבר(ו?)ת',
  'חובבנ',
  'חולמנ',
  'חושנ',
  'חילונ',
  'חי(ו|נ)נ',
  'חיפא',
  'חמדנ',
  'חרד',
  'חרד(ת?)',
  'חרמנ',
  'חשמלא',
  'טבח',
  'טבעונ',
  'טורק',
  'טיפוגרפ',
  'טכנא',
  'טרוריסט',
  'טרמפיסט',
  'טרנס',
  'ידידות',
  'יוגיסט',
  'יוונ',
  'יורקר',
  'יזמ',
  'ימא',
  'ימ(י?)נ',
  'ירושלמ',
  'ישראל',
  'כימא',
  'כלכלנ',
  'כרונ',
  'לבנונ',
  'לוחמנ',
  'ליברל',
  'ליכודניק',
  'מאסטר',
  'מוזיק(ל|א)',
  'מומח',
  'מזוכיסט',
  'מזרח',
  'מחזא',
  'מטאליסט',
  'מטרידנ',
  'מילואימניק',
  'מיליארדר',
  'מיליונר',
  'מכונא',
  'מלאכ',
  'מלצר',
  'מפסידנ',
  'מצליחנ',
  'מצפונ',
  'מקצוע(נ?)',
  'מרדנ',
  'מרקסיסט',
  'נגר',
  'נובוריש',
  'נודיסט',
  'נודניק',
  'נוצר',
  'נורא',
  'נורווג',
  'נטורופת',
  'נרקומנ',
  'ס(א?)דיסט',
  'ס(א?)ח',
  'סדרנ',
  'סהרור',
  'סוליד(ר?)',
  'סוציאליסט',
  'סטודנט',
  'סטרייט',
  'סמכות',
  'סנדלר',
  'סנוב',
  'ססגונ',
  'ספונטנ',
  'ספורטיב',
  'ספציפ',
  'ספרד',
  'סקסולוג',
  'סרב',
  'סרטט',
  'עירונ',
  'עיתונא',
  'עממ',
  'עניינ',
  'ענק',
  'עסיס',
  'עקרונ',
  'ערב',
  'ערס',
  'פאנקיסט',
  'פדופיל',
  'פוליטיקא',
  'פולנ',
  'פופול(א?)ר',
  'פופוליסט',
  'פחדנ',
  'פטריוט',
  'פילוסופ',
  'פיזיוטרפיסט',
  'פמיניסט',
  'פסיכופת',
  'פסנתרנ',
  'פציפיסט',
  'פריק',
  'פרופסור',
  'פרסומא',
  'פקח',
  'פשיסט',
  'צבע',
  'צבעונ',
  'צי(ו?)נ',
  'ציבור',
  'ציפלונ',
  'צמחונ',
  'צפונ',
  'צרפת',
  'קדמונ',
  'קוויר',
  'קומוניסט',
  'קומיק(ס?)א',
  'קונדיטור',
  'קוסמטיקא',
  'קופא',
  'קוקסינל',
  'קטלנ',
  'קטנונ',
  'קיבוצניק',
  'קיצונ',
  'קלאס',
  'קלדנ',
  'קלפטומנ',
  'קניינ',
  'קפדנ',
  'קפיטליסט',
  'קריקטוריסט',
  'קצב',
  'רבנ',
  'רוחנ',
  'רוס',
  'רוקיסט',
  'רמא',
  'רפד',
  'רקדנ',
  'ש(ו?)ויונ',
  'שאפתנ',
  'שוביניסט',
  'שווד',
  'שוויצר',
  'שחיינ',
  'שחקנ',
  'שלומיאל',
  'שמאלנ',
  'שמנמנ',
  'שמרנ',
  'שפ', //*
  'שק(ר|ד)נ',
  'שרמנט',
  'תורכ',
  'תזונא',
  'תחמנ',
  'תסריטא',
  'תצפיתנ',
  'תקציבא',
  'תרבות',
];
