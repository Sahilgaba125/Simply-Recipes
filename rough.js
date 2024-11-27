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





const images = ['images/main.jpeg', 'images/recipe-1.jpeg', 'images/recipe-2.jpeg'];
let currentIndex = 0;
const HeroImage = document.querySelector('.hero-image');
const leftArrow = document.querySelector('.left-arrow-container');
const rightArrow = document.querySelector('.right-arrow-container');

// Preload images
const preloadImages = (imageArray) => {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src; // Preload each image
    });
};

preloadImages(images); // Call this function with your images array

// Function to slide the hero image
function updateHeroImage() {
    HeroImage.style.transition = 'none'; // Temporarily remove transition for reset
    HeroImage.style.transform = `translateX(100%)`; // Move off-screen right
    setTimeout(() => {
        HeroImage.src = images[currentIndex];
        HeroImage.style.transition = 'transform 1s ease'; // Smooth slide-in
        HeroImage.style.transform = 'translateX(0)'; // Slide into view
    }, 50); // Small delay to reset transform
}

// Auto-slide function called every 4 seconds
function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateHeroImage();
}

// Event listeners for manual slide navigation
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateHeroImage();
    resetAutoSlide(); // Restart auto-slide interval
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateHeroImage();
    resetAutoSlide(); // Restart auto-slide interval
});

// Start auto-slide after first user interaction or 4 seconds
let autoSlideInterval = setInterval(autoSlide, 10000);

// Reset auto-slide interval after each manual slide navigation
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 10000);
}








const images = ['images/main.jpeg', 'images/recipe-1.jpeg', 'images/recipe-2.jpeg'];
let currentIndex = 0;
const HeroImage = document.querySelector('.hero-image');
const leftArrow = document.querySelector('.left-arrow-container');
const rightArrow = document.querySelector('.right-arrow-container');

// Preload images
const preloadImages = (imageArray) => {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src; // Preload each image
    });
};

preloadImages(images); // Call this function with your images array

// Function to slide the hero image
function updateHeroImage() {
    HeroImage.style.transition = 'none'; // Temporarily remove transition for reset
    HeroImage.style.transform = `translateX(100%)`; // Move off-screen right
    setTimeout(() => {
        HeroImage.src = images[currentIndex];
        HeroImage.style.transition = 'transform 1s ease'; // Smooth slide-in
        HeroImage.style.transform = 'translateX(0)'; // Slide into view
    }, 50); // Small delay to reset transform
}

// Auto-slide function called every 4 seconds
function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateHeroImage();
}

// Event listeners for manual slide navigation
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateHeroImage();
    resetAutoSlide(); // Restart auto-slide interval
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateHeroImage();
    resetAutoSlide(); // Restart auto-slide interval
});

// Start auto-slide after first user interaction or 4 seconds
let autoSlideInterval = setInterval(autoSlide, 10000);

// Reset auto-slide interval after each manual slide navigation
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 10000);
}





// Preload all images for smoother transitions
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

// Function to slide the hero image
function updateHeroImage() {
  HeroImage.style.transition = 'none'; // Temporarily remove transition for reset
  HeroImage.style.transform = `translateX(100%)`; // Move off-screen right
  setTimeout(() => {
      HeroImage.src = images[currentIndex];
      HeroImage.style.transition = 'transform 1s ease'; // Smooth slide-in
      HeroImage.style.transform = 'translateX(0)'; // Slide into view
  }, 50); // Small delay to reset transform
}

// Auto-slide function called every 4 seconds
function autoSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateHeroImage();
}

// Event listeners for manual slide navigation
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateHeroImage();
  resetAutoSlide(); // Restart auto-slide interval
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateHeroImage();
  resetAutoSlide(); // Restart auto-slide interval
});

// Start auto-slide after first user interaction or 4 seconds
let autoSlideInterval = setInterval(autoSlide, 4000);

// Reset auto-slide interval after each manual slide navigation
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 4000);
}




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



const images = ['images/main.jpeg', 'images/recipe-1.jpeg', 'images/recipe-2.jpeg'];
// This array holds the URLs of the images.
let currentIndex = 0;
// keeps track of which image is currently showing. It starts at 0, showing the first image.

const HeroImage = document.querySelector('.hero-image');
const leftArrow = document.querySelector('.left-arrow-container');
const rightArrow = document.querySelector('.right-arrow-container');

// Function to update the hero image
function updateHeroImage() {
    HeroImage.src = images[currentIndex];
}

// Event listeners for arrow clicks
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
     // if (currentIndex < images.length - 1) {
     //  currentIndex = currentIndex + 1;
     //} else {
    //currentIndex = 0;
  updateHeroImage();
});
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
       // if (currentIndex > 0) {
       // currentIndex = currentIndex - 1;
       //} else {
        //   currentIndex = images.length - 1;
       //}
    updateHeroImage();
});

// Initialize with the first image
updateHeroImage();
function addImageListeners() {
  const images = document.querySelectorAll('.recipe-img');
  let currentImage = null; // Track the currently selected image

images.forEach((img) => {
   img.addEventListener('mouseover', () => {
   img.style.border = '5px solid gray'; // Add border on hover
  });

  img.addEventListener('mouseout', () => {
   if (img !== currentImage) { // Remove border if not active
   img.style.border = 'none';
 }
});
});
}
// Call the function to set up the event listeners
addImageListeners();

function addImageListeners() {
   const images = document.querySelectorAll('.recipe-img');
   let currentImage = null; // Track the currently selected image

 images.forEach((img) => {
    img.addEventListener('mouseover', () => {
    img.style.border = '5px solid gray'; // Add border on hover
   });

   img.addEventListener('mouseout', () => {
    if (img !== currentImage) { // Remove border if not active
    img.style.border = 'none';
  }
});
});
}
// Call the function to set up the event listeners
addImageListeners();

function addNavListeners() {
  const navs = document.querySelectorAll('.nav-link');
  let currentNav = null; // Track the currently selected image

 navs.forEach((link) => {
   link.addEventListener('mouseover', () => {
   link.style.border = '2px solid gray'; // Add border on hover
  });

  link.addEventListener('mouseout', () => {
   if (link !== currentNav) { // Remove border if not active
   link.style.border = 'none';
 }
});
});
}
// Call the function to set up the event listeners
addNavListeners();



// Wait for DOM content to fully load to ensure elements are available
document.addEventListener("DOMContentLoaded", () => {

    // Form validation function with conditional check
    const form = document.querySelector(".contact-form");
    console.log("Form found:", form);
  
    if (form) { // Only add the event listener if the form exists
      function validateForm(event) {
        const nameInput = document.querySelector(".name-input");
        const emailInput = document.querySelector(".email-input");
  
        if (!nameInput.value || !emailInput.value) { // If either field is empty, show an alert
          alert("Please fill in both name and email fields!");
          event.preventDefault(); // Prevent form submission if fields are empty
          nameInput.style.border = "3px solid red";
          emailInput.style.border = "3px solid red";
        } else {
          alert("Form submitted successfully!");
        }
      }
      
      form.addEventListener("submit", validateForm); // Listen for the form's submit event
    }
  
    // Hero image swap function with conditional check
    const heroImage = document.querySelector(".about-hero-image");
    console.log("Found heroImage:", heroImage);
  
    if (heroImage) { // Only add the event listener if hero image exists
      function heroImageSwap() {
        const currentSrc = heroImage.getAttribute("src");
  
        if (currentSrc === "images/recipe-1.jpeg") {
          heroImage.setAttribute("src", "images/recipe-3.jpeg");
        } else {
          heroImage.setAttribute("src", "images/recipe-1.jpeg");
        }
      }
      
      heroImage.addEventListener("click", heroImageSwap); // Listen for clicks on the hero image
    }
  
  });
  