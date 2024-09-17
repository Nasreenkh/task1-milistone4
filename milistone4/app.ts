const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

if (form && resumeDisplayElement) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        // Retrieve form field values safely
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const contactNoInput = document.getElementById('contact-no') as HTMLInputElement | null;
        const educationInput = document.getElementById('education') as HTMLTextAreaElement | null;
        const experienceInput = document.getElementById('experience') as HTMLTextAreaElement | null;
        const skillsInput = document.getElementById('skills') as HTMLTextAreaElement | null;

        if (!nameInput || !emailInput || !contactNoInput || !educationInput || !skillsInput) {
            console.error("One or more form elements could not be found.");
            return;
        }

        // Get the values from the form
        const name = nameInput.value;
        const email = emailInput.value;
        const contactNo = contactNoInput.value;
        const education = educationInput.value.replace(/\n/g, '<br>');  // Replace newlines with <br> for proper display
        const experience = experienceInput?.value.replace(/\n/g, '<br>') || 'N/A';  // Optional chaining for experience
        const skills = skillsInput.value.replace(/\n/g, '<br>');

        // Create the resume HTML dynamically
        const resumeHTML = `
            <h2><b>Editable Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> <span contenteditable ="true">${name}</span></p>
            <p><b>Email:</b><span contenteditable ="true"> ${email}</span></p>
            <p><b>Contact No:</b><span contenteditable ="true"> ${contactNo}</span></p>

            <h3>Education</h3>
            <p contenteditable ="true">${education}</p>

            <h3>Experience</h3>
            <p contenteditable ="true">${experience}</p>

            <h3>Skills</h3>
            <p contenteditable ="true">${skills}</p>
        `;

        // Inject the resume HTML into the display element
        resumeDisplayElement.innerHTML = resumeHTML;
    });
} else {
    console.error('Form or Resume Display element is missing from the DOM.');
}
