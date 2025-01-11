// JavaScript to Enhance Portfolio User Experience

// Responsive Navigation Menu
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic Project Cards
const projects = [
    { title: 'Project 1', description: 'Description of project 1.', url: '#' },
    { title: 'Project 2', description: 'Description of project 2.', url: '#' },
    { title: 'Project 3', description: 'Description of project 3.', url: '#' }
];

const projectsContainer = document.querySelector('#projects');
projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description} <a href="${project.url}" target="_blank">View project</a></p>
    `;
    projectsContainer.appendChild(projectDiv);
});

// Form Submission Handling
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

// Responsive Footer Year Update
const footerYear = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footerYear.innerHTML = `&copy; ${currentYear} My Portfolio. All rights reserved.`;
