import { footerHTML } from '../components/footer.js';

export function html() {
  return `
    <!-- ==========================================
         Home Hero Section
         ========================================== -->
    <section id="hero">
      <img src="/assets/hero-farm.jpg" alt="Hirav Farms Aerial Sunrise view" class="hero-bg" id="hero-img" />
      <div class="hero-overlay"></div>
      
      <div class="hero-content">
        <span class="subtitle">Welcome to Hirav Farms</span>
        <h1 id="hero-title">From Our Farms<br>to Your Family.</h1>
        <p id="hero-subtitle">Naturally Pure Dairy. Ethically Produced. Scientifically Tested.</p>
        <div class="hero-actions">
          <a href="/#/products" class="btn btn-primary" id="hero-btn-products">
            Explore Products <i class="fa-solid fa-arrow-right btn-icon"></i>
          </a>
          <a href="/#/journey" class="btn btn-secondary" id="hero-btn-journey">
            Watch Journey
          </a>
        </div>
      </div>

      <div class="scroll-indicator" id="hero-scroll-indicator">
        <span>SCROLL</span>
        <div class="scroll-indicator-mouse">
          <div class="scroll-indicator-wheel"></div>
        </div>
      </div>

      <div class="hero-stats">
        <div class="stat-item" id="stat-families">
          <h3 class="counter-num" data-target="15000">0</h3>
          <p>Happy Families</p>
        </div>
        <div class="stat-item" id="stat-milk">
          <h3 class="counter-num" data-target="5000">0</h3>
          <p>Daily Milk Litres</p>
        </div>
        <div class="stat-item" id="stat-buffaloes">
          <h3 class="counter-num" data-target="800">0</h3>
          <p>Healthy Buffaloes</p>
        </div>
        <div class="stat-item" id="stat-labs">
          <h3 class="counter-num" data-target="100">0</h3>
          <p>% Tested Batches</p>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Home Preview Sections
         ========================================== -->
    <section id="home-previews" class="home-previews-section">
      
      <!-- About Preview -->
      <div class="preview-card" id="preview-about">
        <div class="preview-card-visual">
          <img src="/assets/farm-story.jpg" alt="Lush green pastures of Hirav Farms" />
          <div class="preview-card-badge">
            <h4>10+</h4>
            <p>Years of Purity</p>
          </div>
        </div>
        <div class="preview-card-content">
          <span class="subtitle">Our Roots</span>
          <h2>Pioneering Pure Farming Practices</h2>
          <p>Hirav Farms is born from a commitment to bring milk back to its most honest, nutrient-dense form. Through our premium brand <strong>Gaudai</strong>, we bridge the gap between rural farming heritage and modern scientific processing.</p>
          <a href="/#/about" class="btn btn-primary preview-btn">
            Our Story <i class="fa-solid fa-arrow-right btn-icon"></i>
          </a>
        </div>
      </div>

      <!-- Why Hirav Preview -->
      <div class="preview-card preview-card-alt" id="preview-why">
        <div class="preview-card-content">
          <span class="subtitle">Why Gaudai</span>
          <h2>Setting the Standard for Dairy Purity</h2>
          <p>Our operations are designed with strict attention to cleanliness, animal wellness, and rapid cold chains. Zero chemicals. Zero preservatives. Zero compromise.</p>
          <div class="preview-why-icons">
            <div class="preview-why-icon"><i class="fa-solid fa-cow"></i><span>Healthy Cattle</span></div>
            <div class="preview-why-icon"><i class="fa-solid fa-ban"></i><span>Zero Chemicals</span></div>
            <div class="preview-why-icon"><i class="fa-solid fa-gears"></i><span>Auto-Process</span></div>
            <div class="preview-why-icon"><i class="fa-solid fa-snowflake"></i><span>Cold Chain</span></div>
          </div>
          <a href="/#/why-hirav-farms" class="btn btn-primary preview-btn">
            Why Choose Us <i class="fa-solid fa-arrow-right btn-icon"></i>
          </a>
        </div>
        <div class="preview-card-visual">
          <img src="/assets/cow-milking.jpg" alt="Automated milking process at Hirav Farms" />
        </div>
      </div>

      <!-- Journey Preview -->
      <div class="preview-card" id="preview-journey">
        <div class="preview-card-visual preview-journey-visual">
          <div class="journey-preview-steps">
            <div class="jp-step"><span class="jp-num">01</span><span class="jp-label">Healthy Buffaloes</span></div>
            <div class="jp-step"><span class="jp-num">03</span><span class="jp-label">Machine Milking</span></div>
            <div class="jp-step"><span class="jp-num">05</span><span class="jp-label">Lab Testing</span></div>
            <div class="jp-step"><span class="jp-num">10</span><span class="jp-label">Your Table</span></div>
          </div>
        </div>
        <div class="preview-card-content">
          <span class="subtitle">Farm to Family</span>
          <h2>10 Steps of Purity</h2>
          <p>Follow the remarkable journey of every drop — from our stress-free Murrah buffaloes on organic pastures to your morning glass of fresh, cold, pure milk.</p>
          <a href="/#/journey" class="btn btn-primary preview-btn">
            Explore Journey <i class="fa-solid fa-arrow-right btn-icon"></i>
          </a>
        </div>
      </div>

      <!-- Products Preview -->
      <div class="preview-card preview-card-alt" id="preview-products">
        <div class="preview-card-content">
          <span class="subtitle">Fresh Range</span>
          <h2>Our Dairy Offerings</h2>
          <p>From thick A2 buffalo milk in sterilised glass bottles to traditional bilona ghee and creamy set curd — every product is crafted with zero additives.</p>
          <div class="preview-products-grid">
            <div class="preview-product-chip"><img src="/assets/milk-bottle.png" alt="Buffalo Milk" /><span>Premium Milk</span></div>
            <div class="preview-product-chip"><img src="/assets/ghee-jar.png" alt="Bilona Ghee" /><span>Bilona Ghee</span></div>
            <div class="preview-product-chip"><img src="/assets/curd-cup.png" alt="Set Curd" /><span>Set Curd</span></div>
          </div>
          <a href="/#/products" class="btn btn-primary preview-btn">
            View All Products <i class="fa-solid fa-arrow-right btn-icon"></i>
          </a>
        </div>
        <div class="preview-card-visual">
          <img src="/assets/paneer-pack.png" alt="Gaudai product lineup" />
        </div>
      </div>

      <!-- Sustainability Preview -->
      <div class="preview-card" id="preview-sustainability">
        <div class="preview-card-visual">
          <img src="/assets/sustainability.jpg" alt="Solar-powered sustainable dairy farm" />
        </div>
        <div class="preview-card-content">
          <span class="subtitle">Carbon Free</span>
          <h2>Our Ecological Commitments</h2>
          <p>100% solar-powered plant. Biogas digestors. Circular glass bottles. 5,000+ native trees planted. We grow food without compromising the planet.</p>
          <a href="/#/sustainability" class="btn btn-primary preview-btn">
            Our Green Pledge <i class="fa-solid fa-arrow-right btn-icon"></i>
          </a>
        </div>
      </div>

      <!-- Stories Preview -->
      <div class="preview-card preview-card-alt" id="preview-stories">
        <div class="preview-card-content">
          <span class="subtitle">Social Impact</span>
          <h2>120+ Farming Families Empowered</h2>
          <p>Behind every bottle is a farmer who received fair pricing, veterinary support, and modern dairy training. Their success is the foundation of every sip.</p>
          <blockquote class="preview-quote">
            "Working with Hirav Farms has transformed our lives."
            <cite>— Sukhdev Singh, Senior Farmer Partner</cite>
          </blockquote>
          <a href="/#/stories" class="btn btn-primary preview-btn">
            Read Their Stories <i class="fa-solid fa-arrow-right btn-icon"></i>
          </a>
        </div>
        <div class="preview-card-visual">
          <img src="/assets/farm-story.jpg" alt="Farmer family of Hirav Farms" />
        </div>
      </div>

    </section>

    <!-- CTA Band -->
    <section id="home-cta-band" class="home-cta-band section-dark">
      <div class="cta-band-inner">
        <h2>Ready to Experience Pure Dairy?</h2>
        <p>Join 15,000+ families who trust Gaudai for their daily wellness.</p>
        <a href="/#/contact" class="btn btn-white" id="home-cta-btn">
          Get Fresh Milk <i class="fa-solid fa-arrow-right btn-icon"></i>
        </a>
      </div>
    </section>

  ${footerHTML()}`;
}

export function init(gsap, ScrollTrigger, lenis) {
  // Hero parallax
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

  // Hero text animations
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl.from('#hero-title', { y: 60, opacity: 0, duration: 1.2, delay: 0.2 })
    .from('#hero-subtitle', { y: 30, opacity: 0, duration: 0.8 }, '-=0.8')
    .from('.hero-actions', { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
    .from('#hero-scroll-indicator', {
      opacity: 0, y: -10, duration: 1,
      repeat: -1, yoyo: true, ease: 'power1.inOut'
    }, '-=0.2');

  // Counter animations
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

  // Preview cards stagger reveal
  gsap.from('.preview-card', {
    opacity: 0,
    y: 60,
    duration: 0.9,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#home-previews',
      start: 'top 80%',
    }
  });

  gsap.from('.preview-why-icon', {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: '#preview-why',
      start: 'top 75%',
    }
  });

  gsap.from('.jp-step', {
    opacity: 0,
    x: -30,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#preview-journey',
      start: 'top 75%',
    }
  });

  gsap.from('.preview-product-chip', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: '#preview-products',
      start: 'top 75%',
    }
  });

  gsap.from('.preview-quote', {
    opacity: 0,
    x: 30,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#preview-stories',
      start: 'top 75%',
    }
  });

  gsap.from('#home-cta-band', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#home-cta-band',
      start: 'top 85%',
    }
  });
}
