const form = document.querySelector(".contact-form");
   
   function validateForm(event) {
   const nameInput = document.querySelector(".name-input");
   const emailInput = document.querySelector(".email-input");

   if (nameInput.value === "" || emailInput.value === "") // // If either field is empty, show an alert
  {
    alert("Please fill in both name and email fields Bitch!");
    event.preventDefault();  // Prevent form submission if fields are empty
    nameInput.style.border=  "3px solid red";
    emailInput.style.border= "3px solid red";
  } 
  else {
    alert("Form submitted successfully!");
  }
}
// Select the form element instead of the button
// Listen for the form's submit event  and gives you more control over the submission.Ensures that all validation checks happen before the form is submitted.
  form.addEventListener("submit", validateForm);