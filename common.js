// IIFE

(function () {
  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show-links');
    });
  }

  // Submenu Toggle
  const submenuToggle = document.querySelector('.submenu-toggle');
  const submenu = document.querySelector('.submenu');

  if (submenuToggle && submenu) {
    submenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      submenu.classList.toggle('show-submenu');
    });
  }

  // Dark Mode Toggle
  const toggleButton = document.querySelector("#dark-mode-toggle");
  const body = document.body;

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const theme = body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", theme);
    });
  }

  // Apply Saved Theme
  window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
    }
  });
})();
