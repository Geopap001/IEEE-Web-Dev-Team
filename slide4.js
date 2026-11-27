// ============================================================
// Διαφάνεια 4: Συνθήκες, Επαναλήψεις & Συναρτήσεις
// ============================================================

// --- Συνθήκες ---

// if - else
const score = 85;
if (score >= 50) {
    console.log("Επιτυχία");
} else {
    console.log("Αποτυχία");
}

// Τριαδικός Τελεστής
const result = (score >= 50) ? "trueVal" : "falseVal";
console.log(result);


// --- Επαναλήψεις ---

// for loop: for (init; condition; update) {}
for (let i = 0; i < 5; i++) {
    console.log(`Επανάληψη: ${i}`);
}

// .forEach(): DOM, πίνακες & λίστες
const listName = ["HTML", "CSS", "JavaScript"];
listName.forEach(listItem => {
    console.log(listItem);
});


// --- Συναρτήσεις ---

// Arrow function με early return, τοπική μεταβλητή & console.log()
const functionName = (var1, var2) => {
    if (!var1) return; // Early return: σταματάει αμέσως

    let current = 0;   // Τοπική μεταβλητή
    console.log(var1, var2, current);
};

// Κλήση συνάρτησης
functionName("Hello", "World");
