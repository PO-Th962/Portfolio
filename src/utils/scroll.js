const NAVBAR_HEIGHT = 80;

// easing function — เร่งช้าแบบ smooth
export const easeInOutQuad = (t) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

// Custom smooth scroll ด้วย requestAnimationFrame
export const smoothScrollTo = (targetY, duration = 900) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  const step = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

export const scrollToSection = (href) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  smoothScrollTo(top);
};
