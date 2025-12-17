function initAnimateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      const el = entry.target;
      const isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        el.classList.add('animate');
        
        // Remove classes when animation ends
        el.addEventListener('animationend', function handler() {
          el.classList.remove('animate-on-scroll', 'animate');
          obs.unobserve(el);
          el.removeEventListener('animationend', handler);
        });
      } else if (isAboveViewport(el)) {
        el.classList.remove('animate-on-scroll', 'animate');
        obs.unobserve(el);
      }
    });
  }, {
    threshold: 0,
    rootMargin: '0px 0px -15% 0px'
  });
  elements.forEach(el => observer.observe(el));
}

function isAboveViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < 0;
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initAnimateOnScroll();
    }, 300);
});