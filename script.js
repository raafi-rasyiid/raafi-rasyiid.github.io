// Page Navigation
const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetPage = link.getAttribute("data-page");

    // Hide all pages
    pages.forEach(page => page.classList.remove("active"));
    links.forEach(link => link.classList.remove("active-link"));

    // Show target page
    // document.getElementById(targetPage).classList.add("active");
    // link.classList.add("active-link");
    const targetElement = document.getElementById(targetPage);
    targetElement.classList.add("active");
    link.classList.add("active-link");

     // Jika klik ABOUT, fetch kontennya jika belum dimuat
     if (targetPage === 'about-contact' && !targetElement.hasChildNodes()) {
      fetch('about-contact.html')
        .then(res => res.text())
        .then(data => {
          targetElement.innerHTML = data;
        })
        .catch(err => console.error('Gagal memuat contact.html', err));
    }
  });
});

// Theme Toggle
const themeToggle = document.getElementById("toggle-theme");
let isDark = false;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  isDark = !isDark;
  themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Show Hijri Date
function showHijriDate() {
  const masehi = moment().format('dddd, D MMMM YYYY');
  const hijri = moment().format('iD iMMMM iYYYY');
  document.getElementById('masehiDate').textContent = `${masehi}`;
  document.getElementById('hijriDate').textContent = `${hijri}`;
}


showHijriDate();
