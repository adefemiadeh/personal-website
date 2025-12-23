// Current Page
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".header-nav a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

// Hamburger
// const hamburger = document.getElementById("hamburger-btn");
// const navLinks = document.getElementById("nav-links");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("show");
// });

const hamburger = document.getElementById("hamburger-btn");
const nav = document.getElementById("nav-links");

/* Toggle menu when hamburger is clicked */
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent bubbling to document
  nav.classList.toggle("show");
});

/* Close menu when clicking outside */
document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("show") &&
    !nav.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    nav.classList.remove("show");
  }
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});