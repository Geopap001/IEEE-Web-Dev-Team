// ============================================================
// Διαφάνεια 3: Μεταβλητές, Τύποι & Τελεστές
// ============================================================

// --- Μεταβλητές & Τύποι ---

// const / let: Σταθερή / Μεταβλητή τιμή (String, Number, Boolean)
const teamName = "IEEE SB Lamia"; // String (σταθερή)
let memberCount = 25;             // Number (μεταβλητή)
let isActive = true;              // Boolean (μεταβλητή)

// null / undefined: Κενή / Μη ορισμένη τιμή
let emptyValue = null;
let notDefined; // undefined

// parseInt(""): Μετατροπή String σε Number
const parsedNumber = parseInt("42");

// console.log(): Εκτύπωση στην κονσόλα
console.log(teamName, memberCount, isActive);
console.log(emptyValue, notDefined);
console.log(parsedNumber);

// ${}: Template Literal (Ένωση κειμένου με μεταβλητή)
const message = `Ομάδα: ${teamName}, Μέλη: ${memberCount}`;
console.log(message);


// --- Τελεστές & Truthy / Falsy ---

// ===: Σύγκριση τιμών ΚΑΙ τύπων μεταβλητών
console.log(5 === "5"); // false
console.log(5 === 5);   // true

// ==: Σύγκριση τιμών μεταβλητών
console.log(5 == "5");  // true

// &&, ||, !, %: AND, OR, NOT, MOD
const a = true;
const b = false;
console.log(a && b);   // AND -> false
console.log(a || b);   // OR  -> true
console.log(!a);       // NOT -> false
console.log(10 % 3);   // MOD -> 1

// Falsy τιμές: 0, "", null, undefined, false
const falsyZero = 0;
const falsyString = "";
const falsyNull = null;
const falsyUndefined = undefined;
const falsyBoolean = false;
console.log(Boolean(falsyZero), Boolean(falsyString), Boolean(falsyNull), Boolean(falsyUndefined), Boolean(falsyBoolean));

// Default με ||: Επιστρέφει την εφεδρική τιμή αν η πρώτη είναι Falsy
const username = "";
const displayName = username || "Επισκέπτης";
console.log(displayName); // "Επισκέπτης"

// Truthy τιμές: Κενοί πίνακες, κενά αντικείμενα, ό,τι δεν είναι Falsy
const emptyArray = [];
const emptyObject = {};
console.log(Boolean(emptyArray), Boolean(emptyObject), Boolean("Hello"), Boolean(1));
