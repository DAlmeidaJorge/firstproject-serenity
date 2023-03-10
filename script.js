// Get the form element

// const formButton = document.getElementById('submit-button');

// console.log(formButton);

// function submit (event) {
//   alert('Thank you for reaching out to Serenity,We hope to bring you mental clarity,Our doors are always open wide,With support and care by your side.');
//   event.preventDefault();
// }

// formButton.addEventListener('click', submit)

function display() {
  event.preventDefault();
  alert("Thank you for reaching out to Serenity,"+ "\n"+
  "We hope to bring you mental clarity,"+ "\n" +
  "Our doors are always open wide,With support and care by your side.");
}

// Listen for form submission
// contactForm.button.addEventListener("submit", function(event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();
  
//   // Get the values of the form inputs
//   const name = contactForm.elements.name.value;
//   const email = contactForm.elements.email.value;
//   const address = contactForm.elements.address.value;
//   const message = contactForm.elements.message.value;
  
//   // Do something with the form data
//   alert(`Name: ${name}\nEmail: ${email}\nAddress: ${address}\nMessage: ${message}`);
  
//   // Show an alert message
//   alert('Thank you for reaching out to Serenity,We hope to bring you mental clarity,Our doors are always open wide,With support and care by your side.');
  
//   // // Reset the form
//   // contactForm.reset();
// });
