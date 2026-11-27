// ============================================================
// Διαφάνεια 5: Πίνακες & Αντικείμενα
// ============================================================

// Πίνακας με στοιχεία el0, el1
const array = ["el0", "el1"];
console.log(array);

// array.push("el2"): Προσθέτει το "el2" στον πίνακα
array.push("el2");
console.log(array);

// array.map(): Διατρέχει τον πίνακα array και επιστρέφει έναν νέο newarray
// όπου κάθε element στη θέση (δείκτης) index του πίνακα array έχει αλλάξει
const newarray = array.map((element, index, array) => {
    return `${index}: ${element} (σύνολο: ${array.length})`;
});
console.log(newarray);

// Παράδειγμα .map() παραλείποντας τα index και array
const upperArray = array.map(element => element.toUpperCase());
console.log(upperArray);

// Αντικείμενο obj με γνωρίσματα var1, var2, var3
const obj = {
    var1: "val1",
    var2: null,
    var3: true
};
console.log(obj);
