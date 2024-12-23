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
  
     // Syntax: element.addEventListener("event-name", function-to-run)
    toggleButton.addEventListener("click", () => {
      // Toggle the dark mode class on the body
      body.classList.toggle("dark-mode");
      
      // storing the theme in browser
      // Check if dark mode is active and store the theme in localStorage
      let theme;

      if (body.classList.contains("dark-mode")) {
        theme = "dark";
      } else {
        theme = "light";
      }
    localStorage.setItem("theme", theme);
    // localStorage.setItem("key", "value")=  Stores the theme ("dark" or "light") in the browser so it can be remembered.
    });
  
  
  // Apply saved theme on page load
  window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
    }
  });
  
})();
