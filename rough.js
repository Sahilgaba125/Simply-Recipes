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
  