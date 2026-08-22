'use strict';

const body = document.body;
const toggle = document.querySelector('#theme-toggle');
const label = toggle?.querySelector('.theme-label');
const storedTheme = localStorage.getItem('portfolio-theme');
const preferredTheme = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

function setTheme(theme) {
  body.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  if (!toggle || !label) return;
  const next = theme === 'dark' ? 'light' : 'dark';
  label.textContent = next[0].toUpperCase() + next.slice(1);
  toggle.setAttribute('aria-label', `Switch to ${next} theme`);
}

setTheme(storedTheme || preferredTheme);
toggle?.addEventListener('click', () => setTheme(body.dataset.theme === 'dark' ? 'light' : 'dark'));

const links = [...document.querySelectorAll('.site-nav a')];
const sections = links
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const current = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!current) return;
    links.forEach(link => {
      const active = link.getAttribute('href') === `#${current.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-20% 0px -65%', threshold: [0, 0.25, 0.6] });
  sections.forEach(section => observer.observe(section));
}

document.querySelector('#year').textContent = new Date().getFullYear();
