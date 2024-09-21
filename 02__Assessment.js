document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting until validation passes

    // Get form elements
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');

    // Regular Expressions for validation
    const namePattern = /^[a-zA-Z]{3,6}$/;
    const mobilePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validation Logic
    // First Name validation
    if (!namePattern.test(firstName.value)) {
        alert("Please enter a valid First Name (3-6 alphabets, no numbers allowed).");
        firstName.focus();
        return;
    }

    // Last Name validation
    if (lastName.value === "") {
        alert("Please enter your Last Name.");
        lastName.focus();
        return;
    }

    // Email validation
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
    }

    // Mobile validation
    if (!mobilePattern.test(mobile.value)) {
        alert("Please enter a valid 10-digit mobile number.");
        mobile.focus();
        return;
    }

    // If all validations pass, allow form submission
    alert('Form submitted successfully!');
    this.submit();
});
