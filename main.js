// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeMobile() {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}
mobileClose.addEventListener('click', closeMobile);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      closeMobile();
    }
  });
});

// Fade-in on scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.wwd-card, .gallery-item, .area-chip').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  obs.observe(el);
});

// Leaflet map — 20-mile radius around Denver
function initMap() {
  const lat = 39.7392, lng = -104.9903;
  const map = L.map('service-map', { center: [lat, lng], zoom: 8, scrollWheelZoom: false });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; CARTO', subdomains: 'abcd', maxZoom: 19
  }).addTo(map);

  const circle = L.circle([lat, lng], {
    radius: 60 * 1609.34, color: '#22a134', weight: 3, opacity: .8,
    fillColor: '#22a134', fillOpacity: .1, dashArray: '8,6'
  }).addTo(map);

  map.fitBounds(circle.getBounds().pad(0.1));

  const pin = L.divIcon({
    className: '', iconSize: [22, 22], iconAnchor: [11, 11],
    html: '<div style="width:22px;height:22px;background:linear-gradient(135deg,#22a134,#5ef06e);border-radius:50%;border:3px solid #fff;box-shadow:0 0 16px rgba(34,161,52,.5)"></div>'
  });

  L.marker([lat, lng], { icon: pin }).addTo(map)
    .bindPopup('<div style="text-align:center;font-family:Inter,sans-serif"><strong>Joscar Turf</strong><br><span style="color:#666;font-size:12px">Fresh Sod Every Day</span><br><a href="tel:7204358409" style="color:#22a134;font-weight:700">(720) 435-8409</a></div>');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initMap, 400));
} else {
  setTimeout(initMap, 400);
}
