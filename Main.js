// 1. Image Swap 2. Form validation. 3. Read more. 4. Hamburger 5. Hero Caraousel.

const recipes = document.querySelectorAll('.recipe');

// Create IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Dynamically stagger animations as elements enter viewport
        entry.target.style.animationDelay = `${index * 0.2}s`;
        entry.target.style.animationPlayState = 'running'; // Ensure animation runs only when class is added
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  },
  {
    threshold: 0.4, // Trigger when 40% of the element is visible
    rootMargin: "0px 0px -20% 0px", // Fine-tune trigger based on viewport
  }
);

console.log('JavaScript is running!');

// Set initial animation state for all recipes
recipes.forEach((recipe) => {
  recipe.style.animationPlayState = 'paused'; // Pause animation initially
  observer.observe(recipe); // Attach observer
});




document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const targetLink = e.currentTarget; // Ensure the correct link element
    const isInternal = targetLink.href.includes(window.location.hostname);
    
    // Check screen size before applying animation
    const isSmallScreen = window.innerWidth < 768;

    if (isInternal && isSmallScreen) { // Only apply fade-out for small screens
      e.preventDefault(); // Prevent default navigation
      document.body.style.animation = "bodyFadeOut 0.3s ease-in-out forwards";

      setTimeout(() => {
        window.location.href = targetLink.href; // Navigate after fade-out completes
      }, 300); // Match the duration of the fade-out animation
    }
  });
});




const images = document.querySelectorAll('.hero-image');
let currentIndex = 0;
const intervalTime = 10000;

function updateImagePosition() {
    images.forEach((img, i) => {
        img.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImagePosition();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImagePosition();
}

// Initialize position
updateImagePosition();

// Auto-slide every 10 seconds
setInterval(nextImage, intervalTime);

// Manual controls
document.querySelector('.left-arrow-container').addEventListener('click', previousImage);
document.querySelector('.right-arrow-container').addEventListener('click', nextImage);




(function () {
  // Elements
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const submenuToggle = document.querySelector('.submenu-toggle');
  const submenu = document.querySelector('.submenu');

  // Toggle hamburger menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
  });

  // Toggle submenu on mobile
  submenuToggle.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    submenu.classList.toggle('show-submenu');
  });
})();

  