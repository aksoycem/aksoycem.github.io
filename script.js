// Basit mobil menü kontrolleri
document.addEventListener('DOMContentLoaded', () => {
  // Mobil menü kontrolü
  const menuButton = document.getElementById('mobile-menu');
  const navbar = document.getElementById('navbar');

  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  // Bir bağlantıya tıklandığında menüyü kapat (mobil için)
  const navLinks = navbar.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbar.classList.contains('open')) {
        navbar.classList.remove('open');
      }
    });
  });

  // Bölüm animasyonları için IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.2
  };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
});