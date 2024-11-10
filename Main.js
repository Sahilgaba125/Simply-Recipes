// 1. Image Swap 2. Form validation. 3. Read more. 4. Hamburger 5. Hero Caraousel.

const images = ['images/main.jpeg', 'images/recipe-1.jpeg', 'images/recipe-2.jpeg'];
let currentIndex = 0;
const HeroImage = document.querySelector('.hero-image');
const leftArrow = document.querySelector('.left-arrow-container');
const rightArrow = document.querySelector('.right-arrow-container');

// Function to update the hero image with sliding effect
function updateHeroImage() {
    HeroImage.style.transition = 'none'; // Disable transition for instant position update
    HeroImage.style.transform = `translateX(100%)`; // Start new image off-screen to the right
    setTimeout(() => {
        HeroImage.src = images[currentIndex];
        HeroImage.style.transition = 'transform 1s ease'; // Re-enable smooth transition
        HeroImage.style.transform = `translateX(0)`; // Slide image into view
    }, 50); // Delay allows transform effect to reset
 }

// Auto-slide functionality
function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateHeroImage();
}

// Event listeners for arrow clicks
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateHeroImage();
    resetAutoSlide();
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateHeroImage();
    resetAutoSlide();
});

// Initialize with the first image
updateHeroImage();

// Start auto-slide every 3 seconds
let autoSlideInterval = setInterval(autoSlide, 4000);

// Reset auto-slide timer after manual navigation
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 4000);
}



(function () {
  // Selecting elements
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  // Event listener for the hamburger menu
  hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show-links'); // Toggles 'show-links' class to display or hide the nav links
  // Initial State (display: none;):
  // 
  });
})();

