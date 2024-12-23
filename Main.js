// 1.Form valid. 2.Faq 3.Hamburger 4.Slider. 5.Scroll-animation. 6.Dark-mode 7.Page fade-out

const recipes = document.querySelectorAll('.recipe');

// basic syntax for IntersectionObserver / browser API for scroll-based animations

// const observer = new IntersectionObserver(
  // (entries) => { ... }, // Callback function = Callback: Function that gets called when 
  // observed elements intersect with the viewport.
  // { ... } // Options object= Settings like how much of an element must be visible to trigger
  // the callback.
// );

// new IntersectionObserver(callback, options);

// Create IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Dynamically stagger animations as elements enter viewport
        entry.target.style.animationDelay = `${index * 0.2}s`;
        // By applying increasing delays (index * 0.2s), each element animates in sequence as 
        // it enters the viewport. Without this, all elements would animate at once, which can //
        // look chaotic.
        entry.target.style.animationPlayState = 'running'; // Ensure animation runs only when class is added
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% of the element is visible
    rootMargin: "0px 0px -20% 0px", // Fine-tune trigger based on viewport
  }
);

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

// https://chatgpt.com/c/675696a3-5f5c-8000-86d6-3457540ff373
// "calculate new positions based on currentIndex," which is the index of the current image in the array of images.
// The modulus operator (%) is used often in loops, indexing, and circular/rotating logic, 
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
  // % ensures values "wrap around" a range, which is helpful for creating circular or continuous logic 
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