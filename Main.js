// 1. Image Swap 2. Form validation. 3. Read more. 4. Hamburger 5. Hero Caraousel.

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
      e.preventDefault(); // Prevent the link from navigating
      submenu.classList.toggle('show-submenu');
    });
  })();
  