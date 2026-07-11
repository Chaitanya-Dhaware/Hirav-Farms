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
// Lenis Smooth Inertia Scroll Setup
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

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ==========================================================================
// Custom Follower Cursor
// ==========================================================================
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('custom-cursor-follower');

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
});

gsap.ticker.add(() => {
  posX += (mouseX - posX) * 0.15;
  posY += (mouseY - posY) * 0.15;
  follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
});

// ==========================================================================
// Mobile Nav Toggle
// ==========================================================================
const menuToggle = document.getElementById('menu-toggle');
const headerNav = document.getElementById('header-nav');
menuToggle.addEventListener('click', () => {
  headerNav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// ==========================================================================
// Header Scroll State
// ==========================================================================
const header = document.getElementById('header');
ScrollTrigger.create({
  start: 'top -50',
  onEnter: () => header.classList.add('scrolled'),
  onLeaveBack: () => header.classList.remove('scrolled'),
});

// ==========================================================================
// Hover listeners for cursor — called after each page render
// ==========================================================================
function updateHoverListeners() {
  const hoverables = document.querySelectorAll('a, button, .why-card, .product-card, .blog-card, .gallery-item, .plant-tab-btn, input, textarea');
  hoverables.forEach(item => {
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

// Page title map
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
  // Strip the leading `#` to get `/#/about` → `/about`
  const path = hash.replace('#', '') || '/';
  return path;
}

function updateActiveNav(path) {
  const navLinks = document.querySelectorAll('#header-nav a');
  navLinks.forEach(link => {
    link.classList.remove('nav-active');
    const linkPath = link.getAttribute('href').replace('/#', '') || '/';
    if (linkPath === path || (path === '/' && linkPath === '/')) {
      link.classList.add('nav-active');
    }
  });
}

let isNavigating = false;
const overlay = document.getElementById('page-transition-overlay');
const appEl = document.querySelector('#app');

async function navigate(path) {
  if (isNavigating) return;
  isNavigating = true;

  // Fade in overlay
  gsap.to(overlay, { opacity: 1, duration: 0.18, ease: 'power2.in' });

  await new Promise(r => setTimeout(r, 180));

  // Kill all existing ScrollTrigger instances to prevent leaks
  ScrollTrigger.getAll().forEach(t => t.kill());

  // Scroll to top immediately
  lenis.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);

  // Find the page module (fallback to home)
  const page = routes[path] || routes['/'];

  // Inject page HTML
  appEl.innerHTML = page.html();

  // Update meta title
  document.title = pageTitles[path] || pageTitles['/'];

  // Refresh hover listeners
  updateHoverListeners();

  // Close mobile nav if open
  headerNav.classList.remove('active');
  menuToggle.classList.remove('active');

  // Update active nav link
  updateActiveNav(path);

  // Let the DOM paint
  await new Promise(r => requestAnimationFrame(r));
  await new Promise(r => requestAnimationFrame(r));

  // Refresh ScrollTrigger with new layout
  ScrollTrigger.refresh();

  // Run page-specific animations
  page.init(gsap, ScrollTrigger, lenis, MotionPathPlugin);

  // Fade out overlay
  gsap.to(overlay, { opacity: 0, duration: 0.35, ease: 'power2.out' });

  isNavigating = false;
}

// Handle hash changes (back/forward, link clicks)
window.addEventListener('hashchange', () => {
  navigate(getPath());
});

// Handle logo click → home
document.getElementById('header-logo').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '#/';
});

// Intercept all nav link clicks for smooth SPA transitions
document.getElementById('header-nav').addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (href && href.startsWith('/#/')) {
    e.preventDefault();
    const newPath = href.replace('/#', '') || '/';
    if (window.location.hash !== '#' + newPath) {
      window.location.hash = '#' + newPath;
    } else {
      // Same page re-navigate: scroll to top
      lenis.scrollTo(0, { duration: 0.8 });
    }
  }
});

// Initial page load
navigate(getPath());
