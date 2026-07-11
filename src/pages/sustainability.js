import { footerHTML } from '../components/footer.js';

export function html() {
  return `
    <!-- Page Hero -->
    <section class="page-hero" id="page-hero-sustainability">
      <img src="/assets/sustainability.jpg" alt="Solar panels on sustainable dairy farm" class="page-hero-bg" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <span class="subtitle">Carbon Free</span>
        <h1>Our Ecological<br>Commitments</h1>
        <p>Protecting the earth while producing food. Zero-pollution. Zero-waste. Pure by design.</p>
      </div>
    </section>

    <!-- ==========================================
         Sustainability Cards
         ========================================== -->
    <section id="sustainability" class="section-dark">
      <div class="section-center">
        <span class="subtitle">Carbon Free</span>
        <h2>Our Ecological Commitments</h2>
        <p>Protecting the earth while producing food. Hirav Farms operates as a zero-pollution, zero-waste facility.</p>
      </div>

      <div class="sus-grid">
        <div class="sus-card" id="sus-solar">
          <div class="sus-icon-container"><i class="fa-solid fa-solar-panel"></i></div>
          <h3>Solar Powered Plant</h3>
          <p>Our entire bottling plant and chiller runs on a rooftop 150kW grid-tied solar farm.</p>
        </div>

        <div class="sus-card" id="sus-biogas">
          <div class="sus-icon-container"><i class="fa-solid fa-fire-burner"></i></div>
          <h3>Biogas Digestors</h3>
          <p>Cattle waste is fully digested, producing electricity for the farm and organic rich slurry for soil.</p>
        </div>

        <div class="sus-card" id="sus-glass">
          <div class="sus-icon-container"><i class="fa-solid fa-whiskey-glass"></i></div>
          <h3>Circular Glass Bottles</h3>
          <p>We supply milk exclusively in sterilised glass bottles which we collect back, wash, and reuse.</p>
        </div>

        <div class="sus-card" id="sus-carbon">
          <div class="sus-icon-container"><i class="fa-solid fa-cloud-sun"></i></div>
          <h3>Carbon Sink Forestry</h3>
          <p>We planted 5,000+ native trees across our fields to create a biodiversity shield and offset emissions.</p>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Organic Farming SVG
         ========================================== -->
    <section id="organic-farming">
      <span class="subtitle">Sustainable Agriculture</span>
      <h2>How We Farm Legally &amp; Organically</h2>
      <div class="farming-container">
        <div class="farming-canvas-container">
          <svg id="farming-scene" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#E8F4F0" />
            <path id="soil-bed" d="M 0 420 Q 200 390, 400 410 T 800 380 L 800 500 L 0 500 Z" fill="#755139" />
            <path id="soil-grass-line" d="M 0 420 Q 200 390, 400 410 T 800 380" fill="none" stroke="#528F6F" stroke-width="4" />
            <path id="river" d="M -50 480 Q 250 430, 400 450 T 850 490" fill="none" stroke="#A8DADC" stroke-width="16" stroke-dasharray="10 10" />
            <g id="grass-blades" fill="#88D66C">
              <path d="M 120 405 Q 110 370, 100 350 Q 120 375, 125 405" />
              <path d="M 280 400 Q 275 365, 260 340 Q 285 370, 285 400" />
              <path d="M 500 400 Q 490 350, 480 320 Q 510 360, 505 400" />
              <path d="M 680 390 Q 690 340, 710 310 Q 690 350, 680 390" />
            </g>
            <g id="farm-tree" transform="translate(600, 260) scale(0)">
              <rect x="25" y="60" width="10" height="60" fill="#5C4033" />
              <circle cx="30" cy="50" r="35" fill="#0B6B3A" />
              <circle cx="10" cy="35" r="25" fill="#67C23A" />
              <circle cx="50" cy="40" r="22" fill="#88D66C" />
            </g>
            <g id="butterfly" transform="translate(100, 200)">
              <path d="M 0 0 C -10 -15, -25 -10, -5 5 C -25 20, -10 25, 0 10 C 10 25, 25 20, 5 5 C 25 -10, 10 -15, 0 0" fill="#F5C542" />
              <line x1="0" y1="0" x2="0" y2="10" stroke="#000" stroke-width="1" />
            </g>
          </svg>
        </div>
        <div class="farming-content">
          <h3>Circular Eco-Farming</h3>
          <p>Nothing goes to waste. Organic manure from our buffaloes fertilizes the pastures. This rich soil yields premium alfalfa, maize, and Napier grass, which in turn feeds the herd. We harvest rainwater to feed the soil and conserve underground aquifers.</p>
          <div class="farming-perk">
            <div class="farming-perk-icon"><i class="fa-solid fa-leaf"></i></div>
            <div class="farming-perk-text">
              <h4>Chemical-Free Pastures</h4>
              <p>No chemical fertilizers, synthetic insecticides, or weedicides ever touch our soil.</p>
            </div>
          </div>
          <div class="farming-perk">
            <div class="farming-perk-icon"><i class="fa-solid fa-droplet"></i></div>
            <div class="farming-perk-text">
              <h4>Water Conservation</h4>
              <p>Drip irrigation and rainwater harvesting systems reduce groundwater usage by 40%.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sustainability Stats -->
    <section id="sus-stats" class="section-center">
      <span class="subtitle">Impact Numbers</span>
      <h2>Our Green Footprint</h2>
      <div class="why-stats-grid">
        <div class="why-stat-card">
          <div class="why-stat-num">150kW</div>
          <div class="why-stat-label">Solar Grid Installed on Rooftop</div>
        </div>
        <div class="why-stat-card">
          <div class="why-stat-num">5,000+</div>
          <div class="why-stat-label">Native Trees Planted</div>
        </div>
        <div class="why-stat-card">
          <div class="why-stat-num">40%</div>
          <div class="why-stat-label">Reduction in Groundwater Use</div>
        </div>
        <div class="why-stat-card">
          <div class="why-stat-num">100%</div>
          <div class="why-stat-label">Glass Bottles Collected & Reused</div>
        </div>
      </div>
    </section>

  ${footerHTML()}`;
}

export function init(gsap, ScrollTrigger, lenis, MotionPathPlugin) {
  gsap.from('.page-hero-content', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 0.2 });

  gsap.from('.sus-card', {
    opacity: 0, y: 30, duration: 0.8, stagger: 0.15,
    scrollTrigger: { trigger: '#sustainability', start: 'top 80%' }
  });

  gsap.to('#sus-solar .sus-icon-container i', {
    rotationY: 360, repeat: -1, duration: 4, ease: 'power1.inOut'
  });
  gsap.to('#sus-biogas .sus-icon-container i', {
    scale: 1.15, repeat: -1, yoyo: true, duration: 1, ease: 'power1.inOut'
  });

  gsap.from('.why-stat-card', {
    opacity: 0, y: 40, scale: 0.95, duration: 0.7, stagger: 0.12, ease: 'back.out(1.4)',
    scrollTrigger: { trigger: '#sus-stats', start: 'top 80%' }
  });

  // Organic farming SVG
  const farmingScene = document.getElementById('farming-scene');
  if (farmingScene) {
    const farmTl = gsap.timeline({
      scrollTrigger: { trigger: '#organic-farming', start: 'top 80%', end: 'bottom 40%', scrub: 1 }
    });
    farmTl.from('#grass-blades path', { scaleY: 0, transformOrigin: 'bottom', duration: 1.5, stagger: 0.2 })
      .to('#farm-tree', { scale: 1, duration: 2, ease: 'back.out(1.7)' }, '-=1.2')
      .to('#river', { strokeDashoffset: -100, duration: 3, ease: 'none' }, '-=2')
      .to('#butterfly', {
        motionPath: {
          path: [{ x: 100, y: 200 }, { x: 200, y: 120 }, { x: 350, y: 180 }, { x: 500, y: 80 }, { x: 700, y: 150 }],
          autoRotate: true
        },
        duration: 3,
      }, '-=2.5');
  }
}
