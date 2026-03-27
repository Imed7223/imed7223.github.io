// INIT AOS
AOS.init({
duration: 800,
once: true
});

// SCROLL SMOOTH
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({ behavior: 'smooth' });
});
});

console.log("🚀 Portfolio Pro Imed chargé");