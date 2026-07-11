import { footerHTML } from '../components/footer.js';

export function html() {
  return `
    <!-- Page Hero -->
    <section class="page-hero" id="page-hero-about">
      <img src="/assets/farm-story.jpg" alt="Hirav Farms lush green pastures" class="page-hero-bg" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <span class="subtitle">Our Roots</span>
        <h1>Pioneering Pure<br>Farming Practices</h1>
        <p>A decade of trust, science, and sustainable dairy — built from the ground up.</p>
      </div>
    </section>

    <!-- ==========================================
         About Section
         ========================================== -->
    <section id="about">
      <div class="row">
        <div class="col-6">
          <div class="about-img-container">
            <img src="/assets/farm-story.jpg" alt="Lush green pastures of Hirav Farms" class="about-img" id="about-main-img" />
            <div class="about-floating-badge">
              <h4 id="about-badge-years">10+</h4>
              <p>Years of Purity</p>
            </div>
          </div>
        </div>
        
        <div class="col-6">
          <span class="subtitle">Our Roots</span>
          <h2 id="about-title">Pioneering Pure Farming Practices</h2>
          <p id="about-desc">
            Hirav Farms is born out of a commitment to bring milk back to its most honest, nutrient-dense form. Through our premium brand <strong>Gaudai</strong>, we bridge the gap between rural farming heritage and modern scientific processing.
          </p>
          <br>
          <p>
            We believe in the wellness of our cattle, the fertility of our soil, and the absolute health of your children. By empowering local farmers, we ensure our growth directly feeds back into community sustainability.
          </p>

          <div class="timeline" id="about-timeline">
            <div class="timeline-line"></div>
            <div class="timeline-line-progress" id="timeline-progress"></div>
            
            <div class="timeline-item active" id="timeline-2016">
              <div class="timeline-dot"></div>
              <div class="timeline-year">2016</div>
              <div class="timeline-title">Farming Genesis</div>
              <p>Founded with just 15 high-yield buffaloes and 5 acres of organic pasture land.</p>
            </div>

            <div class="timeline-item" id="timeline-2019">
              <div class="timeline-dot"></div>
              <div class="timeline-year">2019</div>
              <div class="timeline-title">Gaudai Launch</div>
              <p>Introduced Gaudai brand to major cities, implementing automated glass bottling lines.</p>
            </div>

            <div class="timeline-item" id="timeline-2023">
              <div class="timeline-dot"></div>
              <div class="timeline-year">2023</div>
              <div class="timeline-title">100% Scientific Testing</div>
              <p>Established our state-of-the-art laboratory checking 24 chemical and microbial parameters.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Why Choose Us
         ========================================== -->
    <section id="why-choose" class="section-center">
      <span class="subtitle">Why Gaudai</span>
      <h2 id="why-title">Setting the Standard for Dairy Purity</h2>
      <p id="why-subtitle">Our operations are designed with strict attention to cleanliness, animal wellness, and rapid cold chains.</p>
      
      <div class="why-grid">
        <div class="why-card" id="why-buffaloes">
          <div class="why-icon-container"><i class="fa-solid fa-cow"></i></div>
          <h3>Healthy Buffaloes</h3>
          <p>Indigenously bred cattle fed on customized organic nutritional fodder profiles.</p>
        </div>
        
        <div class="why-card" id="why-chemical">
          <div class="why-icon-container"><i class="fa-solid fa-ban"></i></div>
          <h3>Zero Chemicals</h3>
          <p>Absolutely no added preservatives, growth hormones (oxytocin), or chemical additives.</p>
        </div>

        <div class="why-card" id="why-milking">
          <div class="why-icon-container"><i class="fa-solid fa-gears"></i></div>
          <h3>Auto-Processing</h3>
          <p>Hands-free machine milking and closed-loop stainless steel lines to prevent human touch.</p>
        </div>

        <div class="why-card" id="why-coldchain">
          <div class="why-icon-container"><i class="fa-solid fa-snowflake"></i></div>
          <h3>Cold Chain</h3>
          <p>Chilled to 4°C within 1 hour of milking, maintained throughout transport to preserve bio-actives.</p>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Laboratory & Quality
         ========================================== -->
    <section id="laboratory">
      <span class="subtitle">Science &amp; Trust</span>
      <h2>Our Laboratory Checks Everything</h2>
      
      <div class="lab-row">
        <div class="lab-graphics">
          <div class="microscope-container">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 60 160 L 140 160 M 100 160 L 100 130 M 100 130 L 70 90 M 100 130 C 130 130, 150 100, 150 70 M 150 70 L 150 40 M 150 40 L 120 40 M 150 45 L 120 45" stroke="#88D66C" stroke-width="4" stroke-linecap="round" />
              <circle cx="100" cy="80" r="10" stroke="#F5C542" stroke-width="3" />
            </svg>
          </div>
          
          <div class="lab-tube-panel">
            <span style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700;">MILK ANALYZER</span>
            <div class="tube-visual">
              <div class="tube-liquid" id="milk-tube-liquid"></div>
            </div>
            <span id="lab-snf-percentage" style="font-family:var(--font-sans); color: var(--golden-accent); font-weight:700;">8.8% SNF</span>
          </div>
        </div>

        <div class="lab-details">
          <h3>Adulteration &amp; Microbial Screen</h3>
          <p>Every single farm tanker must pass a series of automated rapid chemical checks. We monitor essential markers like solids-not-fat, fats, density, and test for synthetic contaminants.</p>
          <br>
          
          <div class="lab-test-card" id="test-fat">
            <div class="lab-badge-glow"><i class="fa-solid fa-percentage"></i></div>
            <div class="lab-test-text">
              <h4>Fat &amp; SNF Auto-Correction</h4>
              <p>Ensuring natural thick density without standardizing with milk powder or external butter oil.</p>
            </div>
          </div>

          <div class="lab-test-card" id="test-antibiotic">
            <div class="lab-badge-glow"><i class="fa-solid fa-kit-medical"></i></div>
            <div class="lab-test-text">
              <h4>Antibiotic residue check</h4>
              <p>Zero tolerance policy. Milk containing traces of antibiotics is completely discarded.</p>
            </div>
          </div>

          <div class="quality-stamps" id="quality-stamps-container">
            <div class="quality-stamp" id="stamp-iso">
              <img src="/images/generated/about/iso-22000.webp" alt="ISO Certification Seal" style="border-radius:50%; border:2px solid var(--golden-accent);" />
            </div>
            <div class="quality-stamp" id="stamp-fssai">
              <img src="/images/generated/about/fssai.webp" alt="FSSAI Standard Logo" style="border-radius:50%; border:2px solid var(--golden-accent);" />
            </div>
            <div class="quality-stamp" id="stamp-organic">
              <img src="/images/generated/about/organic.webp" alt="Organic Certification Badge" style="border-radius:50%; border:2px solid var(--golden-accent);" />
            </div>
          </div>
        </div>
      </div>
    </section>

  ${footerHTML()}`;
}

export function init(gsap, ScrollTrigger) {
  // Page hero entrance
  gsap.from('.page-hero-content', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 0.2 });

  // About section reveal
  gsap.from('#about-main-img', {
    opacity: 0, x: -50, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '#about', start: 'top 80%' }
  });
  gsap.from('#about-title, #about-desc', {
    opacity: 0, y: 30, duration: 0.8, stagger: 0.2, ease: 'power2.out',
    scrollTrigger: { trigger: '#about', start: 'top 80%' }
  });

  // Timeline
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, idx) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 75%',
      onEnter: () => {
        item.classList.add('active');
        const progressPercent = ((idx + 1) / timelineItems.length) * 100;
        gsap.to('#timeline-progress', { height: `${progressPercent}%`, duration: 0.5, ease: 'power1.out' });
      },
      onLeaveBack: () => {
        item.classList.remove('active');
        const progressPercent = (idx / timelineItems.length) * 100;
        gsap.to('#timeline-progress', { height: `${progressPercent}%`, duration: 0.5, ease: 'power1.out' });
      }
    });
  });

  // Why cards
  gsap.from('.why-card', {
    opacity: 0, y: 50, scale: 0.95, duration: 0.8, stagger: 0.15, ease: 'back.out(1.4)',
    scrollTrigger: { trigger: '#why-choose', start: 'top 75%' }
  });

  // Lab tube fill
  gsap.to('#milk-tube-liquid', {
    height: '85%', duration: 2.5, ease: 'power1.inOut',
    scrollTrigger: { trigger: '#laboratory', start: 'top 60%' }
  });

  // Quality stamps
  ScrollTrigger.create({
    trigger: '#quality-stamps-container',
    start: 'top 85%',
    onEnter: () => {
      document.querySelectorAll('.quality-stamp').forEach((stamp, i) => {
        setTimeout(() => stamp.classList.add('stamp-active'), i * 350);
      });
    }
  });
}
