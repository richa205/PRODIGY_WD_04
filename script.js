window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.opacity = 1 - window.scrollY / 600;
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff9900';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#333';
    });
});
