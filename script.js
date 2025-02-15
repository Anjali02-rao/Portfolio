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

document.querySelectorAll(".github").forEach((img) => {
  img.addEventListener("click", function (event) {
    console.log("GitHub image clicked");
    event.preventDefault();

    const liveDemoLink = this.closest(".links").querySelector(".live-page");

    if (liveDemoLink) {
      console.log("Opening Live Demo: ", liveDemoLink.href);
      window.open(liveDemoLink.href, "_blank");
    } else {
      console.log("No Live Demo link found!");
    }
  });
});
