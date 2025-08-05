document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Interactive hover effect for sections
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'translateY(-5px)';
      section.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.2), inset 0 0 20px rgba(0, 195, 255, 0.2)';
    });
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'translateY(0)';
      section.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.1), inset 0 0 15px rgba(0, 195, 255, 0.1)';
    });
  });

  // Mobile navigation toggle
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  mobileNavToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-active');
  });
});
