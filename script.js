// 1. Dark / Light Mode με αποθήκευση στο localStorage
const themeBtn = document.querySelector("#theme-btn");

if (localStorage.getItem("cv-theme") === "dark") {

    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️ Light Mode";

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("cv-theme", isDark ? "dark" : "light");

    console.log(`CV Theme changed to: ${isDark ? "dark" : "light"}`);

});

// 2. Εμφάνιση / Απόκρυψη ενότητας Portfolio & Projects
const toggleProjectsBtn = document.querySelector("#toggle-projects-btn");
const projectsContent = document.querySelector("#projects-content");

toggleProjectsBtn.addEventListener("click", () => {

    projectsContent.classList.toggle("hidden");

    const isHidden = projectsContent.classList.contains("hidden");
    toggleProjectsBtn.textContent = isHidden ? "Show" : "Hide";

    console.log(`Projects section is now: ${isHidden ? "hidden" : "visible"}`);

});

// 3. Κουμπί Εκτύπωσης / Save as PDF
const printBtn = document.querySelector("#print-btn");

printBtn.addEventListener("click", () => {

    console.log("Opening print dialog...");
    window.print();
    
});