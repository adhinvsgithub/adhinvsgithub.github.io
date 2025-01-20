document.getElementById('downloadButton').addEventListener('click', function() {
    const resumeContent = `
        John Doe
        Web Developer
        Email: john.doe@example.com
        Phone: (123) 456-7890
        Location: New York, USA

        Skills:
        - HTML5, CSS3, JavaScript
        - React, Node.js
        - Responsive Web Design
        - Version Control (Git, GitHub)
        - Problem Solving & Debugging

        Experience:
        Front-End Developer - ABC Company (June 2022 - Present)
        - Developing and maintaining user interfaces for web applications
        - Collaborating with the back-end team to integrate APIs
        - Improving web performance and optimizing user experience

        Junior Web Developer - XYZ Corp (Jan 2020 - May 2022)
        - Worked on building responsive websites using HTML, CSS, and JavaScript
        - Implemented interactive features like forms, modals, and carousels
        - Fixed bugs and provided technical support for website users

        Education:
        Bachelor of Science in Computer Science
        University of Example - Graduated: 2019
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.txt';
    link.click();
});
