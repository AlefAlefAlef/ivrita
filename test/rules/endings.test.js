import { genderize, Mode } from '../../src/ivrita';

test('Word endings', () => {
  // Commandings
  expect(genderize('הקשב/י', Mode.FEMALE)).toBe('הקשיבי');
  expect(genderize('הקשב/י', Mode.MALE)).toBe('הקשב');
  expect(genderize('הקשב/י/ו', Mode.NEUTRAL)).toBe('הקשיבו');

  expect(genderize('הפעל/י', Mode.FEMALE)).toBe('הפעילי');
  expect(genderize('הפעל/י', Mode.MALE)).toBe('הפעל');
  expect(genderize('הפעל/י/ו', Mode.NEUTRAL)).toBe('הפעילו');

  expect(genderize('השב/י', Mode.FEMALE)).toBe('השיבי');
  expect(genderize('השב/י', Mode.MALE)).toBe('השב');
  expect(genderize('השב/י/ו', Mode.NEUTRAL)).toBe('השיבו');

  expect(genderize('הרם/י', Mode.FEMALE)).toBe('הרימי');
  expect(genderize('הרם/י', Mode.MALE)).toBe('הרם');
  expect(genderize('הרם/י/ו', Mode.NEUTRAL)).toBe('הרימו');
  expect(genderize('הרם/י/ו', Mode.FEMALE)).toBe('הרימי');
  expect(genderize('הרם/י/ו', Mode.MALE)).toBe('הרם');

  expect(genderize('הרמ/י', Mode.FEMALE)).toBe('הרימי');
  expect(genderize('הרמ/י', Mode.MALE)).toBe('הרם');
  expect(genderize('הרמ/י/ו', Mode.NEUTRAL)).toBe('הרימו');
  expect(genderize('הרמ/י/ו', Mode.FEMALE)).toBe('הרימי');
  expect(genderize('הרמ/י/ו', Mode.MALE)).toBe('הרם');

  expect(genderize('הדגם/י', Mode.FEMALE)).toBe('הדגימי');
  expect(genderize('הדגם/י', Mode.MALE)).toBe('הדגם');
  expect(genderize('הדגם/י/ו', Mode.NEUTRAL)).toBe('הדגימו');

  expect(genderize('הקלד/י', Mode.FEMALE)).toBe('הקלידי');
  expect(genderize('הקלד/י', Mode.MALE)).toBe('הקלד');
  expect(genderize('הקלד/י/ו', Mode.NEUTRAL)).toBe('הקלידו');

  expect(genderize('הלבש/י', Mode.FEMALE)).toBe('הלבישי');
  expect(genderize('הלבש/י', Mode.MALE)).toBe('הלבש');
  expect(genderize('הלבש/י/ו', Mode.NEUTRAL)).toBe('הלבישו');

  expect(genderize('הקש/י', Mode.FEMALE)).toBe('הקישי');
  expect(genderize('הקש/י', Mode.MALE)).toBe('הקש');
  expect(genderize('הקש/י/ו', Mode.NEUTRAL)).toBe('הקישו');

  expect(genderize('צפה/י', Mode.FEMALE)).toBe('צפי');
  expect(genderize('צפה/י', Mode.MALE)).toBe('צפה');
  expect(genderize('צפה/י/ו', Mode.NEUTRAL)).toBe('צפו');

  expect(genderize('שלח/י', Mode.FEMALE)).toBe('שלחי');
  expect(genderize('שלח/י', Mode.MALE)).toBe('שלח');
  expect(genderize('שלח/י/ו', Mode.FEMALE)).toBe('שלחי');
  expect(genderize('שלח/י/ו', Mode.MALE)).toBe('שלח');
  expect(genderize('שלח/י/ו', Mode.NEUTRAL)).toBe('שלחו');

  expect(genderize('כתוב/י', Mode.FEMALE)).toBe('כתבי');
  expect(genderize('כתוב/י', Mode.MALE)).toBe('כתוב');
  expect(genderize('כתוב/י/ו', Mode.NEUTRAL)).toBe('כתבו');

  expect(genderize('צור/י', Mode.FEMALE)).toBe('צרי');
  expect(genderize('צור/י', Mode.MALE)).toBe('צור');
  expect(genderize('צור/י/ו', Mode.NEUTRAL)).toBe('צרו');

  expect(genderize('חשוב/י', Mode.FEMALE)).toBe('חשבי');
  expect(genderize('חשוב/י', Mode.MALE)).toBe('חשוב');
  expect(genderize('חשוב/י/ו', Mode.NEUTRAL)).toBe('חשבו');

  expect(genderize('רוצ/י', Mode.FEMALE)).toBe('רוצי');
  expect(genderize('רוצ/י', Mode.MALE)).toBe('רוץ');
  expect(genderize('רוצ/י/ו', Mode.NEUTRAL)).toBe('רוצו');

  expect(genderize('קומ/י', Mode.FEMALE)).toBe('קומי');
  expect(genderize('קומ/י', Mode.MALE)).toBe('קום');
  expect(genderize('קומ/י/ו', Mode.NEUTRAL)).toBe('קומו');
  expect(genderize('לכשתקומ/י', Mode.FEMALE)).toBe('לכשתקומי');
  expect(genderize('לכשתקומ/י', Mode.MALE)).toBe('לכשתקום');
  expect(genderize('לכשתקומ/י/ו', Mode.NEUTRAL)).toBe('לכשתקומו');

  expect(genderize('עופ/י', Mode.FEMALE)).toBe('עופי');
  expect(genderize('עופ/י', Mode.MALE)).toBe('עוף');
  expect(genderize('עופ/י/ו', Mode.NEUTRAL)).toBe('עופו');

  expect(genderize('שים/י', Mode.FEMALE)).toBe('שימי');
  expect(genderize('שים/י', Mode.MALE)).toBe('שים');
  expect(genderize('שים/י/ו', Mode.NEUTRAL)).toBe('שימו');

  expect(genderize('עקוב/י', Mode.FEMALE)).toBe('עקבי');
  expect(genderize('עקוב/י', Mode.MALE)).toBe('עקוב');
  expect(genderize('עקוב/י/ו', Mode.NEUTRAL)).toBe('עקבו');

  expect(genderize('ראה/י', Mode.FEMALE)).toBe('ראי');
  expect(genderize('ראה/י', Mode.MALE)).toBe('ראה');
  expect(genderize('ראה/י/ו', Mode.NEUTRAL)).toBe('ראו');

  expect(genderize('ודא/י', Mode.FEMALE)).toBe('ודאי');
  expect(genderize('ודא/י', Mode.MALE)).toBe('ודא');
  expect(genderize('ודא/י/ו', Mode.NEUTRAL)).toBe('ודאו');

  expect(genderize('בחר/י', Mode.FEMALE)).toBe('בחרי');
  expect(genderize('בחר/י', Mode.MALE)).toBe('בחר');
  expect(genderize('בחר/י/ו', Mode.NEUTRAL)).toBe('בחרו');

  expect(genderize('תוכל/י', Mode.FEMALE)).toBe('תוכלי');
  expect(genderize('תוכל/י', Mode.MALE)).toBe('תוכל');
  expect(genderize('תוכל/י/ו', Mode.NEUTRAL)).toBe('תוכלו');

  expect(genderize('דווח/י', Mode.FEMALE)).toBe('דווחי');
  expect(genderize('דווח/י', Mode.MALE)).toBe('דווח');

  expect(genderize('כוון/י', Mode.FEMALE)).toBe('כווני');
  expect(genderize('כוון/י', Mode.MALE)).toBe('כוון');

  expect(genderize('תכוונ/י', Mode.FEMALE)).toBe('תכווני');
  expect(genderize('תכוונ/י', Mode.MALE)).toBe('תכוון');

  expect(genderize('צאו/נה', Mode.FEMALE)).toBe('צאנה');
  expect(genderize('צאו/נה', Mode.MALE)).toBe('צאו');

  expect(genderize('צאו/תצאנה', Mode.FEMALE)).toBe('תצאנה');
  expect(genderize('צאו/תצאנה', Mode.MALE)).toBe('צאו');

  expect(genderize('יספרו/תספרנה', Mode.FEMALE)).toBe('תספרנה');
  expect(genderize('יספרו/תספרנה', Mode.MALE)).toBe('יספרו');

  expect(genderize('תלכו/נה', Mode.FEMALE)).toBe('תלכנה');
  expect(genderize('תלכו/נה', Mode.MALE)).toBe('תלכו');

  expect(genderize('תדרכו/נה', Mode.FEMALE)).toBe('תדרכנה');
  expect(genderize('תדרכו/נה', Mode.MALE)).toBe('תדרכו');

  expect(genderize('הלבישו/נה', Mode.FEMALE)).toBe('הלבשנה');
  expect(genderize('הלבישו/נה', Mode.MALE)).toBe('הלבישו');

  expect(genderize('החזיקו/נה', Mode.FEMALE)).toBe('החזקנה');
  expect(genderize('החזיקו/נה', Mode.MALE)).toBe('החזיקו');

  expect(genderize('הביאו/נה', Mode.FEMALE)).toBe('הבאנה');
  expect(genderize('הביאו/נה', Mode.MALE)).toBe('הביאו');

  expect(genderize('החטיפו/נה', Mode.FEMALE)).toBe('החטפנה');
  expect(genderize('החטיפו/נה', Mode.MALE)).toBe('החטיפו');

  expect(genderize('הניחו/נה', Mode.FEMALE)).toBe('הנחנה');
  expect(genderize('הניחו/נה', Mode.MALE)).toBe('הניחו');

  expect(genderize('השתיקו/נה', Mode.FEMALE)).toBe('השתקנה');
  expect(genderize('השתיקו/נה', Mode.MALE)).toBe('השתיקו');

  expect(genderize('העיפו/נה', Mode.FEMALE)).toBe('העפנה');
  expect(genderize('העיפו/נה', Mode.MALE)).toBe('העיפו');

  expect(genderize('הניחו/נה', Mode.FEMALE)).toBe('הנחנה');
  expect(genderize('הניחו/נה', Mode.MALE)).toBe('הניחו');

  expect(genderize('רקדו/נה', Mode.FEMALE)).toBe('רקדנה');
  expect(genderize('רקדו/נה', Mode.MALE)).toBe('רקדו');

  // Third person
  expect(genderize('לו/ה', Mode.FEMALE)).toBe('לה');
  expect(genderize('לו/ה', Mode.MALE)).toBe('לו');
  expect(genderize('לה/ו', Mode.FEMALE)).toBe('לה');
  expect(genderize('לה/ו', Mode.MALE)).toBe('לו');
  expect(genderize('לו/לה', Mode.FEMALE)).toBe('לה');
  expect(genderize('לו/לה', Mode.MALE)).toBe('לו');
  expect(genderize('לה/לו', Mode.FEMALE)).toBe('לה');
  expect(genderize('לה/לו', Mode.MALE)).toBe('לו');

  expect(genderize('עשה/תה', Mode.FEMALE)).toBe('עשתה');
  expect(genderize('עשה/תה', Mode.MALE)).toBe('עשה');

  expect(genderize('בכה/תה', Mode.FEMALE)).toBe('בכתה');
  expect(genderize('בכה/תה', Mode.MALE)).toBe('בכה');

  expect(genderize('רצ/תה', Mode.FEMALE)).toBe('רצתה');
  expect(genderize('רצ/תה', Mode.MALE)).toBe('רצה');

  expect(genderize('כפ/תה', Mode.FEMALE)).toBe('כפתה');
  expect(genderize('כפ/תה', Mode.MALE)).toBe('כפה');

  expect(genderize('הלווה/תה', Mode.FEMALE)).toBe('הלוותה');
  expect(genderize('הלווה/תה', Mode.MALE)).toBe('הלווה');

  expect(genderize('יקירי/תי', Mode.FEMALE)).toBe('יקירתי');
  expect(genderize('יקירי/תי', Mode.MALE)).toBe('יקירי');

  expect(genderize('אהובי/תי', Mode.FEMALE)).toBe('אהובתי');
  expect(genderize('אהובי/תי', Mode.MALE)).toBe('אהובי');

  expect(genderize('דודי/תי', Mode.FEMALE)).toBe('דודתי');
  expect(genderize('דודי/תי', Mode.MALE)).toBe('דודי');

  expect(genderize('שלו/ה', Mode.FEMALE)).toBe('שלה');
  expect(genderize('שלו/ה', Mode.MALE)).toBe('שלו');

  expect(genderize('מחקריו/ה', Mode.FEMALE)).toBe('מחקריה');
  expect(genderize('מחקריו/ה', Mode.MALE)).toBe('מחקריו');
  expect(genderize('מחקריו/יה', Mode.FEMALE)).toBe('מחקריה');
  expect(genderize('מחקריו/יה', Mode.MALE)).toBe('מחקריו');

  expect(genderize('מועמדותו/ה', Mode.FEMALE)).toBe('מועמדותה');
  expect(genderize('מועמדותו/ה', Mode.MALE)).toBe('מועמדותו');

  expect(genderize('מועמדותן/ם', Mode.FEMALE)).toBe('מועמדותן');
  expect(genderize('מועמדותן/ם', Mode.MALE)).toBe('מועמדותם');

  expect(genderize('שלכם/ן', Mode.FEMALE)).toBe('שלכן');
  expect(genderize('שלכם/ן', Mode.MALE)).toBe('שלכם');
  expect(genderize('שלכן/ם', Mode.FEMALE)).toBe('שלכן');
  expect(genderize('שלכן/ם', Mode.MALE)).toBe('שלכם');

  expect(genderize('מחקריהם/ן', Mode.FEMALE)).toBe('מחקריהן');
  expect(genderize('מחקריהם/ן', Mode.MALE)).toBe('מחקריהם');
  expect(genderize('מחקריהן/ם', Mode.FEMALE)).toBe('מחקריהן');
  expect(genderize('מחקריהן/ם', Mode.MALE)).toBe('מחקריהם');

  expect(genderize('בגללו/ה', Mode.FEMALE)).toBe('בגללה');
  expect(genderize('בגללו/ה', Mode.MALE)).toBe('בגללו');

  expect(genderize('מינו/ה', Mode.FEMALE)).toBe('מינה');
  expect(genderize('מינו/ה', Mode.MALE)).toBe('מינו');

  expect(genderize('לגביו/ה', Mode.FEMALE)).toBe('לגביה');
  expect(genderize('לגביו/ה', Mode.MALE)).toBe('לגביו');

  // Singular
  expect(genderize('איש/ה', Mode.FEMALE)).toBe('אישה');
  expect(genderize('איש/ה', Mode.MALE)).toBe('איש');
  expect(genderize('איש/ת', Mode.FEMALE)).toBe('אשת');
  expect(genderize('איש/ת', Mode.MALE)).toBe('איש');

  expect(genderize('חרוץ/ה', Mode.FEMALE)).toBe('חרוצה');
  expect(genderize('חרוץ/ה', Mode.MALE)).toBe('חרוץ');

  expect(genderize('חרוץ/צה', Mode.FEMALE)).toBe('חרוצה');
  expect(genderize('חרוץ/צה', Mode.MALE)).toBe('חרוץ');
  expect(genderize('מוכן/נה', Mode.FEMALE)).toBe('מוכנה');
  expect(genderize('מוכן/נה', Mode.MALE)).toBe('מוכן');

  expect(genderize('גבוה/ה', Mode.FEMALE)).toBe('גבוהה');
  expect(genderize('גבוה/ה', Mode.MALE)).toBe('גבוה');

  expect(genderize('סטודנט/ית', Mode.FEMALE)).toBe('סטודנטית');
  expect(genderize('סטודנט/ית', Mode.MALE)).toBe('סטודנט');

  expect(genderize('יזמ/ית', Mode.FEMALE)).toBe('יזמית');
  expect(genderize('יזמ/ית', Mode.MALE)).toBe('יזם');
  expect(genderize('יזם/ית', Mode.FEMALE)).toBe('יזמית');
  expect(genderize('יזם/ית', Mode.MALE)).toBe('יזם');
  expect(genderize('יזמ/ת', Mode.FEMALE)).toBe('יזמת');
  expect(genderize('יזמ/ת', Mode.MALE)).toBe('יזם');
  expect(genderize('יזם/ת', Mode.FEMALE)).toBe('יזמת');
  expect(genderize('יזם/ת', Mode.MALE)).toBe('יזם');

  expect(genderize('מומחה/ית', Mode.FEMALE)).toBe('מומחית');
  expect(genderize('מומחה/ית', Mode.MALE)).toBe('מומחה');

  expect(genderize('חוקר/ת', Mode.FEMALE)).toBe('חוקרת');
  expect(genderize('חוקר/ת', Mode.MALE)).toBe('חוקר');

  expect(genderize('חבר/ה', Mode.FEMALE)).toBe('חברה');
  expect(genderize('חבר/ה', Mode.MALE)).toBe('חבר');

  expect(genderize('חבר/ת סגל', Mode.FEMALE)).toBe('חברת סגל');
  expect(genderize('חבר/ת סגל', Mode.MALE)).toBe('חבר סגל');

  expect(genderize('רואה/ת חשבון', Mode.FEMALE)).toBe('רואת חשבון');
  expect(genderize('רואה/ת חשבון', Mode.MALE)).toBe('רואה חשבון');

  expect(genderize('מנקה/ת בתים', Mode.FEMALE)).toBe('מנקת בתים');
  expect(genderize('מנקה/ת בתים', Mode.MALE)).toBe('מנקה בתים');

  expect(genderize('מורה פרטי/ת', Mode.FEMALE)).toBe('מורה פרטית');
  expect(genderize('מורה פרטי/ת', Mode.MALE)).toBe('מורה פרטי');

  expect(genderize('עוזר/ת אישי/ת', Mode.FEMALE)).toBe('עוזרת אישית');
  expect(genderize('עוזר/ת אישי/ת', Mode.MALE)).toBe('עוזר אישי');

  expect(genderize('מכונאי/ת', Mode.FEMALE)).toBe('מכונאית');
  expect(genderize('מכונאי/ת', Mode.MALE)).toBe('מכונאי');

  expect(genderize('שומר/ת', Mode.FEMALE)).toBe('שומרת');
  expect(genderize('שומר/ת', Mode.MALE)).toBe('שומר');

  expect(genderize('צלמ/ת', Mode.FEMALE)).toBe('צלמת');
  expect(genderize('צלמ/ת', Mode.MALE)).toBe('צלם');
  expect(genderize('צלם/ת', Mode.FEMALE)).toBe('צלמת');
  expect(genderize('צלם/ת', Mode.MALE)).toBe('צלם');

  expect(genderize('ישראלי/ת', Mode.FEMALE)).toBe('ישראלית');
  expect(genderize('ישראלי/ת', Mode.MALE)).toBe('ישראלי');

  expect(genderize('ארגנטינאי/ת', Mode.FEMALE)).toBe('ארגנטינאית');
  expect(genderize('ארגנטינאי/ת', Mode.MALE)).toBe('ארגנטינאי');

  expect(genderize('צרפתי/ת', Mode.FEMALE)).toBe('צרפתית');
  expect(genderize('צרפתי/ת', Mode.MALE)).toBe('צרפתי');

  expect(genderize('ברברי/ת', Mode.FEMALE)).toBe('ברברית');
  expect(genderize('ברברי/ת', Mode.MALE)).toBe('ברברי');
  expect(genderize('ברבארי/ת', Mode.FEMALE)).toBe('ברבארית');
  expect(genderize('ברבארי/ת', Mode.MALE)).toBe('ברבארי');

  expect(genderize('יהודי/ת', Mode.FEMALE)).toBe('יהודית');
  expect(genderize('יהודי/ת', Mode.MALE)).toBe('יהודי');
  expect(genderize('יהודי/ה', Mode.FEMALE)).toBe('יהודיה');
  expect(genderize('יהודי/ה', Mode.MALE)).toBe('יהודי');

  // Plural
  expect(genderize('חיים/ות', Mode.FEMALE)).toBe('חיות');
  expect(genderize('חיים/ות', Mode.MALE)).toBe('חיים');

  expect(genderize('טריים/ות', Mode.FEMALE)).toBe('טריות');
  expect(genderize('טריים/ות', Mode.MALE)).toBe('טריים');

  expect(genderize('פנויים/ות', Mode.FEMALE)).toBe('פנויות');
  expect(genderize('פנויים/ות', Mode.MALE)).toBe('פנויים');

  expect(genderize('ערביים/ות', Mode.FEMALE)).toBe('ערביות');
  expect(genderize('ערביים/ות', Mode.MALE)).toBe('ערביים');

  expect(genderize('סטודנטים/ות', Mode.FEMALE)).toBe('סטודנטיות');
  expect(genderize('סטודנטים/ות', Mode.MALE)).toBe('סטודנטים');
  expect(genderize('סטודנטים/יות', Mode.FEMALE)).toBe('סטודנטיות');
  expect(genderize('סטודנטים/יות', Mode.MALE)).toBe('סטודנטים');

  expect(genderize('מאסטרים/ות', Mode.FEMALE)).toBe('מאסטריות');
  expect(genderize('מאסטרים/ות', Mode.MALE)).toBe('מאסטרים');

  expect(genderize('יזמים/ות', Mode.FEMALE)).toBe('יזמיות');
  expect(genderize('יזמים/ות', Mode.MALE)).toBe('יזמים');

  expect(genderize('מומחים/ות', Mode.FEMALE)).toBe('מומחיות');
  expect(genderize('מומחים/ות', Mode.MALE)).toBe('מומחים');

  expect(genderize('עורכים/ות', Mode.FEMALE)).toBe('עורכות');
  expect(genderize('עורכים/ות', Mode.MALE)).toBe('עורכים');

  expect(genderize('שופטים/ות', Mode.FEMALE)).toBe('שופטות');
  expect(genderize('שופטים/ות', Mode.MALE)).toBe('שופטים');

  expect(genderize('בעלות/י', Mode.FEMALE)).toBe('בעלות');
  expect(genderize('בעלות/י', Mode.MALE)).toBe('בעלי');
  expect(genderize('בעלי/ות', Mode.FEMALE)).toBe('בעלות');
  expect(genderize('בעלי/ות', Mode.MALE)).toBe('בעלי');
  expect(genderize('בעלים/ות', Mode.FEMALE)).toBe('בעלות');
  expect(genderize('בעלים/ות', Mode.MALE)).toBe('בעלים');

  expect(genderize('מעצבי/ות־על', Mode.FEMALE)).toBe('מעצבות־על');
  expect(genderize('מעצבי/ות־על', Mode.MALE)).toBe('מעצבי־על');

  expect(genderize('רואי/ות חשבון', Mode.FEMALE)).toBe('רואות חשבון');
  expect(genderize('רואי/ות חשבון', Mode.MALE)).toBe('רואי חשבון');

  expect(genderize('מנקי/ות בתים', Mode.FEMALE)).toBe('מנקות בתים');
  expect(genderize('מנקי/ות בתים', Mode.MALE)).toBe('מנקי בתים');

  expect(genderize('מורים/ות פרטיים/ות', Mode.FEMALE)).toBe('מורות פרטיות');
  expect(genderize('מורים/ות פרטיים/ות', Mode.MALE)).toBe('מורים פרטיים');

  expect(genderize('עוזרים/ות אישיים/ות', Mode.FEMALE)).toBe('עוזרות אישיות');
  expect(genderize('עוזרים/ות אישיים/ות', Mode.MALE)).toBe('עוזרים אישיים');

  expect(genderize('עוזרות/ים אישיות/ים', Mode.FEMALE)).toBe('עוזרות אישיות');
  expect(genderize('עוזרות/ים אישיות/ים', Mode.MALE)).toBe('עוזרים אישיים');

  expect(genderize('מכונאים/ות', Mode.FEMALE)).toBe('מכונאיות');
  expect(genderize('מכונאים/ות', Mode.MALE)).toBe('מכונאים');

  expect(genderize('שומרים/ות', Mode.FEMALE)).toBe('שומרות');
  expect(genderize('שומרים/ות', Mode.MALE)).toBe('שומרים');

  expect(genderize('צלמים/ות', Mode.FEMALE)).toBe('צלמות');
  expect(genderize('צלמים/ות', Mode.MALE)).toBe('צלמים');
  expect(genderize('צלמים/יות', Mode.FEMALE)).toBe('צלמיות');
  expect(genderize('צלמים/יות', Mode.MALE)).toBe('צלמים');

  expect(genderize('ישראלים/ות', Mode.FEMALE)).toBe('ישראליות');
  expect(genderize('ישראלים/ות', Mode.MALE)).toBe('ישראלים');
  expect(genderize('ישראליים/ות', Mode.FEMALE)).toBe('ישראליות');
  expect(genderize('ישראליים/ות', Mode.MALE)).toBe('ישראליים');

  expect(genderize('ברברים/ות', Mode.FEMALE)).toBe('ברבריות');
  expect(genderize('ברברים/ות', Mode.MALE)).toBe('ברברים');
  expect(genderize('ברבארים/ות', Mode.FEMALE)).toBe('ברבאריות');
  expect(genderize('ברבארים/ות', Mode.MALE)).toBe('ברבארים');

  expect(genderize('סחים/ות', Mode.FEMALE)).toBe('סחיות');
  expect(genderize('סחים/ות', Mode.MALE)).toBe('סחים');
  expect(genderize('סאחים/ות', Mode.FEMALE)).toBe('סאחיות');
  expect(genderize('סאחים/ות', Mode.MALE)).toBe('סאחים');

  expect(genderize('ח"כים/ות', Mode.FEMALE)).toBe('ח"כיות');
  expect(genderize('ח"כים/ות', Mode.MALE)).toBe('ח"כים');

  expect(genderize('משת”פים/ות', Mode.FEMALE)).toBe('משת”פיות');
  expect(genderize('משת”פים/ות', Mode.MALE)).toBe('משת”פים');

  expect(genderize('כשהגננים/ות', Mode.FEMALE)).toBe('כשהגננות');
  expect(genderize('כשהגננים/ות', Mode.MALE)).toBe('כשהגננים');

  expect(genderize('תל אביבים/ות', Mode.FEMALE)).toBe('תל אביביות');
  expect(genderize('תל אביבים/ות', Mode.MALE)).toBe('תל אביבים');
  expect(genderize('תל־אביבים/ות', Mode.FEMALE)).toBe('תל־אביביות');
  expect(genderize('תל־אביבים/ות', Mode.MALE)).toBe('תל־אביבים');

  expect(genderize('ברברים/ות', Mode.FEMALE)).toBe('ברבריות');
  expect(genderize('ברברים/ות', Mode.MALE)).toBe('ברברים');
  expect(genderize('ברבארים/ות', Mode.FEMALE)).toBe('ברבאריות');
  expect(genderize('ברבארים/ות', Mode.MALE)).toBe('ברבארים');

  expect(genderize('סחים/ות', Mode.FEMALE)).toBe('סחיות');
  expect(genderize('סחים/ות', Mode.MALE)).toBe('סחים');
  expect(genderize('סאחים/ות', Mode.FEMALE)).toBe('סאחיות');
  expect(genderize('סאחים/ות', Mode.MALE)).toBe('סאחים');

  expect(genderize('ח"כים/ות', Mode.FEMALE)).toBe('ח"כיות');
  expect(genderize('ח"כים/ות', Mode.MALE)).toBe('ח"כים');

  expect(genderize('משת”פים/ות', Mode.FEMALE)).toBe('משת”פיות');
  expect(genderize('משת”פים/ות', Mode.MALE)).toBe('משת”פים');

  expect(genderize('כשהגננים/ות', Mode.FEMALE)).toBe('כשהגננות');
  expect(genderize('כשהגננים/ות', Mode.MALE)).toBe('כשהגננים');

  expect(genderize('ארגנטינאים/ות', Mode.FEMALE)).toBe('ארגנטינאיות');
  expect(genderize('ארגנטינאים/ות', Mode.MALE)).toBe('ארגנטינאים');

  expect(genderize('צרפתים/ות', Mode.FEMALE)).toBe('צרפתיות');
  expect(genderize('צרפתים/ות', Mode.MALE)).toBe('צרפתים');

  expect(genderize('אחיינים/ות', Mode.FEMALE)).toBe('אחייניות');
  expect(genderize('אחיינים/ות', Mode.MALE)).toBe('אחיינים');

  expect(genderize('הודים/ות', Mode.FEMALE)).toBe('הודיות');
  expect(genderize('הודים/ות', Mode.MALE)).toBe('הודים');
  expect(genderize('יהודים/ות', Mode.FEMALE)).toBe('יהודיות');
  expect(genderize('יהודים/ות', Mode.MALE)).toBe('יהודים');
  expect(genderize('יהודיים/ות', Mode.FEMALE)).toBe('יהודיות');
  expect(genderize('יהודיים/ות', Mode.MALE)).toBe('יהודיים');

  expect(genderize('קלפטומנים/ות', Mode.FEMALE)).toBe('קלפטומניות');
  expect(genderize('קלפטומנים/ות', Mode.MALE)).toBe('קלפטומנים');
  expect(genderize('קלפטומנים/יות', Mode.FEMALE)).toBe('קלפטומניות');
  expect(genderize('קלפטומנים/יות', Mode.MALE)).toBe('קלפטומנים');

  expect(genderize('שפים/ות', Mode.FEMALE)).toBe('שפיות');
  expect(genderize('שפים/ות', Mode.MALE)).toBe('שפים');
  expect(genderize('מכשפים/ות', Mode.FEMALE)).toBe('מכשפות');
  expect(genderize('מכשפים/ות', Mode.MALE)).toBe('מכשפים');

  expect(genderize('שווים/ות, שוויםות, שוות/ים, שווי/ות זכויות', Mode.FEMALE)).toBe('שוות, שוות, שוות, שוות זכויות');
  expect(genderize('שווים/ות, שוויםות, שוות/ים, שווי/ות זכויות', Mode.MALE)).toBe('שווים, שווים, שווים, שווי זכויות');
});
