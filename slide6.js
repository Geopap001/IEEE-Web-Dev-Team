// ============================================================
// Διαφάνεια 6: Χρονόμετρα (Timers)
// ============================================================

// setTimeout(fn, ms): Εκτελεί τη συνάρτηση fn μία φορά μετά από ms ms
const fnOnce = () => {
    console.log("Εκτελέστηκε μία φορά μετά από 2000ms!");
};
setTimeout(fnOnce, 2000);

// setInterval(fn, ms): Εκτελεί τη συνάρτηση fn κάθε ms ms
let count = 0;
const fnRepeat = () => {
    count++;
    console.log(`Επανάληψη #${count}`);

    // clearInterval(timer): Σταματά την επανάληψη
    if (count >= 3) {
        clearInterval(timer);
        console.log("Το χρονόμετρο σταμάτησε.");
    }
};
const timer = setInterval(fnRepeat, 1000);
