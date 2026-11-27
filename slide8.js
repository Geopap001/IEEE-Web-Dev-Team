// ============================================================
// Διαφάνεια 8: Events, Web APIs & JSON
// (Προορίζεται για εκτέλεση σε περιβάλλον browser)
// ============================================================

// --- addEventListener() ---
// Συνδέει ενέργειες (click, mouseenter, mouseleave, input) με συναρτήσεις JavaScript

const button = document.querySelector("button");
const inputField = document.querySelector("input");
const form = document.querySelector("form");

// click
button.addEventListener("click", () => {
    console.log("Έγινε κλικ στο κουμπί!");
});

// mouseenter
button.addEventListener("mouseenter", () => {
    console.log("Ο δείκτης μπήκε πάνω από το κουμπί.");
});

// mouseleave
button.addEventListener("mouseleave", () => {
    console.log("Ο δείκτης βγήκε από το κουμπί.");
});

// input
inputField.addEventListener("input", (e) => {
    console.log("Τρέχουσα τιμή:", e.target.value);
});


// --- e.preventDefault() ---
// Ακυρώνει την προεπιλεγμένη συμπεριφορά του browser σε links ή φόρμες
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Η υποβολή της φόρμας αποτράπηκε (χωρίς refresh).");
});


// --- localStorage ---
// Αποθηκεύει δεδομένα στο browser του χρήστη (π.χ. dark theme) για να μη χάνονται με refresh
localStorage.setItem("theme", "dark");
const savedTheme = localStorage.getItem("theme");
console.log("Αποθηκευμένο θέμα:", savedTheme);
localStorage.removeItem("theme");


// --- JSON ---
// Η παγκόσμια μορφή ανταλλαγής δεδομένων στο web (μοιάζει με JS Objects)
const user = {
    name: "IEEE SB Lamia",
    year: 2026,
    active: true
};

// Μετατροπή JS Object σε JSON String
const jsonString = JSON.stringify(user);
console.log(jsonString);

// Μετατροπή JSON String πίσω σε JS Object
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser);
