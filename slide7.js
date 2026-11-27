// ============================================================
// Διαφάνεια 7: Document Object Model (DOM)
// (Προορίζεται για εκτέλεση σε περιβάλλον browser με HTML)
// ============================================================

// document.getElementById("id"): Βρίσκει το μοναδικό στοιχείο με το συγκεκριμένο ID
const el = document.getElementById("id");

// document.querySelector(".class"): Βρίσκει το πρώτο στοιχείο που ταιριάζει
const firstClassEl = document.querySelector(".class");

// document.querySelectorAll("tag"): Βρίσκει όλα τα στοιχεία που ταιριάζουν και τα επιστρέφει σε λίστα
const allTags = document.querySelectorAll("tag");

// el.parentElement: Βρίσκει τον γονέα του στοιχείου
const parent = el.parentElement;

// el.children: Βρίσκει τα παιδιά του στοιχείου
const children = el.children;

// el.textContent: Αλλάζει απλό κείμενο
el.textContent = "Νέο απλό κείμενο";

// el.innerHTML: Αλλάζει κείμενο και αποδίδει HTML tags
el.innerHTML = "<strong>Κείμενο με HTML</strong>";

// el.classList: .add() για προσθήκη, .remove() για αφαίρεση, .toggle() για εναλλαγή κλάσεων
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("dark-mode");

// .setAttribute() / .getAttribute(): Ορίζει / διαβάζει την ιδιότητα του στοιχείου
el.setAttribute("data-role", "button");
const roleValue = el.getAttribute("data-role");
console.log(roleValue);

// document.createElement("tag"): Δημιουργεί στοιχείο στη μνήμη
const newEl = document.createElement("div");
newEl.textContent = "Νέο στοιχείο";

// parent.appendChild(new): Προσθέτει ένα στοιχείο
parent.appendChild(newEl);

// parent.append(new1, new2): Προσθέτει πολλά στοιχεία ή κείμενο ταυτόχρονα
const new1 = document.createElement("span");
const new2 = document.createElement("span");
parent.append(new1, new2, "και επιπλέον κείμενο");
