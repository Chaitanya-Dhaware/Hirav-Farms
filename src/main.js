import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Lenis from 'lenis';

// Page modules
import * as homePage from './pages/home.js';
import * as aboutPage from './pages/about.js';
import * as whyPage from './pages/why-hirav-farms.js';
import * as journeyPage from './pages/journey.js';
import * as productsPage from './pages/products.js';
import * as sustainabilityPage from './pages/sustainability.js';
import * as storiesPage from './pages/stories.js';
import * as contactPage from './pages/contact.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// ==========================================================================
// Lenis smooth scrolling
// Use GSAP's ticker as the single animation loop. Running a second
// requestAnimationFrame loop calls lenis.raf() twice per frame.
// ==========================================================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
  infinite: false,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// ==========================================================================
// Custom follower cursor
// ==========================================================================
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('custom-cursor-follower');

let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

if (cursor || follower) {
  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    if (cursor) {
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  });

  if (follower) {
    gsap.ticker.add(() => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;
      follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    });
  }
}

// ==========================================================================
// Mobile navigation
// ==========================================================================
const menuToggle = document.getElementById('menu-toggle');
const headerNav = document.getElementById('header-nav');

function closeMobileNav() {
  headerNav?.classList.remove('active');
  menuToggle?.classList.remove('active');
  menuToggle?.setAttribute('aria-expanded', 'false');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = headerNav?.classList.toggle('active') ?? false;
  menuToggle.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

// ==========================================================================
// Header scroll state
// Re-created after route changes because page navigation clears page triggers.
// ==========================================================================
const header = document.getElementById('header');

function setupHeaderScrollTrigger() {
  if (!header) return;

  ScrollTrigger.create({
    start: 'top -50',
    onEnter: () => header.classList.add('scrolled'),
    onLeaveBack: () => header.classList.remove('scrolled'),
  });
}

// ==========================================================================
// Hover listeners — called after each page render
// ==========================================================================
function updateHoverListeners() {
  const hoverables = document.querySelectorAll(
    'a, button, .why-card, .product-card, .blog-card, .gallery-item, .plant-tab-btn, input, textarea'
  );

  hoverables.forEach((item) => {
    item.addEventListener('mouseenter', () => document.body.classList.add('hovering-link'));
    item.addEventListener('mouseleave', () => document.body.classList.remove('hovering-link'));
  });
}

// ==========================================================================
// Router
// ==========================================================================
const routes = {
  '/': homePage,
  '/about': aboutPage,
  '/why-hirav-farms': whyPage,
  '/journey': journeyPage,
  '/products': productsPage,
  '/sustainability': sustainabilityPage,
  '/stories': storiesPage,
  '/contact': contactPage,
};

const pageTitles = {
  '/': 'Hirav Farms | Pure Milk. Pure Farming. Pure Trust.',
  '/about': 'About Hirav Farms | Our Story & Values',
  '/why-hirav-farms': 'Why Hirav Farms | Dairy Purity Standards',
  '/journey': 'Farm to Family Journey | Hirav Farms',
  '/products': 'Dairy Products | Gaudai by Hirav Farms',
  '/sustainability': 'Sustainability | Hirav Farms Ecological Commitments',
  '/stories': 'Farmer Stories & Reviews | Hirav Farms',
  '/contact': 'Contact Hirav Farms | Get In Touch',
};

function getPath() {
  const hash = window.location.hash || '#/';
  return hash.replace('#', '') || '/';
}

function updateActiveNav(path) {
  document.querySelectorAll('#header-nav a').forEach((link) => {
    link.classList.remove('nav-active');
    const href = link.getAttribute('href') || '';
    const linkPath = href.replace('/#', '') || '/';

    if (linkPath === path) {
      link.classList.add('nav-active');
    }
  });
}

let isNavigating = false;
let queuedPath = null;
const overlay = document.getElementById('page-transition-overlay');
const appEl = document.querySelector('#app');

async function navigate(path) {
  // Preserve the latest requested destination instead of silently dropping
  // navigation events while a transition is already running.
  if (isNavigating) {
    queuedPath = path;
    return;
  }

  isNavigating = true;

  try {
    if (overlay) {
      gsap.to(overlay, { opacity: 1, duration: 0.18, ease: 'power2.in' });
    }

    await new Promise((resolve) => setTimeout(resolve, 180));

    // Clear page-specific triggers, then restore the persistent header trigger.
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    setupHeaderScrollTrigger();

    lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    const page = routes[path] || routes['/'];

    if (appEl) {
      appEl.innerHTML = page.html();
    }

    document.title = pageTitles[path] || pageTitles['/'];

    updateHoverListeners();
    closeMobileNav();
    updateActiveNav(path);

    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));

    ScrollTrigger.refresh();
    page.init(gsap, ScrollTrigger, lenis, MotionPathPlugin);

    if (overlay) {
      gsap.to(overlay, { opacity: 0, duration: 0.35, ease: 'power2.out' });
    }
  } finally {
    isNavigating = false;

    if (queuedPath !== null) {
      const nextPath = queuedPath;
      queuedPath = null;

      if (nextPath !== path) {
        void navigate(nextPath);
      }
    }
  }
}

// Handle hash changes (back/forward and in-app navigation).
window.addEventListener('hashchange', () => {
  void navigate(getPath());
});

// Handle logo click → home.
document.getElementById('header-logo')?.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.hash = '#/';
});

// Intercept in-app navigation links for smooth SPA transitions.
headerNav?.addEventListener('click', (event) => {
  const link = event.target.closest('a[href]');
  if (!link) return;

  const href = link.getAttribute('href') || '';
  if (!href.startsWith('/#/')) return;

  event.preventDefault();
  const newPath = href.replace('/#', '') || '/';

  if (window.location.hash !== `#${newPath}`) {
    window.location.hash = `#${newPath}`;
  } else {
    lenis.scrollTo(0, { duration: 0.8 });
  }
});

// Initial page load.
void navigate(getPath());
