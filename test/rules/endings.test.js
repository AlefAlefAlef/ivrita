import {
  genderize, FEMALE, MALE, NEUTRAL,
} from '../../src/ivrita';

test('Word endings', () => {
  // Commandings
  expect(genderize('הקשב/י', FEMALE)).toBe('הקשיבי');
  expect(genderize('הקשב/י', MALE)).toBe('הקשב');
  expect(genderize('הקשב/י/ו', NEUTRAL)).toBe('הקשיבו');

  expect(genderize('הפעל/י', FEMALE)).toBe('הפעילי');
  expect(genderize('הפעל/י', MALE)).toBe('הפעל');
  expect(genderize('הפעל/י/ו', NEUTRAL)).toBe('הפעילו');

  expect(genderize('השב/י', FEMALE)).toBe('השיבי');
  expect(genderize('השב/י', MALE)).toBe('השב');
  expect(genderize('השב/י/ו', NEUTRAL)).toBe('השיבו');

  expect(genderize('הרם/י', FEMALE)).toBe('הרימי');
  expect(genderize('הרם/י', MALE)).toBe('הרם');
  expect(genderize('הרם/י/ו', NEUTRAL)).toBe('הרימו');
  expect(genderize('הרם/י/ו', FEMALE)).toBe('הרימי');
  expect(genderize('הרם/י/ו', MALE)).toBe('הרם');

  expect(genderize('הרמ/י', FEMALE)).toBe('הרימי');
  expect(genderize('הרמ/י', MALE)).toBe('הרם');
  expect(genderize('הרמ/י/ו', NEUTRAL)).toBe('הרימו');
  expect(genderize('הרמ/י/ו', FEMALE)).toBe('הרימי');
  expect(genderize('הרמ/י/ו', MALE)).toBe('הרם');

  expect(genderize('הדגם/י', FEMALE)).toBe('הדגימי');
  expect(genderize('הדגם/י', MALE)).toBe('הדגם');
  expect(genderize('הדגם/י/ו', NEUTRAL)).toBe('הדגימו');

  expect(genderize('הקלד/י', FEMALE)).toBe('הקלידי');
  expect(genderize('הקלד/י', MALE)).toBe('הקלד');
  expect(genderize('הקלד/י/ו', NEUTRAL)).toBe('הקלידו');

  expect(genderize('הלבש/י', FEMALE)).toBe('הלבישי');
  expect(genderize('הלבש/י', MALE)).toBe('הלבש');
  expect(genderize('הלבש/י/ו', NEUTRAL)).toBe('הלבישו');

  expect(genderize('הקש/י', FEMALE)).toBe('הקישי');
  expect(genderize('הקש/י', MALE)).toBe('הקש');
  expect(genderize('הקש/י/ו', NEUTRAL)).toBe('הקישו');

  expect(genderize('צפה/י', FEMALE)).toBe('צפי');
  expect(genderize('צפה/י', MALE)).toBe('צפה');
  expect(genderize('צפה/י/ו', NEUTRAL)).toBe('צפו');

  expect(genderize('שלח/י', FEMALE)).toBe('שלחי');
  expect(genderize('שלח/י', MALE)).toBe('שלח');
  expect(genderize('שלח/י/ו', FEMALE)).toBe('שלחי');
  expect(genderize('שלח/י/ו', MALE)).toBe('שלח');
  expect(genderize('שלח/י/ו', NEUTRAL)).toBe('שלחו');

  expect(genderize('כתוב/י', FEMALE)).toBe('כתבי');
  expect(genderize('כתוב/י', MALE)).toBe('כתוב');
  expect(genderize('כתוב/י/ו', NEUTRAL)).toBe('כתבו');

  expect(genderize('צור/י', FEMALE)).toBe('צרי');
  expect(genderize('צור/י', MALE)).toBe('צור');
  expect(genderize('צור/י/ו', NEUTRAL)).toBe('צרו');

  expect(genderize('רוצ/י', FEMALE)).toBe('רוצי');
  expect(genderize('רוצ/י', MALE)).toBe('רוץ');
  expect(genderize('רוצ/י/ו', NEUTRAL)).toBe('רוצו');

  expect(genderize('קומ/י', FEMALE)).toBe('קומי');
  expect(genderize('קומ/י', MALE)).toBe('קום');
  expect(genderize('קומ/י/ו', NEUTRAL)).toBe('קומו');
  expect(genderize('לכשתקומ/י', FEMALE)).toBe('לכשתקומי');
  expect(genderize('לכשתקומ/י', MALE)).toBe('לכשתקום');
  expect(genderize('לכשתקומ/י/ו', NEUTRAL)).toBe('לכשתקומו');

  expect(genderize('עופ/י', FEMALE)).toBe('עופי');
  expect(genderize('עופ/י', MALE)).toBe('עוף');
  expect(genderize('עופ/י/ו', NEUTRAL)).toBe('עופו');

  expect(genderize('שים/י', FEMALE)).toBe('שימי');
  expect(genderize('שים/י', MALE)).toBe('שים');
  expect(genderize('שים/י/ו', NEUTRAL)).toBe('שימו');

  expect(genderize('עקוב/י', FEMALE)).toBe('עקבי');
  expect(genderize('עקוב/י', MALE)).toBe('עקוב');
  expect(genderize('עקוב/י/ו', NEUTRAL)).toBe('עקבו');

  expect(genderize('ראה/י', FEMALE)).toBe('ראי');
  expect(genderize('ראה/י', MALE)).toBe('ראה');
  expect(genderize('ראה/י/ו', NEUTRAL)).toBe('ראו');

  expect(genderize('ודא/י', FEMALE)).toBe('ודאי');
  expect(genderize('ודא/י', MALE)).toBe('ודא');
  expect(genderize('ודא/י/ו', NEUTRAL)).toBe('ודאו');

  expect(genderize('בחר/י', FEMALE)).toBe('בחרי');
  expect(genderize('בחר/י', MALE)).toBe('בחר');
  expect(genderize('בחר/י/ו', NEUTRAL)).toBe('בחרו');

  expect(genderize('תוכל/י', FEMALE)).toBe('תוכלי');
  expect(genderize('תוכל/י', MALE)).toBe('תוכל');
  expect(genderize('תוכל/י/ו', NEUTRAL)).toBe('תוכלו');

  expect(genderize('צאו/נה', FEMALE)).toBe('צאנה');
  expect(genderize('צאו/נה', MALE)).toBe('צאו');

  expect(genderize('צאו/תצאנה', FEMALE)).toBe('תצאנה');
  expect(genderize('צאו/תצאנה', MALE)).toBe('צאו');

  expect(genderize('יספרו/תספרנה', FEMALE)).toBe('תספרנה');
  expect(genderize('יספרו/תספרנה', MALE)).toBe('יספרו');

  expect(genderize('תלכו/נה', FEMALE)).toBe('תלכנה');
  expect(genderize('תלכו/נה', MALE)).toBe('תלכו');

  expect(genderize('תדרכו/נה', FEMALE)).toBe('תדרכנה');
  expect(genderize('תדרכו/נה', MALE)).toBe('תדרכו');

  expect(genderize('הלבישו/נה', FEMALE)).toBe('הלבשנה');
  expect(genderize('הלבישו/נה', MALE)).toBe('הלבישו');

  expect(genderize('החזיקו/נה', FEMALE)).toBe('החזקנה');
  expect(genderize('החזיקו/נה', MALE)).toBe('החזיקו');

  expect(genderize('הביאו/נה', FEMALE)).toBe('הבאנה');
  expect(genderize('הביאו/נה', MALE)).toBe('הביאו');

  expect(genderize('החטיפו/נה', FEMALE)).toBe('החטפנה');
  expect(genderize('החטיפו/נה', MALE)).toBe('החטיפו');

  expect(genderize('הניחו/נה', FEMALE)).toBe('הנחנה');
  expect(genderize('הניחו/נה', MALE)).toBe('הניחו');

  expect(genderize('השתיקו/נה', FEMALE)).toBe('השתקנה');
  expect(genderize('השתיקו/נה', MALE)).toBe('השתיקו');

  expect(genderize('העיפו/נה', FEMALE)).toBe('העפנה');
  expect(genderize('העיפו/נה', MALE)).toBe('העיפו');

  expect(genderize('הניחו/נה', FEMALE)).toBe('הנחנה');
  expect(genderize('הניחו/נה', MALE)).toBe('הניחו');

  expect(genderize('רקדו/נה', FEMALE)).toBe('רקדנה');
  expect(genderize('רקדו/נה', MALE)).toBe('רקדו');

  // Third person
  expect(genderize('לו/ה', FEMALE)).toBe('לה');
  expect(genderize('לו/ה', MALE)).toBe('לו');
  expect(genderize('לה/ו', FEMALE)).toBe('לה');
  expect(genderize('לה/ו', MALE)).toBe('לו');
  expect(genderize('לו/לה', FEMALE)).toBe('לה');
  expect(genderize('לו/לה', MALE)).toBe('לו');
  expect(genderize('לה/לו', FEMALE)).toBe('לה');
  expect(genderize('לה/לו', MALE)).toBe('לו');

  expect(genderize('עשה/תה', FEMALE)).toBe('עשתה');
  expect(genderize('עשה/תה', MALE)).toBe('עשה');

  expect(genderize('בכה/תה', FEMALE)).toBe('בכתה');
  expect(genderize('בכה/תה', MALE)).toBe('בכה');

  expect(genderize('רצ/תה', FEMALE)).toBe('רצתה');
  expect(genderize('רצ/תה', MALE)).toBe('רצה');

  expect(genderize('כפ/תה', FEMALE)).toBe('כפתה');
  expect(genderize('כפ/תה', MALE)).toBe('כפה');

  expect(genderize('הלווה/תה', FEMALE)).toBe('הלוותה');
  expect(genderize('הלווה/תה', MALE)).toBe('הלווה');

  expect(genderize('יקירי/תי', FEMALE)).toBe('יקירתי');
  expect(genderize('יקירי/תי', MALE)).toBe('יקירי');

  expect(genderize('אהובי/תי', FEMALE)).toBe('אהובתי');
  expect(genderize('אהובי/תי', MALE)).toBe('אהובי');

  expect(genderize('דודי/תי', FEMALE)).toBe('דודתי');
  expect(genderize('דודי/תי', MALE)).toBe('דודי');

  expect(genderize('שלו/ה', FEMALE)).toBe('שלה');
  expect(genderize('שלו/ה', MALE)).toBe('שלו');

  expect(genderize('מחקריו/ה', FEMALE)).toBe('מחקריה');
  expect(genderize('מחקריו/ה', MALE)).toBe('מחקריו');
  expect(genderize('מחקריו/יה', FEMALE)).toBe('מחקריה');
  expect(genderize('מחקריו/יה', MALE)).toBe('מחקריו');

  expect(genderize('מועמדותו/ה', FEMALE)).toBe('מועמדותה');
  expect(genderize('מועמדותו/ה', MALE)).toBe('מועמדותו');

  expect(genderize('מועמדותן/ם', FEMALE)).toBe('מועמדותן');
  expect(genderize('מועמדותן/ם', MALE)).toBe('מועמדותם');

  expect(genderize('שלכם/ן', FEMALE)).toBe('שלכן');
  expect(genderize('שלכם/ן', MALE)).toBe('שלכם');
  expect(genderize('שלכן/ם', FEMALE)).toBe('שלכן');
  expect(genderize('שלכן/ם', MALE)).toBe('שלכם');

  expect(genderize('מחקריהם/ן', FEMALE)).toBe('מחקריהן');
  expect(genderize('מחקריהם/ן', MALE)).toBe('מחקריהם');
  expect(genderize('מחקריהן/ם', FEMALE)).toBe('מחקריהן');
  expect(genderize('מחקריהן/ם', MALE)).toBe('מחקריהם');

  expect(genderize('בגללו/ה', FEMALE)).toBe('בגללה');
  expect(genderize('בגללו/ה', MALE)).toBe('בגללו');

  expect(genderize('מינו/ה', FEMALE)).toBe('מינה');
  expect(genderize('מינו/ה', MALE)).toBe('מינו');

  expect(genderize('לגביו/ה', FEMALE)).toBe('לגביה');
  expect(genderize('לגביו/ה', MALE)).toBe('לגביו');

  // Singular
  expect(genderize('איש/ה', FEMALE)).toBe('אישה');
  expect(genderize('איש/ה', MALE)).toBe('איש');
  expect(genderize('איש/ת', FEMALE)).toBe('אשת');
  expect(genderize('איש/ת', MALE)).toBe('איש');

  expect(genderize('חרוץ/ה', FEMALE)).toBe('חרוצה');
  expect(genderize('חרוץ/ה', MALE)).toBe('חרוץ');

  expect(genderize('גבוה/ה', FEMALE)).toBe('גבוהה');
  expect(genderize('גבוה/ה', MALE)).toBe('גבוה');

  expect(genderize('סטודנט/ית', FEMALE)).toBe('סטודנטית');
  expect(genderize('סטודנט/ית', MALE)).toBe('סטודנט');

  expect(genderize('יזמ/ית', FEMALE)).toBe('יזמית');
  expect(genderize('יזמ/ית', MALE)).toBe('יזם');
  expect(genderize('יזם/ית', FEMALE)).toBe('יזמית');
  expect(genderize('יזם/ית', MALE)).toBe('יזם');
  expect(genderize('יזמ/ת', FEMALE)).toBe('יזמת');
  expect(genderize('יזמ/ת', MALE)).toBe('יזם');
  expect(genderize('יזם/ת', FEMALE)).toBe('יזמת');
  expect(genderize('יזם/ת', MALE)).toBe('יזם');

  expect(genderize('מומחה/ית', FEMALE)).toBe('מומחית');
  expect(genderize('מומחה/ית', MALE)).toBe('מומחה');

  expect(genderize('חוקר/ת', FEMALE)).toBe('חוקרת');
  expect(genderize('חוקר/ת', MALE)).toBe('חוקר');

  expect(genderize('חבר/ה', FEMALE)).toBe('חברה');
  expect(genderize('חבר/ה', MALE)).toBe('חבר');

  expect(genderize('חבר/ת סגל', FEMALE)).toBe('חברת סגל');
  expect(genderize('חבר/ת סגל', MALE)).toBe('חבר סגל');

  expect(genderize('רואה/ת חשבון', FEMALE)).toBe('רואת חשבון');
  expect(genderize('רואה/ת חשבון', MALE)).toBe('רואה חשבון');

  expect(genderize('מנקה/ת בתים', FEMALE)).toBe('מנקת בתים');
  expect(genderize('מנקה/ת בתים', MALE)).toBe('מנקה בתים');

  expect(genderize('מורה פרטי/ת', FEMALE)).toBe('מורה פרטית');
  expect(genderize('מורה פרטי/ת', MALE)).toBe('מורה פרטי');

  expect(genderize('עוזר/ת אישי/ת', FEMALE)).toBe('עוזרת אישית');
  expect(genderize('עוזר/ת אישי/ת', MALE)).toBe('עוזר אישי');

  expect(genderize('מכונאי/ת', FEMALE)).toBe('מכונאית');
  expect(genderize('מכונאי/ת', MALE)).toBe('מכונאי');

  expect(genderize('שומר/ת', FEMALE)).toBe('שומרת');
  expect(genderize('שומר/ת', MALE)).toBe('שומר');

  expect(genderize('צלמ/ת', FEMALE)).toBe('צלמת');
  expect(genderize('צלמ/ת', MALE)).toBe('צלם');
  expect(genderize('צלם/ת', FEMALE)).toBe('צלמת');
  expect(genderize('צלם/ת', MALE)).toBe('צלם');

  expect(genderize('ישראלי/ת', FEMALE)).toBe('ישראלית');
  expect(genderize('ישראלי/ת', MALE)).toBe('ישראלי');

  expect(genderize('ארגנטינאי/ת', FEMALE)).toBe('ארגנטינאית');
  expect(genderize('ארגנטינאי/ת', MALE)).toBe('ארגנטינאי');

  expect(genderize('צרפתי/ת', FEMALE)).toBe('צרפתית');
  expect(genderize('צרפתי/ת', MALE)).toBe('צרפתי');

  expect(genderize('ברברי/ת', FEMALE)).toBe('ברברית');
  expect(genderize('ברברי/ת', MALE)).toBe('ברברי');
  expect(genderize('ברבארי/ת', FEMALE)).toBe('ברבארית');
  expect(genderize('ברבארי/ת', MALE)).toBe('ברבארי');

  expect(genderize('יהודי/ת', FEMALE)).toBe('יהודית');
  expect(genderize('יהודי/ת', MALE)).toBe('יהודי');
  expect(genderize('יהודי/ה', FEMALE)).toBe('יהודיה');
  expect(genderize('יהודי/ה', MALE)).toBe('יהודי');

  // Plural
  expect(genderize('חיים/ות', FEMALE)).toBe('חיות');
  expect(genderize('חיים/ות', MALE)).toBe('חיים');

  expect(genderize('טריים/ות', FEMALE)).toBe('טריות');
  expect(genderize('טריים/ות', MALE)).toBe('טריים');

  expect(genderize('פנויים/ות', FEMALE)).toBe('פנויות');
  expect(genderize('פנויים/ות', MALE)).toBe('פנויים');

  expect(genderize('ערביים/ות', FEMALE)).toBe('ערביות');
  expect(genderize('ערביים/ות', MALE)).toBe('ערביים');

  expect(genderize('סטודנטים/ות', FEMALE)).toBe('סטודנטיות');
  expect(genderize('סטודנטים/ות', MALE)).toBe('סטודנטים');
  expect(genderize('סטודנטים/יות', FEMALE)).toBe('סטודנטיות');
  expect(genderize('סטודנטים/יות', MALE)).toBe('סטודנטים');

  expect(genderize('מאסטרים/ות', FEMALE)).toBe('מאסטריות');
  expect(genderize('מאסטרים/ות', MALE)).toBe('מאסטרים');

  expect(genderize('יזמים/ות', FEMALE)).toBe('יזמיות');
  expect(genderize('יזמים/ות', MALE)).toBe('יזמים');

  expect(genderize('מומחים/ות', FEMALE)).toBe('מומחיות');
  expect(genderize('מומחים/ות', MALE)).toBe('מומחים');

  expect(genderize('עורכים/ות', FEMALE)).toBe('עורכות');
  expect(genderize('עורכים/ות', MALE)).toBe('עורכים');

  expect(genderize('שופטים/ות', FEMALE)).toBe('שופטות');
  expect(genderize('שופטים/ות', MALE)).toBe('שופטים');

  expect(genderize('בעלות/י', FEMALE)).toBe('בעלות');
  expect(genderize('בעלות/י', MALE)).toBe('בעלי');
  expect(genderize('בעלי/ות', FEMALE)).toBe('בעלות');
  expect(genderize('בעלי/ות', MALE)).toBe('בעלי');
  expect(genderize('בעלים/ות', FEMALE)).toBe('בעלות');
  expect(genderize('בעלים/ות', MALE)).toBe('בעלים');

  expect(genderize('מעצבי/ות־על', FEMALE)).toBe('מעצבות־על');
  expect(genderize('מעצבי/ות־על', MALE)).toBe('מעצבי־על');

  expect(genderize('רואי/ות חשבון', FEMALE)).toBe('רואות חשבון');
  expect(genderize('רואי/ות חשבון', MALE)).toBe('רואי חשבון');

  expect(genderize('מנקי/ות בתים', FEMALE)).toBe('מנקות בתים');
  expect(genderize('מנקי/ות בתים', MALE)).toBe('מנקי בתים');

  expect(genderize('מורים/ות פרטיים/ות', FEMALE)).toBe('מורות פרטיות');
  expect(genderize('מורים/ות פרטיים/ות', MALE)).toBe('מורים פרטיים');

  expect(genderize('עוזרים/ות אישיים/ות', FEMALE)).toBe('עוזרות אישיות');
  expect(genderize('עוזרים/ות אישיים/ות', MALE)).toBe('עוזרים אישיים');

  expect(genderize('עוזרות/ים אישיות/ים', FEMALE)).toBe('עוזרות אישיות');
  expect(genderize('עוזרות/ים אישיות/ים', MALE)).toBe('עוזרים אישיים');

  expect(genderize('מכונאים/ות', FEMALE)).toBe('מכונאיות');
  expect(genderize('מכונאים/ות', MALE)).toBe('מכונאים');

  expect(genderize('שומרים/ות', FEMALE)).toBe('שומרות');
  expect(genderize('שומרים/ות', MALE)).toBe('שומרים');

  expect(genderize('צלמים/ות', FEMALE)).toBe('צלמות');
  expect(genderize('צלמים/ות', MALE)).toBe('צלמים');
  expect(genderize('צלמים/יות', FEMALE)).toBe('צלמיות');
  expect(genderize('צלמים/יות', MALE)).toBe('צלמים');

  expect(genderize('ישראלים/ות', FEMALE)).toBe('ישראליות');
  expect(genderize('ישראלים/ות', MALE)).toBe('ישראלים');
  expect(genderize('ישראליים/ות', FEMALE)).toBe('ישראליות');
  expect(genderize('ישראליים/ות', MALE)).toBe('ישראליים');

  expect(genderize('ברברים/ות', FEMALE)).toBe('ברבריות');
  expect(genderize('ברברים/ות', MALE)).toBe('ברברים');
  expect(genderize('ברבארים/ות', FEMALE)).toBe('ברבאריות');
  expect(genderize('ברבארים/ות', MALE)).toBe('ברבארים');

  expect(genderize('סחים/ות', FEMALE)).toBe('סחיות');
  expect(genderize('סחים/ות', MALE)).toBe('סחים');
  expect(genderize('סאחים/ות', FEMALE)).toBe('סאחיות');
  expect(genderize('סאחים/ות', MALE)).toBe('סאחים');

  expect(genderize('ח"כים/ות', FEMALE)).toBe('ח"כיות');
  expect(genderize('ח"כים/ות', MALE)).toBe('ח"כים');

  expect(genderize('משת”פים/ות', FEMALE)).toBe('משת”פיות');
  expect(genderize('משת”פים/ות', MALE)).toBe('משת”פים');

  expect(genderize('כשהגננים/ות', FEMALE)).toBe('כשהגננות');
  expect(genderize('כשהגננים/ות', MALE)).toBe('כשהגננים');

  expect(genderize('תל אביבים/ות', FEMALE)).toBe('תל אביביות');
  expect(genderize('תל אביבים/ות', MALE)).toBe('תל אביבים');
  expect(genderize('תל־אביבים/ות', FEMALE)).toBe('תל־אביביות');
  expect(genderize('תל־אביבים/ות', MALE)).toBe('תל־אביבים');

  expect(genderize('ברברים/ות', FEMALE)).toBe('ברבריות');
  expect(genderize('ברברים/ות', MALE)).toBe('ברברים');
  expect(genderize('ברבארים/ות', FEMALE)).toBe('ברבאריות');
  expect(genderize('ברבארים/ות', MALE)).toBe('ברבארים');

  expect(genderize('סחים/ות', FEMALE)).toBe('סחיות');
  expect(genderize('סחים/ות', MALE)).toBe('סחים');
  expect(genderize('סאחים/ות', FEMALE)).toBe('סאחיות');
  expect(genderize('סאחים/ות', MALE)).toBe('סאחים');

  expect(genderize('ח"כים/ות', FEMALE)).toBe('ח"כיות');
  expect(genderize('ח"כים/ות', MALE)).toBe('ח"כים');

  expect(genderize('משת”פים/ות', FEMALE)).toBe('משת”פיות');
  expect(genderize('משת”פים/ות', MALE)).toBe('משת”פים');

  expect(genderize('כשהגננים/ות', FEMALE)).toBe('כשהגננות');
  expect(genderize('כשהגננים/ות', MALE)).toBe('כשהגננים');

  expect(genderize('ארגנטינאים/ות', FEMALE)).toBe('ארגנטינאיות');
  expect(genderize('ארגנטינאים/ות', MALE)).toBe('ארגנטינאים');

  expect(genderize('צרפתים/ות', FEMALE)).toBe('צרפתיות');
  expect(genderize('צרפתים/ות', MALE)).toBe('צרפתים');

  expect(genderize('אחיינים/ות', FEMALE)).toBe('אחייניות');
  expect(genderize('אחיינים/ות', MALE)).toBe('אחיינים');

  expect(genderize('הודים/ות', FEMALE)).toBe('הודיות');
  expect(genderize('הודים/ות', MALE)).toBe('הודים');
  expect(genderize('יהודים/ות', FEMALE)).toBe('יהודיות');
  expect(genderize('יהודים/ות', MALE)).toBe('יהודים');
  expect(genderize('יהודיים/ות', FEMALE)).toBe('יהודיות');
  expect(genderize('יהודיים/ות', MALE)).toBe('יהודיים');

  expect(genderize('קלפטומנים/ות', FEMALE)).toBe('קלפטומניות');
  expect(genderize('קלפטומנים/ות', MALE)).toBe('קלפטומנים');
  expect(genderize('קלפטומנים/יות', FEMALE)).toBe('קלפטומניות');
  expect(genderize('קלפטומנים/יות', MALE)).toBe('קלפטומנים');

  expect(genderize('שפים/ות', FEMALE)).toBe('שפיות');
  expect(genderize('שפים/ות', MALE)).toBe('שפים');
  expect(genderize('מכשפים/ות', FEMALE)).toBe('מכשפות');
  expect(genderize('מכשפים/ות', MALE)).toBe('מכשפים');

  expect(genderize('שווים/ות, שוויםות, שוות/ים, שווי/ות זכויות', FEMALE)).toBe('שוות, שוות, שוות, שוות זכויות');
  expect(genderize('שווים/ות, שוויםות, שוות/ים, שווי/ות זכויות', MALE)).toBe('שווים, שווים, שווים, שווי זכויות');
});
