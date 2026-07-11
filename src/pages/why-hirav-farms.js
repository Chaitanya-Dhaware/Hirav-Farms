import { footerHTML } from '../components/footer.js';

export function html() {
  return `
    <!-- Page Hero -->
    <section class="page-hero" id="page-hero-why">
      <img src="/assets/cow-milking.jpg" alt="Automated milking process at Hirav Farms" class="page-hero-bg" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <span class="subtitle">Why Gaudai</span>
        <h1>Setting the Standard<br>for Dairy Purity</h1>
        <p>Every single process is engineered to protect purity from udder to your cup.</p>
      </div>
    </section>

    <!-- ==========================================
         Why Choose Us Cards
         ========================================== -->
    <section id="why-choose" class="section-center">
      <span class="subtitle">Our Pillars</span>
      <h2 id="why-title">Four Uncompromising Standards</h2>
      <p id="why-subtitle">Our operations are designed with strict attention to cleanliness, animal wellness, and rapid cold chains.</p>
      
      <div class="why-grid">
        <div class="why-card" id="why-buffaloes">
          <div class="why-icon-container"><i class="fa-solid fa-cow"></i></div>
          <h3>Healthy Buffaloes</h3>
          <p>Indigenously bred Murrah cattle fed on customized organic nutritional fodder profiles, living stress-free in climate-controlled barns.</p>
        </div>
        
        <div class="why-card" id="why-chemical">
          <div class="why-icon-container"><i class="fa-solid fa-ban"></i></div>
          <h3>Zero Chemicals</h3>
          <p>Absolutely no added preservatives, growth hormones (oxytocin), or chemical additives. Ever. Our zero-tolerance policy covers every batch.</p>
        </div>

        <div class="why-card" id="why-milking">
          <div class="why-icon-container"><i class="fa-solid fa-gears"></i></div>
          <h3>Auto-Processing</h3>
          <p>Hands-free machine milking and closed-loop stainless steel lines ensure the milk never touches human hands from udder to bottle.</p>
        </div>

        <div class="why-card" id="why-coldchain">
          <div class="why-icon-container"><i class="fa-solid fa-snowflake"></i></div>
          <h3>Cold Chain</h3>
          <p>Chilled to 4°C within 1 hour of milking, maintained throughout transport in our refrigerated fleet to preserve all bio-actives.</p>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Dairy Plant Interactive Tabs
         ========================================== -->
    <section id="dairy-plant">
      <div class="section-center">
        <span class="subtitle">Processing Plant</span>
        <h2>Automated State-Of-The-Art Dairy</h2>
        <p>Where nature's yield meets clinical technology. The Gaudai facility is a closed-loop food safety zone.</p>
      </div>

      <div class="plant-interactive">
        <div class="plant-tabs" role="tablist">
          <button class="plant-tab-btn active" id="tab-milking" role="tab" aria-selected="true" aria-controls="panel-milking">
            1. Automated Milking
          </button>
          <button class="plant-tab-btn" id="tab-pasteur" role="tab" aria-selected="false" aria-controls="panel-pasteur">
            2. Pasteurization
          </button>
          <button class="plant-tab-btn" id="tab-packaging" role="tab" aria-selected="false" aria-controls="panel-packaging">
            3. Glass Packaging
          </button>
          <button class="plant-tab-btn" id="tab-monitoring" role="tab" aria-selected="false" aria-controls="panel-monitoring">
            4. AI-Powered Cold Chain
          </button>
        </div>

        <div class="plant-display">
          <div class="plant-visual">
            <svg class="plant-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <path d="M 30 150 L 120 150 L 120 220 L 270 220" fill="none" stroke="#e0e0e0" stroke-width="12" stroke-linecap="round" />
              <path id="milk-flow-pipe" d="M 30 150 L 120 150 L 120 220 L 270 220" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-dasharray="15 15" />
              <rect x="100" y="100" width="100" height="70" rx="10" fill="#143D2C" stroke="#88D66C" stroke-width="3" />
              <circle cx="150" cy="135" r="20" fill="#0B6B3A" />
              <circle cx="150" cy="135" r="8" fill="#F5C542" id="plant-rotating-valve" />
            </svg>
          </div>
          <div class="plant-info" id="plant-info-content">
            <h3>Touch-Free Extraction</h3>
            <p>Our buffaloes are milked in clean parlors. The milk flows straight into stainless-steel pipelines without exposure to human hands, dust, or air, guaranteeing minimal bacteria levels.</p>
            <div class="plant-badge"><i class="fa-solid fa-shield-halved"></i> 100% Sterile System</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Extended Why Content -->
    <section id="why-extended" class="section-dark">
      <div class="section-center">
        <span class="subtitle">The Science</span>
        <h2>Our Quality Promise — By the Numbers</h2>
        <p>Transparency is our tradition. Every metric we track protects the purity you trust.</p>
      </div>
      <div class="why-stats-grid">
        <div class="why-stat-card">
          <div class="why-stat-num">24+</div>
          <div class="why-stat-label">Quality Parameters Tested Per Batch</div>
        </div>
        <div class="why-stat-card">
          <div class="why-stat-num">4°C</div>
          <div class="why-stat-label">Chilled Within 60 Min of Milking</div>
        </div>
        <div class="why-stat-card">
          <div class="why-stat-num">0</div>
          <div class="why-stat-label">Human Hands Touching the Milk</div>
        </div>
        <div class="why-stat-card">
          <div class="why-stat-num">100%</div>
          <div class="why-stat-label">Batches Passed Before Dispatch</div>
        </div>
      </div>
    </section>

  ${footerHTML()}`;
}

export function init(gsap, ScrollTrigger) {
  gsap.from('.page-hero-content', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 0.2 });

  gsap.from('.why-card', {
    opacity: 0, y: 50, scale: 0.95, duration: 0.8, stagger: 0.15, ease: 'back.out(1.4)',
    scrollTrigger: { trigger: '#why-choose', start: 'top 75%' }
  });

  gsap.from('.why-stat-card', {
    opacity: 0, y: 40, scale: 0.95, duration: 0.7, stagger: 0.12, ease: 'back.out(1.4)',
    scrollTrigger: { trigger: '#why-extended', start: 'top 80%' }
  });

  // Dairy Plant Tab Logic
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
      tabButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      gsap.to('#plant-rotating-valve', { rotation: '+=360', duration: 0.8 });
      gsap.fromTo(milkFlowPipe, { strokeDashoffset: 30 }, { strokeDashoffset: 0, repeat: 2, duration: 0.5, ease: 'none' });
      const key = btn.id.replace('tab-', '');
      const data = plantData[key];
      gsap.to(plantInfo, {
        opacity: 0, y: 10, duration: 0.25,
        onComplete: () => {
          plantInfo.innerHTML = `<h3>${data.title}</h3><p>${data.desc}</p><div class="plant-badge"><i class="fa-solid fa-shield-halved"></i> ${data.badge}</div>`;
          gsap.to(plantInfo, { opacity: 1, y: 0, duration: 0.35 });
        }
      });
    });
  });

  if (milkFlowPipe) {
    gsap.to(milkFlowPipe, { strokeDashoffset: -50, repeat: -1, duration: 2, ease: 'none' });
  }
}
