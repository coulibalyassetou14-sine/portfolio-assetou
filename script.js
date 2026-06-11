const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a[href^='#']");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").slice(1);

        sections.forEach(s => s.classList.remove("active"));
        navLinks.forEach(l => l.classList.remove("active"));

        const target = document.getElementById(targetId);
        if (target) {
            target.classList.add("active");
            this.classList.add("active");
        }
    });
});
