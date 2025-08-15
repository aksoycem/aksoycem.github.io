document.addEventListener('DOMContentLoaded', () => {
  // Mobil menü
  const btn = document.getElementById('mobile-menu');
  const nav = document.getElementById('navbar');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }

  // Reveal
  const obs = new IntersectionObserver((entries, o)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('active'); o.unobserve(e.target); }});
  }, {threshold: .15});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

  // Footer yıl
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
});
