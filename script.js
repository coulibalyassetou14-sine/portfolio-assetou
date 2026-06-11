const hero = document.querySelector(".hero");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a[href^='#']");
const homeLink = document.getElementById("home-link");

function showSection(targetId) {
    sections.forEach(s => s.classList.remove("active"));
    navLinks.forEach(l => l.classList.remove("active"));

    if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
            target.classList.add("active");
        }
        hero.classList.add("hidden");
    } else {
        hero.classList.remove("hidden");
    }
}

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        this.classList.add("active");
        showSection(targetId);
    });
});

homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    showSection(null);
});
