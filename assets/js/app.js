// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function typeKasichhwa(word, elementId) {
    var i = 0;
    return setInterval(function() {
      document.getElementById(elementId).textContent += word[i];
      i = (i + 1) % word.length;
      if (i === 0) {
        document.getElementById(elementId).textContent = ""; // Clear the typed word
      }
    }, 400); // Adjust typing speed here (milliseconds)
  }

  // Typing 'Kasichhwa' word by word
  window.onload = function() {
    typeKasichhwa("Kasichhwa ", "typing");
  };
