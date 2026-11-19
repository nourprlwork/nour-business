

// Select the contact form
const contactForm = document.getElementById("contactForm");

// Select the response paragraph
const response = document.getElementById("response");


// Detect when the form is submitted
contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();


    // Get the user's information
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check if the fields are empty
    if (name === "" || email === "" || message === "") {

        response.textContent = "Please complete all fields.";

    }

    else {

        // Display confirmation message
        response.textContent =
            "Thank you, " + name +
            "! Your message has been received.";

        // Clear the form
        contactForm.reset();

    }

});
