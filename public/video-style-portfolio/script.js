const revealBlocks = document.querySelectorAll('.reveal');
const sectionNodes = document.querySelectorAll('section[id]');
const internalNavLinks = document.querySelectorAll('[data-nav-target]');

function markActiveNav(sectionId) {
  internalNavLinks.forEach((link) => {
    const isActive = link.dataset.navTarget === sectionId;
    link.classList.toggle('is-active', isActive);
  });
}

internalNavLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.dataset.navTarget;
    if (!targetId) return;

    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    event.preventDefault();
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    markActiveNav(targetId);
  });
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -10% 0px',
    },
  );

  revealBlocks.forEach((block) => revealObserver.observe(block));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          markActiveNav(entry.target.id);
        }
      });
    },
    {
      threshold: 0.55,
    },
  );

  sectionNodes.forEach((section) => sectionObserver.observe(section));
} else {
  revealBlocks.forEach((block) => block.classList.add('is-visible'));
}

const initialVisible = window.scrollY > window.innerHeight * 0.5 ? 'janis-md' : 'gateway';
markActiveNav(initialVisible);
