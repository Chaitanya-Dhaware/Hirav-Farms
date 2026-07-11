import { footerHTML } from '../components/footer.js';

export function html() {
  return `
    <!-- Page Hero -->
    <section class="page-hero" id="page-hero-products">
      <img src="/assets/milk-bottle.png" alt="Gaudai premium dairy products" class="page-hero-bg page-hero-bg-contain" />
      <div class="page-hero-overlay page-hero-overlay-deep"></div>
      <div class="page-hero-content">
        <span class="subtitle">Fresh Range</span>
        <h1>Our Dairy<br>Offerings</h1>
        <p>Delivered fresh from our processing facility, packed in clinical sterile glass containers.</p>
      </div>
    </section>

    <!-- ==========================================
         Products Grid
         ========================================== -->
    <section id="products">
      <div class="section-center">
        <span class="subtitle">Fresh Range</span>
        <h2>Our Dairy Offerings</h2>
        <p>Delivered fresh from our processing facility, packed in clinical sterile glass containers.</p>
      </div>

      <div class="products-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="milk">Milk &amp; Curd</button>
        <button class="filter-btn" data-filter="ghee">Ghee &amp; Butter</button>
        <button class="filter-btn" data-filter="sweets">Traditional Sweets</button>
      </div>

      <div class="products-grid" id="products-grid">
        <!-- Milk -->
        <div class="product-card" data-category="milk" id="prod-milk">
          <span class="product-badge badge-bestseller">Best Seller</span>
          <div class="product-img-wrapper"><img src="/assets/milk-bottle.png" alt="Gaudai Pure Buffalo Milk Glass Bottle" class="product-img" /></div>
          <div class="product-info">
            <span class="product-category">Milk &amp; Curd</span>
            <h3>Premium Buffalo Milk</h3>
            <p>Thick, high-fat (7.5%+) buffalo milk in sterilised glass bottles. Untreated, rich, and naturally sweet.</p>
            <div class="product-meta">
              <span class="product-price">₹85 / Litre</span>
              <button class="product-btn" aria-label="Subscribe to Premium Buffalo Milk"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>

        <!-- Curd -->
        <div class="product-card" data-category="milk" id="prod-curd">
          <div class="product-img-wrapper"><img src="/assets/curd-cup.png" alt="Gaudai Premium Set Curd" class="product-img" /></div>
          <div class="product-info">
            <span class="product-category">Milk &amp; Curd</span>
            <h3>Creamy Set Curd</h3>
            <p>Set naturally from pure buffalo milk. Incredibly thick, smooth textured with low acidity levels.</p>
            <div class="product-meta">
              <span class="product-price">₹45 / 400g</span>
              <button class="product-btn" aria-label="Add Curd to order"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>

        <!-- Ghee -->
        <div class="product-card" data-category="ghee" id="prod-ghee">
          <span class="product-badge badge-premium">Premium</span>
          <div class="product-img-wrapper"><img src="/assets/ghee-jar.png" alt="Gaudai Traditional Bilona A2 Buffalo Ghee" class="product-img" /></div>
          <div class="product-info">
            <span class="product-category">Ghee &amp; Butter</span>
            <h3>Bilona Buffalo Ghee</h3>
            <p>Prepared through the slow, traditional curd-churning method. Granular texture with golden aroma.</p>
            <div class="product-meta">
              <span class="product-price">₹750 / 500ml</span>
              <button class="product-btn" aria-label="Add Bilona Buffalo Ghee to order"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>

        <!-- Paneer -->
        <div class="product-card" data-category="milk" id="prod-paneer">
          <div class="product-img-wrapper"><img src="/assets/paneer-pack.png" alt="Gaudai Soft Fresh Paneer block" class="product-img" /></div>
          <div class="product-info">
            <span class="product-category">Milk &amp; Curd</span>
            <h3>Fresh Soft Paneer</h3>
            <p>Hand-crafted block cottage cheese. High moisture, melt-in-the-mouth texture with zero starch.</p>
            <div class="product-meta">
              <span class="product-price">₹120 / 200g</span>
              <button class="product-btn" aria-label="Add Paneer to order"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>

        <!-- Lassi -->
        <div class="product-card" data-category="milk" id="prod-lassi">
          <span class="product-badge badge-new">New</span>
          <div class="product-img-wrapper"><img src="/assets/lassi-cup.png" alt="Gaudai Special Malaai Lassi" class="product-img" /></div>
          <div class="product-info">
            <span class="product-category">Milk &amp; Curd</span>
            <h3>Malaai Lassi</h3>
            <p>Thick, hand-churned buffalo lassi with a layer of natural malai. Rich, chilled, and traditionally prepared.</p>
            <div class="product-meta">
              <span class="product-price">₹35 / 250ml</span>
              <button class="product-btn" aria-label="Add Malaai Lassi to order"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>

        <!-- Butter -->
        <div class="product-card" data-category="ghee" id="prod-butter">
          <div class="product-img-wrapper"><img src="/assets/white-butter.png" alt="Gaudai White Butter block" class="product-img" /></div>
          <div class="product-info">
            <span class="product-category">Ghee &amp; Butter</span>
            <h3>Earthy White Butter</h3>
            <p>Traditional unsalted butter churned fresh from sweet cream. Rich in CLA and dairy vitamins.</p>
            <div class="product-meta">
              <span class="product-price">₹160 / 200g</span>
              <button class="product-btn" aria-label="Add White Butter to order"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>

        <!-- Shrikhand -->
        <div class="product-card" data-category="sweets" id="prod-shrikhand">
          <div class="product-img-wrapper"><img src="/assets/shrikhand.png" alt="Gaudai Kesar Pista Shrikhand pack" class="product-img" /></div>
          <div class="product-info">
            <span class="product-category">Traditional Sweets</span>
            <h3>Kesar Pista Shrikhand</h3>
            <p>Strained yoghurt blended with real saffron strands, pistachio chunks, and green cardamom.</p>
            <div class="product-meta">
              <span class="product-price">₹90 / 250g</span>
              <button class="product-btn" aria-label="Add Shrikhand to order"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Mobile App Section
         ========================================== -->
    <section id="mobile-app" class="section-dark">
      <div class="app-row">
        <div class="app-visual-wrapper">
          <div class="phone-mockup-container" id="phone-container">
            <div class="phone-screen">
              <img src="/assets/app-mockup.png" alt="Gaudai App Dashboard" class="phone-screen-img active" id="phone-screen-1" />
              <img src="/assets/hero-farm.jpg" alt="Gaudai App Tracking" class="phone-screen-img" id="phone-screen-2" />
              <img src="/assets/lab-test.jpg" alt="Gaudai App AI Chat" class="phone-screen-img" id="phone-screen-3" />
            </div>
          </div>
          <div class="app-floating-card app-fc-1" id="app-card-1">
            <div class="app-fc-icon"><i class="fa-solid fa-bell"></i></div>
            <div class="app-fc-text"><h4>Milk Dispatched</h4><p>Temperature: 3.8°C</p></div>
          </div>
          <div class="app-floating-card app-fc-2" id="app-card-2">
            <div class="app-fc-icon"><i class="fa-solid fa-credit-card"></i></div>
            <div class="app-fc-text"><h4>Auto-Debit Complete</h4><p>Subscription active</p></div>
          </div>
        </div>

        <div class="app-text">
          <span class="subtitle">Gaudai App</span>
          <h2>Manage Your Daily Subscriptions Seamlessly</h2>
          <p>Skip delivery days, adjust quantities, pay securely, and track tanker quality indicators directly on our premium mobile application.</p>
          <div class="app-feature-list">
            <div class="app-feature-item" id="app-feat-1">
              <div class="app-feature-icon"><i class="fa-solid fa-calendar-days"></i></div>
              <div class="app-feature-text"><h4>Flexi Calendar</h4><p>Going out for the weekend? Pause your subscription with one tap before 10:00 PM.</p></div>
            </div>
            <div class="app-feature-item" id="app-feat-2">
              <div class="app-feature-icon"><i class="fa-solid fa-robot"></i></div>
              <div class="app-feature-text"><h4>Gaudai AI Assistant</h4><p>Receive recipes, chat with veterinarians, and calculate protein inputs based on your dairy use.</p></div>
            </div>
            <div class="app-feature-item" id="app-feat-3">
              <div class="app-feature-icon"><i class="fa-solid fa-map-pin"></i></div>
              <div class="app-feature-text"><h4>Live Fleet Tracker</h4><p>Real-time vehicle temperature checks and GPS mapping of your local delivery partner.</p></div>
            </div>
          </div>
          <div style="margin-top: 3rem; display: flex; gap: 1.5rem;">
            <a href="#" class="btn btn-white" id="btn-appstore"><i class="fa-brands fa-apple" style="margin-right:8px; font-size:1.2rem;"></i> App Store</a>
            <a href="#" class="btn btn-secondary" style="border-color:var(--milk-white); color:var(--milk-white);" id="btn-playstore"><i class="fa-brands fa-google-play" style="margin-right:8px; font-size:1.2rem;"></i> Play Store</a>
          </div>
        </div>
      </div>
    </section>

  ${footerHTML()}`;
}

export function init(gsap, ScrollTrigger) {
  gsap.from('.page-hero-content', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 0.2 });

  // Products filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  gsap.set('.product-card', { clearProps: 'all' });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      gsap.to(productCards, {
        scale: 0.92, opacity: 0, duration: 0.22, stagger: 0.04, ease: 'power2.in',
        onComplete: () => {
          productCards.forEach(card => {
            card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'flex' : 'none';
          });
          const visible = Array.from(productCards).filter(c => c.style.display !== 'none');
          gsap.set(visible, { opacity: 0, scale: 0.92, y: 20 });
          gsap.to(visible, { scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.4)' });
        }
      });
    });
  });

  gsap.fromTo('.product-card', { opacity: 0, y: 48 }, {
    opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
    scrollTrigger: { trigger: '#products', start: 'top 80%', once: true, toggleActions: 'play none none none' },
    onComplete: () => gsap.set('.product-card', { clearProps: 'all' }),
  });

  // Mobile App
  const phone = document.getElementById('phone-container');
  if (phone) {
    gsap.fromTo(phone, { rotate: -15, y: 100, opacity: 0.3 }, {
      rotate: 5, y: 0, opacity: 1,
      scrollTrigger: { trigger: '#mobile-app', start: 'top 80%', end: 'bottom 20%', scrub: 1 }
    });
    gsap.from('#app-card-1', { x: -50, opacity: 0, duration: 1, scrollTrigger: { trigger: '#mobile-app', start: 'top 60%' } });
    gsap.from('#app-card-2', { x: 50, opacity: 0, duration: 1, scrollTrigger: { trigger: '#mobile-app', start: 'top 60%' } });
    const appScreens = document.querySelectorAll('.phone-screen-img');
    let currentScreenIdx = 0;
    const screenInterval = setInterval(() => {
      if (!document.querySelector('#mobile-app')) { clearInterval(screenInterval); return; }
      appScreens[currentScreenIdx].classList.remove('active');
      currentScreenIdx = (currentScreenIdx + 1) % appScreens.length;
      appScreens[currentScreenIdx].classList.add('active');
    }, 3000);
  }
}
