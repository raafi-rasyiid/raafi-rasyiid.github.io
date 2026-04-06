// script.js
const header = document.getElementById('main-header');
const toggleBtn = document.getElementById('toggle-about');
const descContainer = document.getElementById('desc-container');
const heroLeft = document.querySelector('.hero-left');

let isExpanded = false;

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toggle About Me
toggleBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    
    if (isExpanded) {
        heroLeft.classList.add('active');
        descContainer.classList.remove('collapsed');
        descContainer.classList.add('expanded');
        toggleBtn.textContent = 'Back';
    } else {
        heroLeft.classList.remove('active');
        descContainer.classList.remove('expanded');
        descContainer.classList.add('collapsed');
        toggleBtn.textContent = 'About Me';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Console log
console.log("%c Portfolio Raafi' Rasyiid - Mode Dev Aktif! ", "background: #1B263B; color: #00B4D8; font-weight: bold;");
