// Ensure the script runs after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize EmailJS with the provided public key
    emailjs.init("50vDfq5YdrEbpfEy-");

    // Define the function to send an email
    function sendMail() {
        // Collect form data using DOM element references
        const params = {
            name: document.getElementById("name").value, // Get the value from the "name" input field
            email: document.getElementById("email").value, // Get the value from the "email" input field
            subject: document.getElementById("subject").value, // Get the value from the "subject" input field
            message: document.getElementById("message").value, // Get the value from the "message" textarea
        };

        // Use EmailJS to send the collected data
        emailjs
            .send("service_8a9eri9", "template_vdq7srj", params) // Provide service ID, template ID, and parameters
            .then(() => alert("Email Sent Successfully!")) // Alert on successful email sending
            .catch((error) => {
                console.error("Error sending email:", error); // Log the error to the console
                alert("Failed to send email. Please try again."); // Alert on failure
            });
    }

    // Attach the click event handler to the "Send" button
    const sendButton = document.querySelector("button[type='submit']"); // Find the button by its type attribute
    if (sendButton) {
        sendButton.onclick = sendMail; // Assign the sendMail function to the button's onclick event
    } else {
        console.error("Send button not found in the DOM."); // Log an error if the button isn't found
    }
});

// Define the handleScroll function
function handleScroll() {
    console.log('Page is scrolling...');
 
}
// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll, { passive: true });

