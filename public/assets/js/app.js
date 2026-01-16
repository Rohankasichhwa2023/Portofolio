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
  return setInterval(function () {
    document.getElementById(elementId).textContent += word[i];
    i = (i + 1) % word.length;
    if (i === 0) {
      document.getElementById(elementId).textContent = ""; // Clear the typed word
    }
  }, 400); // Adjust typing speed here (milliseconds)
}

// Typing 'Kasichhwa' word by word
window.onload = function () {
  typeKasichhwa("Kasichhwa ", "typing");
  loadGitHubProjects();
};

function loadGitHubProjects() {
  fetch("https://api.github.com/users/Rohankasichhwa2023/repos")
    .then((response) => response.json())
    .then((repos) => {
      const projectsContainer = document.getElementById("projects-container");
      projectsContainer.innerHTML = "";

      repos
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .forEach((repo) => {
          const projectCard = document.createElement("div");
          projectCard.classList.add("project-card");

          /* Thumbnail */
          const thumbnail = document.createElement("img");
          thumbnail.classList.add("project-thumbnail");

          // Image naming rule: repo-name.png
          thumbnail.src = `assets/projects/${repo.name}.png`;
          thumbnail.alt = `${repo.name} screenshot`;

          // Fallback image if screenshot not found
          thumbnail.onerror = function () {
            this.src = "assets/projects/placeholder.png";
          };

          const projectName = document.createElement("h3");
          projectName.textContent = repo.name;

          const projectDescription = document.createElement("p");
          projectDescription.textContent =
            repo.description || "No description provided.";

          const projectLink = document.createElement("a");
          projectLink.href = repo.html_url;
          projectLink.target = "_blank";
          projectLink.textContent = "View on GitHub";

          projectCard.append(
            thumbnail,
            projectName,
            projectDescription,
            projectLink
          );

          projectsContainer.appendChild(projectCard);
        });
    })
    .catch((error) =>
      console.error("Error fetching GitHub repos:", error)
    );
}



const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeToggle.querySelector("ion-icon").setAttribute("name", "sunny-outline");
  }
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle
    .querySelector("ion-icon")
    .setAttribute(
      "name",
      newTheme === "dark" ? "sunny-outline" : "moon-outline"
    );
});
