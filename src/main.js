import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Lenis from 'lenis';

// Register plugins
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

// Link Lenis to GSAP ScrollTrigger
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

// Hover states for cursor
function updateHoverListeners() {
  const hoverables = document.querySelectorAll('a, button, .why-card, .product-card, .blog-card, .gallery-item, .plant-tab-btn, input, textarea');
  hoverables.forEach(item => {
    item.addEventListener('mouseenter', () => {
      document.body.classList.add('hovering-link');
    });
    item.addEventListener('mouseleave', () => {
      document.body.classList.remove('hovering-link');
    });
  });
}
updateHoverListeners();

// ==========================================================================
// Mobile Nav Toggle
// ==========================================================================
const menuToggle = document.getElementById('menu-toggle');
const headerNav = document.getElementById('header-nav');
menuToggle.addEventListener('click', () => {
  headerNav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close nav when clicking a link
const navLinks = document.querySelectorAll('#header-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerNav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// ==========================================================================
// Header Scroll State Trigger
// ==========================================================================
const header = document.getElementById('header');
ScrollTrigger.create({
  start: 'top -50',
  onEnter: () => header.classList.add('scrolled'),
  onLeaveBack: () => header.classList.remove('scrolled'),
});

// ==========================================================================
// Section 1: Hero Section (Parallax & Counters)
// ==========================================================================
// Background Parallax
gsap.to('#hero-img', {
  yPercent: 15,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  }
});

// Text & Action Animations
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTl.from('#hero-title', {
  y: 60,
  opacity: 0,
  duration: 1.2,
  delay: 0.2
}).from('#hero-subtitle', {
  y: 30,
  opacity: 0,
  duration: 0.8
}, '-=0.8').from('.hero-actions', {
  y: 30,
  opacity: 0,
  duration: 0.8
}, '-=0.6').from('#hero-scroll-indicator', {
  opacity: 0,
  y: -10,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
}, '-=0.2');

// Counter Animations
const counters = document.querySelectorAll('.counter-num');
counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  gsap.fromTo(counter, { textContent: 0 }, {
    textContent: target,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: counter,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    snap: { textContent: 1 },
    onUpdate: function () {
      const current = Math.ceil(counter.textContent);
      counter.innerHTML = current.toLocaleString() + (target === 100 ? '%' : '+');
    }
  });
});

// ==========================================================================
// Section 2: About Section Timeline Progress Drawing
// ==========================================================================
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, idx) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 75%',
    onEnter: () => {
      item.classList.add('active');
      // Draw progress line dynamically
      const progressPercent = ((idx + 1) / timelineItems.length) * 100;
      gsap.to('#timeline-progress', {
        height: `${progressPercent}%`,
        duration: 0.5,
        ease: 'power1.out'
      });
    },
    onLeaveBack: () => {
      item.classList.remove('active');
      const progressPercent = (idx / timelineItems.length) * 100;
      gsap.to('#timeline-progress', {
        height: `${progressPercent}%`,
        duration: 0.5,
        ease: 'power1.out'
      });
    }
  });
});

// ==========================================================================
// Section 3: Why Choose Us Cards reveal
// ==========================================================================
gsap.from('.why-card', {
  opacity: 0,
  y: 50,
  scale: 0.95,
  duration: 0.8,
  stagger: 0.15,
  ease: 'back.out(1.4)',
  scrollTrigger: {
    trigger: '#why-choose',
    start: 'top 75%',
  }
});

// ==========================================================================
// Section 4: Pinned Farm to Home Journey
// ==========================================================================
const journeyWrapper = document.getElementById('journey-wrapper');
const stages = document.querySelectorAll('.journey-stage');

if (journeyWrapper) {
  const horizontalScrollAmount = journeyWrapper.scrollWidth - window.innerWidth;
  
  gsap.to(journeyWrapper, {
    x: -horizontalScrollAmount,
    ease: 'none',
    scrollTrigger: {
      trigger: '#journey-pin',
      pin: true,
      scrub: 0.5,
      start: 'top top',
      end: () => `+=${horizontalScrollAmount}`,
      onUpdate: (self) => {
        // Update progress bar
        const percent = self.progress * 100;
        document.getElementById('journey-progress-bar').style.width = `${percent}%`;
        
        // Activate step dots
        const stepIndex = Math.min(
          Math.floor(self.progress * stages.length),
          stages.length - 1
        );
        document.querySelectorAll('.journey-step-dot').forEach((dot, idx) => {
          if (idx === stepIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    }
  });

  // Clicking dots triggers scroll
  document.querySelectorAll('.journey-step-dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetSlide = parseInt(dot.getAttribute('data-slide'));
      const targetScroll = (targetSlide / (stages.length - 1)) * horizontalScrollAmount;
      
      // Calculate ScrollTrigger scroll top matching the target scroll
      const st = ScrollTrigger.getById('journey-pin-scroll'); // We'll add ID below or use standard scroll
      const trigger = ScrollTrigger.create({
        trigger: '#journey-pin',
        start: 'top top',
        end: () => `+=${horizontalScrollAmount}`
      });
      const triggerStart = trigger.start;
      trigger.kill();
      
      lenis.scrollTo(triggerStart + targetScroll, { duration: 1.2 });
    });
  });
}

// ==========================================================================
// Section 5: Organic Farming SVG growth scroll animations
// ==========================================================================
const farmingScene = document.getElementById('farming-scene');
if (farmingScene) {
  const farmTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#organic-farming',
      start: 'top 80%',
      end: 'bottom 40%',
      scrub: 1,
    }
  });
  
  // Grass grows
  farmTl.from('#grass-blades path', {
    scaleY: 0,
    transformOrigin: 'bottom',
    duration: 1.5,
    stagger: 0.2
  })
  // Tree grows
  .to('#farm-tree', {
    scale: 1,
    duration: 2,
    ease: 'back.out(1.7)'
  }, '-=1.2')
  // Water flows (river offset)
  .to('#river', {
    strokeDashoffset: -100,
    duration: 3,
    ease: 'none'
  }, '-=2')
  // Butterfly flies
  .to('#butterfly', {
    motionPath: {
      path: [{x: 100, y: 200}, {x: 200, y: 120}, {x: 350, y: 180}, {x: 500, y: 80}, {x: 700, y: 150}],
      autoRotate: true
    },
    duration: 3,
  }, '-=2.5');
}

// ==========================================================================
// Section 6: Dairy Plant Tab Logic
// ==========================================================================
const plantData = {
  milking: {
    title: 'Touch-Free Milking',
    desc: 'Our Murrah buffaloes are milked in pristine stalls. The milk flows straight into stainless-steel pipelines without exposure to human touch, dust, or air, guaranteeing absolute sterility.',
    badge: '100% sterile system'
  },
  pasteur: {
    title: 'Rapid Pasteurization',
    desc: 'The milk is pasteurized using high-temperature short-time (HTST) systems. This kills any bacteria while retaining maximum organic nutrients and natural enzymes.',
    badge: 'thermal safety assured'
  },
  packaging: {
    title: 'Sterilised Glass Bottling',
    desc: 'Milk is filled cold into washed, pre-heated, and double-sterilised eco-friendly glass bottles. TAMPER-PROOF capping seals purity inside instantly.',
    badge: 'plastic-free packaging'
  },
  monitoring: {
    title: 'AI-Powered Temperature Check',
    desc: 'Automated digital IoT systems monitor temperatures at every second. If any tank goes above 4.5°C, notifications are sent to dispatch teams instantly.',
    badge: 'real-time IoT control'
  }
};

const tabButtons = document.querySelectorAll('.plant-tab-btn');
const plantInfo = document.getElementById('plant-info-content');
const milkFlowPipe = document.getElementById('milk-flow-pipe');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active
    tabButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    // Add active
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    
    // Animate pipe valve spin and faster milk flow on click
    gsap.to('#plant-rotating-valve', { rotation: '+=360', duration: 0.8 });
    gsap.fromTo(milkFlowPipe, { strokeDashoffset: 30 }, { strokeDashoffset: 0, repeat: 2, duration: 0.5, ease: 'none' });
    
    // Change text content with transition
    const key = btn.id.replace('tab-', '');
    const data = plantData[key];
    
    gsap.to(plantInfo, {
      opacity: 0,
      y: 10,
      duration: 0.25,
      onComplete: () => {
        plantInfo.innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.desc}</p>
          <div class="plant-badge"><i class="fa-solid fa-shield-halved"></i> ${data.badge}</div>
        `;
        gsap.to(plantInfo, { opacity: 1, y: 0, duration: 0.35 });
      }
    });
  });
});

// Continuous milk flow animation
if (milkFlowPipe) {
  gsap.to(milkFlowPipe, {
    strokeDashoffset: -50,
    repeat: -1,
    duration: 2,
    ease: 'none'
  });
}

// ==========================================================================
// Section 7: Laboratory Quality Test Tube filling & Seals
// ==========================================================================
gsap.to('#milk-tube-liquid', {
  height: '85%',
  duration: 2.5,
  ease: 'power1.inOut',
  scrollTrigger: {
    trigger: '#laboratory',
    start: 'top 60%',
  }
});

// Stamp quality seals sequentially
ScrollTrigger.create({
  trigger: '#quality-stamps-container',
  start: 'top 85%',
  onEnter: () => {
    document.querySelectorAll('.quality-stamp').forEach((stamp, i) => {
      setTimeout(() => {
        stamp.classList.add('stamp-active');
      }, i * 350);
    });
  }
});

// ==========================================================================
// Section 8: Products Filtering & Stagger reveal
// ==========================================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    
    gsap.to(productCards, {
      scale: 0.9,
      opacity: 0,
      duration: 0.25,
      stagger: 0.05,
      onComplete: () => {
        productCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
        
        // Stagger back in
        const visibleCards = Array.from(productCards).filter(c => c.style.display !== 'none');
        gsap.to(visibleCards, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out'
        });
      }
    });
  });
});

// Initial Product Cards Entrance
gsap.from('.product-card', {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#products',
    start: 'top 75%'
  }
});

// ==========================================================================
// Section 9: Sustainability Panels
// ==========================================================================
gsap.from('.sus-card', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: '#sustainability',
    start: 'top 80%',
  }
});

// Spin solar panels icon
gsap.to('#sus-solar .sus-icon-container i', {
  rotationY: 360,
  repeat: -1,
  duration: 4,
  ease: 'power1.inOut'
});

// Biogas burner animation
gsap.to('#sus-biogas .sus-icon-container i', {
  scale: 1.15,
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: 'power1.inOut'
});

// ==========================================================================
// Section 10: Farmer Stories typing text quote & stats growth
// ==========================================================================
const farmerQuote = document.getElementById('farmer-quote-text');
if (farmerQuote) {
  const fullQuote = farmerQuote.textContent.trim();
  farmerQuote.textContent = '';
  
  ScrollTrigger.create({
    trigger: '#farmer-stories',
    start: 'top 70%',
    onEnter: () => {
      let index = 0;
      function type() {
        if (index < fullQuote.length) {
          farmerQuote.textContent += fullQuote.charAt(index);
          index++;
          setTimeout(type, 15);
        }
      }
      type();
    }
  });
}

// Income growth graph/stat
gsap.from('#farmer-stat-income', {
  textContent: 0,
  duration: 2.2,
  ease: 'power2.out',
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger: '#farmer-stories',
    start: 'top 75%'
  },
  onUpdate: function () {
    const el = document.getElementById('farmer-stat-income');
    el.innerHTML = '+' + Math.ceil(el.textContent) + '%';
  }
});

// ==========================================================================
// Section 11: Testimonials Carousel Slider
// ==========================================================================
const track = document.getElementById('testimonials-track');
const prevBtn = document.getElementById('prev-testi');
const nextBtn = document.getElementById('next-testi');
let currentSlide = 0;

if (track) {
  const cards = document.querySelectorAll('.testimonial-card');
  const maxSlides = cards.length;
  
  function getCardWidth() {
    return cards[0].offsetWidth + parseInt(window.getComputedStyle(track).gap);
  }
  
  function slideTo(idx) {
    currentSlide = idx;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= maxSlides) currentSlide = maxSlides - 1;
    
    const cardWidth = getCardWidth();
    gsap.to(track, {
      x: -currentSlide * cardWidth,
      duration: 0.6,
      ease: 'power3.out'
    });
  }

  prevBtn.addEventListener('click', () => slideTo(currentSlide - 1));
  nextBtn.addEventListener('click', () => slideTo(currentSlide + 1));
  
  // Listen to resize
  window.addEventListener('resize', () => slideTo(currentSlide));
}

// ==========================================================================
// Section 12: Gallery Stagger Reveal
// ==========================================================================
gsap.from('.gallery-item', {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.1,
  scrollTrigger: {
    trigger: '#gallery',
    start: 'top 75%',
  }
});

// ==========================================================================
// Section 13: Blog Cards Reveal
// ==========================================================================
gsap.from('.blog-card', {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: '#blog',
    start: 'top 80%',
  }
});

// ==========================================================================
// Section 14: Mobile App phone rotation & Screen swap on scroll
// ==========================================================================
const phone = document.getElementById('phone-container');
if (phone) {
  // Rotate phone as it scrolls into view
  gsap.fromTo(phone, {
    rotate: -15,
    y: 100,
    opacity: 0.3
  }, {
    rotate: 5,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '#mobile-app',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1
    }
  });

  // App floating cards entrance
  gsap.from('#app-card-1', {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: { trigger: '#mobile-app', start: 'top 60%' }
  });
  
  gsap.from('#app-card-2', {
    x: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: { trigger: '#mobile-app', start: 'top 60%' }
  });

  // Swap app screens on time loop
  const appScreens = document.querySelectorAll('.phone-screen-img');
  let currentScreenIdx = 0;
  setInterval(() => {
    appScreens[currentScreenIdx].classList.remove('active');
    currentScreenIdx = (currentScreenIdx + 1) % appScreens.length;
    appScreens[currentScreenIdx].classList.add('active');
  }, 3000);
}

// ==========================================================================
// Section 15: Contact form submit & Pins
// ==========================================================================
const contactForm = document.getElementById('contact-form-element');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-submit-contact');
    
    // Change to loading state
    btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin btn-icon"></i>';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.innerHTML = 'Success! <i class="fa-solid fa-check btn-icon"></i>';
      btn.style.background = 'var(--fresh-green)';
      
      // Reset form
      contactForm.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane btn-icon"></i>';
        btn.style.background = '';
        btn.disabled = false;
        updateHoverListeners();
      }, 3000);
    }, 1500);
  });
}
