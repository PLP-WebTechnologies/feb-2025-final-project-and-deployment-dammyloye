// Form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
        alert('Invalid email address.');
    } else {
        alert('Form submitted successfully!');
    }
});

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Learn more button
const learnMoreButton = document.getElementById('learn-more');
const moreInfoDiv = document.getElementById('more-info');

learnMoreButton.addEventListener('click', () => {
    if (moreInfoDiv.style.display === 'none') {
        moreInfoDiv.style.display = 'block';
        learnMoreButton.textContent = 'Show Less';
    } else {
        moreInfoDiv.style.display = 'none';
        learnMoreButton.textContent = 'Learn More';
    }
});

// Responsive navigation
const navToggle = document.createElement('button');
navToggle.textContent = 'Menu';
document.querySelector('header').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});

// Image gallery lightbox effect
const images = document.querySelectorAll('.image-gallery img');

images.forEach((image) => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <img src="${image.src}" alt="${image.alt}">
            <span class="close">&times;</span>
        `;
        document.body.appendChild(lightbox);

        lightbox.querySelector('.close').addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
