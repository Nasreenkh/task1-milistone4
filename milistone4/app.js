var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
if (form && resumeDisplayElement) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Retrieve form field values safely
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var contactNoInput = document.getElementById('contact-no');
        var educationInput = document.getElementById('education');
        var experienceInput = document.getElementById('experience');
        var skillsInput = document.getElementById('skills');
        if (!nameInput || !emailInput || !contactNoInput || !educationInput || !skillsInput) {
            console.error("One or more form elements could not be found.");
            return;
        }
        // Get the values from the form
        var name = nameInput.value;
        var email = emailInput.value;
        var contactNo = contactNoInput.value;
        var education = educationInput.value.replace(/\n/g, '<br>'); // Replace newlines with <br> for proper display
        var experience = (experienceInput === null || experienceInput === void 0 ? void 0 : experienceInput.value.replace(/\n/g, '<br>')) || 'N/A'; // Optional chaining for experience
        var skills = skillsInput.value.replace(/\n/g, '<br>');
        // Create the resume HTML dynamically
        var resumeHTML = "\n            <h2><b>Editable Resume</b></h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> <span contenteditable =\"true\">".concat(name, "</span></p>\n            <p><b>Email:</b><span contenteditable =\"true\"> ").concat(email, "</span></p>\n            <p><b>Contact No:</b><span contenteditable =\"true\"> ").concat(contactNo, "</span></p>\n\n            <h3>Education</h3>\n            <p contenteditable =\"true\">").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p contenteditable =\"true\">").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p contenteditable =\"true\">").concat(skills, "</p>\n        ");
        // Inject the resume HTML into the display element
        resumeDisplayElement.innerHTML = resumeHTML;
    });
}
else {
    console.error('Form or Resume Display element is missing from the DOM.');
}
