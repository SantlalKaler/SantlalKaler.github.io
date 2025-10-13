// small UI helpers: year and menu toggle + smooth scrolling
document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
menuBtn && menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('.top-nav');
  if (!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.gap = '10px';
  nav.style.position = 'absolute';
  nav.style.right = '20px';
  nav.style.top = '64px';
  nav.style.background = 'rgba(3,7,15,.85)';
  nav.style.padding = '12px';
  nav.style.borderRadius = '8px';
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
