// 1. Efek Navbar pas di-scroll
const header = document.getElementById('main-header');

window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// 2. Logika Sederhana buat nyapa di Console (Style IT Staff banget)
console.log("%c Portfolio Raafi' Rasyiid - Mode Dev Aktif! ", "background: #1B263B; color: #00B4D8; font-weight: bold;");

// 3. Smooth Scroll buat menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});
