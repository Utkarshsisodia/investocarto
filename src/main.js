import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Select structural elements to fade in
  const targets = document.querySelectorAll('section h2, section h3, section p, section .flex-col > .flex, section .grid > div');
  const heroSection = document.querySelector('main section:first-of-type');
  
  targets.forEach(target => {
    // Avoid elements inside hover groups or the hero section
    if (!target.closest('.group') && target.closest('section') !== heroSection) {
        target.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500', 'ease-out');
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-4');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  targets.forEach(target => {
    if (target.classList.contains('opacity-0')) {
      observer.observe(target);
    }
  });
});
