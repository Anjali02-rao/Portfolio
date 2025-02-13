// function toggleMenu() {
//   const menu = document.querySelector(".navbar-links");
//   const icon = document.querySelector(".hamburger-icon");

//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

// document
//   .getElementById("scroll-to-top")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll("#navbar-links a");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault(); // Prevent default anchor behavior

//       const targetId = this.getAttribute("href").substring(1); // Get target section id
//       const targetSection = document.getElementById(targetId);

//       if (targetSection) {
//         window.scrollTo({
//           top: targetSection.offsetTop - 80, // Adjust for header height
//           behavior: "smooth", // Enable smooth scrolling
//         });
//       }

//       // Close mobile menu if open
//       toggleMenu();
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll("#navbar-links a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      }
      toggleMenu(); // Close menu on link click (mobile)
    });
  });

  // Toggle hamburger menu
  function toggleMenu() {
    const navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("active");
  }

  document
    .getElementById("hamburger-menu")
    .addEventListener("click", toggleMenu);
  document
    .getElementById("hamburger-menu")
    .addEventListener("mouseover", toggleMenu);

  // Close menu when clicking outside (mobile view)
  document.addEventListener("click", function (event) {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger-menu");
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
      document.getElementById("navbar-links").classList.remove("active");
    }
  });

  // Scroll-to-top button
  const scrollToTopBtn = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
