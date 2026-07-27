// =========================
// SECTION REVEAL ANIMATION
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);

sections.forEach((section) => {

    observer.observe(section);

});


// =========================
// NAVIGATION LINK CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log("Navigating to:", link.textContent);

    });

});


// =========================
// WELCOME MESSAGE
// =========================

console.log("Welcome to Sambhav's website! 🚀");