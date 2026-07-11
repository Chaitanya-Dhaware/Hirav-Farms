import { footerHTML } from '../components/footer.js';

export function html() {
  return `
    <!-- Page Hero -->
    <section class="page-hero" id="page-hero-journey">
      <img src="/assets/hero-farm.jpg" alt="Hirav Farms aerial view at sunrise" class="page-hero-bg" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <span class="subtitle">Farm to Family</span>
        <h1>10 Steps of Purity</h1>
        <p>Follow every drop from our Murrah buffaloes to your morning glass — an unbroken chain of care.</p>
        <div class="hero-actions">
          <a href="/#/products" class="btn btn-primary">Explore Products <i class="fa-solid fa-arrow-right btn-icon"></i></a>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Farm to Home Journey (Horizontal Scroll)
         ========================================== -->
    <section id="journey-pin">
      <div class="journey-wrapper" id="journey-wrapper">
        
        <!-- Stage 1 -->
        <div class="journey-stage" id="stage-1">
          <div class="bg-serif-quote">Every Drop Begins With Care</div>
          <div class="floating-organic-particle" style="top:15%; left:30%; font-size:1.5rem;"><i class="fa-solid fa-leaf"></i></div>
          <div class="journey-layout">
            <div class="journey-visuals">
              <div class="collage-wrapper">
                <div class="collage-main"><img src="/assets/cow-milking.jpg" alt="Murrah buffalo care at Hirav Farms" class="collage-img" /></div>
                <div class="collage-sub"><img src="/assets/farm-story.jpg" alt="Pasture close-up" class="collage-img" /></div>
                <div class="floating-fact-badge float-top-right"><i class="fa-solid fa-cow" style="color:var(--golden-accent)"></i><span>🌱 Stress-Free Animals</span></div>
                <div class="floating-fact-badge float-bottom-left"><i class="fa-solid fa-bath" style="color:var(--golden-accent)"></i><span>🚿 Auto Massage Brushes</span></div>
                <div class="knowledge-bubble" style="top:40%; left:68%;">
                  <i class="fa-solid fa-circle-question"></i>
                  <div class="knowledge-tooltip"><h4>🥛 Pure Murrah Breed</h4><p>Our cattle are indigenously bred Murrah buffaloes, producing rich, thick, and highly nutritious A2 beta-casein milk naturally.</p></div>
                </div>
              </div>
            </div>
            <div class="journey-text" style="position:relative; z-index:3;">
              <div class="journey-stage-num">01</div>
              <h2>Healthy Buffaloes</h2>
              <p>The journey starts with our indigenously reared Murrah buffaloes, living stress-free in climate-controlled barns with constant access to fresh water and automated massage brushes.</p>
              <div class="organic-fact-box">
                <div class="organic-fact-title"><i class="fa-solid fa-seedling"></i> Animal Welfare Standard</div>
                <div class="organic-fact-text">Gaudai buffaloes graze in chemical-free open pastures, receiving daily health checks and vet-approved organic fodder to ensure natural milk quality.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 2 -->
        <div class="journey-stage" id="stage-2">
          <div class="bg-serif-quote">Healthy Soil. Healthy Families</div>
          <div class="floating-organic-particle" style="top:8%; left:45%; font-size:1.2rem; opacity:0.1;"><i class="fa-solid fa-wheat-awn"></i></div>
          <div class="journey-layout">
            <div class="journey-visuals">
              <div class="collage-wrapper">
                <div class="collage-main"><img src="/assets/farm-story.jpg" alt="Organic farming crop selection" class="collage-img" /></div>
                <div class="collage-sub"><img src="/assets/hero-farm.jpg" alt="Lush organic pastures" class="collage-img" /></div>
                <div class="floating-fact-badge float-top-left"><i class="fa-solid fa-ban" style="color:var(--golden-accent)"></i><span>🌾 Zero Preservatives</span></div>
                <div class="farmer-story-card">
                  <img src="https://placehold.co/100x100/0b6b3a/fff?text=GP" alt="Farmer Ganesh Patil avatar" class="farmer-avatar" />
                  <div class="farmer-info"><span>Meet Our Farmer</span><h4>Ganesh Patil</h4><p>"Our buffaloes are family, not machines."</p></div>
                </div>
                <div class="knowledge-bubble" style="top:25%; left:68%;">
                  <i class="fa-solid fa-circle-question"></i>
                  <div class="knowledge-tooltip"><h4>🌾 Why Organic Fodder?</h4><p>We grow Napier grass and clover with home-grown manure. This high-protein diet results in sweeter, creamier milk without synthetic additives.</p></div>
                </div>
              </div>
            </div>
            <div class="journey-text" style="position:relative; z-index:3;">
              <div class="journey-stage-num">02</div>
              <h2>Natural Feeding</h2>
              <p>Cattle feed on high-protein organic green fodder grown on our own farms, supplemented with mineral mixtures, mustard cakes, and medicinal herbs like Shatavari.</p>
              <div class="organic-fact-box">
                <div class="organic-fact-title"><i class="fa-solid fa-seedling"></i> Pasture Management</div>
                <div class="organic-fact-text">Our fodder is grown using vermicompost and cow dung manure—absolutely zero synthetic pesticides, urea, or chemical growth promoters.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 3 -->
        <div class="journey-stage" id="stage-3">
          <div class="bg-serif-quote">Pure Milk. Pure Farming</div>
          <div class="floating-organic-particle" style="bottom:12%; left:25%; font-size:1.4rem;"><i class="fa-solid fa-snowflake"></i></div>
          <div class="journey-layout">
            <div class="journey-visuals">
              <div class="collage-wrapper">
                <div class="collage-main"><img src="/assets/cow-milking.jpg" alt="Clean milking setup" class="collage-img" /></div>
                <div class="collage-sub"><img src="/assets/milk-bottle.png" alt="Touch-free extraction glass bottle" class="collage-img" /></div>
                <div class="floating-fact-badge float-top-right"><i class="fa-solid fa-hands-holding" style="color:var(--golden-accent)"></i><span>🛡️ Touch-Free Process</span></div>
                <div class="floating-fact-badge float-bottom-right"><i class="fa-solid fa-gears" style="color:var(--golden-accent)"></i><span>⚙️ Computerized Pulsation</span></div>
                <div class="knowledge-bubble" style="top:50%; left:68%;">
                  <i class="fa-solid fa-circle-question"></i>
                  <div class="knowledge-tooltip"><h4>🛡️ Safety First</h4><p>Closed-loop milking lines eliminate environmental dust and bacteria. The milk remains sterile from the udder to the cooling tank.</p></div>
                </div>
              </div>
            </div>
            <div class="journey-text" style="position:relative; z-index:3;">
              <div class="journey-stage-num">03</div>
              <h2>Machine Milking</h2>
              <p>Strictly touch-free milking using computerized pulsating clusters. The udders are pre-sanitized and post-dipped, protecting the herd and keeping the milk sterile.</p>
              <div class="organic-fact-box">
                <div class="organic-fact-title"><i class="fa-solid fa-seedling"></i> Extraction Hygiene</div>
                <div class="organic-fact-text">Touch-free automated milking systems protect our cows from mastitis and prevent airborne bacterial contamination during milk extraction.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 4 -->
        <div class="journey-stage" id="stage-4">
          <div class="bg-serif-quote">Nature Gives More When We Take Less</div>
          <div class="journey-layout">
            <div class="journey-visuals">
              <div class="collage-wrapper">
                <div class="collage-main"><img src="/assets/sustainability.jpg" alt="Bulk milk chilling units" class="collage-img" /></div>
                <div class="collage-sub"><img src="/assets/hero-farm.jpg" alt="Sunrise farm landscape" class="collage-img" /></div>
                <div class="floating-fact-badge float-top-left"><i class="fa-solid fa-droplet" style="color:var(--golden-accent)"></i><span>❄️ Quick Chilling (4°C)</span></div>
                <div class="knowledge-bubble" style="top:35%; left:68%;">
                  <i class="fa-solid fa-circle-question"></i>
                  <div class="knowledge-tooltip"><h4>❄️ Why Chilling Matters?</h4><p>By bringing milk temperature down to 4°C within an hour of extraction, we prevent natural bacteria from replicating, locking in purity without boiling.</p></div>
                </div>
              </div>
            </div>
            <div class="journey-text" style="position:relative; z-index:3;">
              <div class="journey-stage-num">04</div>
              <h2>Instant Cooling</h2>
              <p>Milk is piped straight into Bulk Milk Chillers (BMCs) where it is instantly cooled down to 4°C. This stops any bacterial reproduction and locks in vitamins.</p>
              <div class="organic-fact-box">
                <div class="organic-fact-title"><i class="fa-solid fa-seedling"></i> Cold Chain Genesis</div>
                <div class="organic-fact-text">Instant cooling to 4°C within 60 minutes preserves natural enzymes and bioactive proteins, preventing any post-milking bacterial growth.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 5 -->
        <div class="journey-stage" id="stage-5">
          <div class="bg-serif-quote">Science and Purity Unified</div>
          <div class="journey-layout">
            <div class="journey-visuals">
              <div class="collage-wrapper">
                <div class="collage-main"><img src="/assets/lab-test.jpg" alt="Clinical lab analyzers" class="collage-img" /></div>
                <div class="collage-sub"><img src="/assets/paneer-pack.png" alt="Pure paneer showcase" class="collage-img" /></div>
                <div class="floating-fact-badge float-top-right"><i class="fa-solid fa-vial" style="color:var(--golden-accent)"></i><span>🔬 24+ Quality Checks</span></div>
                <div class="floating-fact-badge float-bottom-left"><i class="fa-solid fa-ban" style="color:var(--golden-accent)"></i><span>🚫 Zero Preservatives</span></div>
                <div class="knowledge-bubble" style="top:45%; left:68%;">
                  <i class="fa-solid fa-circle-question"></i>
                  <div class="knowledge-tooltip"><h4>🔬 Antibiotic-Free Guarantee</h4><p>We perform rapid diagnostic tests on every tanker load. If even a trace of antibiotic residue or adulteration is found, the entire batch is rejected.</p></div>
                </div>
              </div>
            </div>
            <div class="journey-text" style="position:relative; z-index:3;">
              <div class="journey-stage-num">05</div>
              <h2>Laboratory Testing</h2>
              <p>Every single batch undergoes testing for fat content, solids-not-fat (SNF), adulterants, water dilution, and antibiotic residues before loading into tankers.</p>
              <div class="organic-fact-box">
                <div class="organic-fact-title"><i class="fa-solid fa-seedling"></i> Quality Assurance</div>
                <div class="organic-fact-text">Every batch is screened for 24+ adulterants (urea, starch, detergents) and antibiotic residues, ensuring only 100% pure milk leaves the gate.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 6 -->
        <div class="journey-stage" id="stage-6">
          <div class="bg-serif-quote">A Healthy Choice For Everyone</div>
          <div class="journey-layout">
            <div class="journey-visuals">
              <div class="collage-wrapper">
                <div class="collage-main"><img src="/assets/hero-farm.jpg" alt="Clinical pasteurizer setup" class="collage-img" /></div>
                <div class="collage-sub"><img src="/assets/ghee-jar.png" alt="Ghee jar showcase" class="collage-img" /></div>
                <div class="floating-fact-badge float-top-left"><i class="fa-solid fa-temperature-arrow-up" style="color:var(--golden-accent)"></i><span>🔥 Gentle HTST Process</span></div>
                <div class="knowledge-bubble" style="top:30%; left:68%;">
                  <i class="fa-solid fa-circle-question"></i>
                  <div class="knowledge-tooltip"><h4>🔥 Nutrients Retained</h4><p>Pasteurization kills potential pathogens. Using specialized thermal cycles (HTST), we keep temperatures gentle enough to protect dairy enzymes.</p></div>
                </div>
              </div>
            </div>
            <div class="journey-text" style="position:relative; z-index:3;">
              <div class="journey-stage-num">06</div>
              <h2>Pasteurization</h2>
              <p>Milk is safely pasteurized at the plant to eliminate potential pathogens while retaining essential proteins and digestive enzymes through optimized thermal cycles.</p>
              <div class="organic-fact-box">
                <div class="organic-fact-title"><i class="fa-solid fa-seedling"></i> Safe Thermal Loop</div>
                <div class="organic-fact-text">High-Temperature Short-Time (HTST) pasteurization guarantees safety without destroying essential dairy vitamins and immunoglobulins.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 7 -->
        <div class="journey-stage" id="stage-7">
          <div class="bg-serif-quote">Plastic Free Circular Living</div>
          <div class="journey-layout">
            <div class="journey-visuals">
              <div class="collage-wrapper">
                <div class="collage-main"><img src="/assets/milk-bottle.png" alt="Eco-friendly glass bottling lines" class="collage-img" /></div>
                <div class="collage-sub"><img src="/assets/curd-cup.png" alt="Curd cup packaging" class="collage-img" /></div>
                <div class="floating-fact-badge float-top-right"><i class="fa-solid fa-bottle-water" style="color:var(--golden-accent)"></i><span>🍾 Recyclable Glass</span></div>
                <div class="floating-fact-badge float-bottom-left"><i class="fa-solid fa-qrcode" style="color:var(--golden-accent)"></i><span>QR Quality Tracking</span></div>
                <div class="knowledge-bubble" style="top:50%; left:68%;">
                  <i class="fa-solid fa-circle-question"></i>
                  <div class="knowledge-tooltip"><h4>🍾 Why Glass Bottles?</h4><p>Unlike plastic pouches, glass is non-porous and chemical-free, meaning zero plastic chemicals (BPA) leach into your daily milk.</p></div>
                </div>
              </div>
            </div>
            <div class="journey-text" style="position:relative; z-index:3;">
              <div class="journey-stage-num">07</div>
              <h2>Auto-Packaging</h2>
              <p>Untouched by hand, milk is filled into eco-friendly glass bottles and sealed with tamper-proof lids. Every bottle receives a tracking QR code.</p>
              <div class="organic-fact-box">
                <div class="organic-fact-title"><i class="fa-solid fa-seedling"></i> Circular Packaging</div>
                <div class="organic-fact-text">We use lead-free, sterilised glass bottles to avoid microplastics and chemical leaching, locking in natural taste and freshness.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 8 -->
        <div class="journey-stage" id="stage-8">
          <div class="bg-serif-quote">Solar Energy Powered Facilities</div>
          <div class="journey-layout">
            <div class="journey-visuals">
              <div class="collage-wrapper">
                <div class="collage-main"><img src="/assets/hero-farm.jpg" alt="Solar-powered cold storage" class="collage-img" /></div>
                <div class="collage-sub"><img src="/assets/sustainability.jpg" alt="Rooftop solar installation" class="collage-img" /></div>
                <div class="floating-fact-badge float-top-left"><i class="fa-solid fa-solar-panel" style="color:var(--golden-accent)"></i><span>☀️ 100% Solar Powered</span></div>
                <div class="knowledge-bubble" style="top:35%; left:68%;">
                  <i class="fa-solid fa-circle-question"></i>
                  <div class="knowledge-tooltip"><h4>☀️ Green Operations</h4><p>Our packaging plant is 100% solar powered, saving carbon and aligning dairy safety with planetary health.</p></div>
                </div>
              </div>
            </div>
            <div class="journey-text" style="position:relative; z-index:3;">
              <div class="journey-stage-num">08</div>
              <h2>Cold Storage</h2>
              <p>Packaged milk is stored in a clean insulated environment kept below 4°C, waiting for immediate dispatch in our temperature-controlled fleet.</p>
              <div class="organic-fact-box">
                <div class="organic-fact-title"><i class="fa-solid fa-seedling"></i> Climate Preservation</div>
                <div class="organic-fact-text">Packaged bottles are stored in solar-powered cold chambers at a constant 4°C, maintaining the pristine nutritional structure.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 9 -->
        <div class="journey-stage" id="stage-9">
          <div class="bg-serif-quote">Unbroken Cold Chain Delivery</div>
          <div class="journey-layout">
            <div class="journey-visuals">
              <div class="collage-wrapper">
                <div class="collage-main"><img src="/assets/hero-farm.jpg" alt="Insulated morning delivery fleet" class="collage-img" /></div>
                <div class="collage-sub"><img src="/assets/app-mockup.png" alt="Gaudai mobile app layout" class="collage-img" /></div>
                <div class="floating-fact-badge float-top-right"><i class="fa-solid fa-truck-ramp-box" style="color:var(--golden-accent)"></i><span>🚚 Chilled Fleet</span></div>
                <div class="knowledge-bubble" style="top:40%; left:68%;">
                  <i class="fa-solid fa-circle-question"></i>
                  <div class="knowledge-tooltip"><h4>🚚 Unbroken Cold Chain</h4><p>Our delivery vehicles use active insulation, ensuring the milk stays chilled at 4°C, preventing bacterial growth during summer heat.</p></div>
                </div>
              </div>
            </div>
            <div class="journey-text" style="position:relative; z-index:3;">
              <div class="journey-stage-num">09</div>
              <h2>Refrigerated Delivery</h2>
              <p>Our custom delivery vans leave in the early hours before sunrise, ensuring the cold chain is never broken, even in intense summer temperatures.</p>
              <div class="organic-fact-box">
                <div class="organic-fact-title"><i class="fa-solid fa-seedling"></i> Logistic Integrity</div>
                <div class="organic-fact-text">Insulated refrigerated delivery vans maintain an unbroken cold chain from our plant straight to your doorstep before sunrise.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 10 -->
        <div class="journey-stage" id="stage-10">
          <div class="bg-serif-quote">From Our Farms to Your Family</div>
          <div class="journey-layout">
            <div class="journey-visuals">
              <div class="collage-wrapper">
                <div class="collage-main"><img src="/assets/farm-story.jpg" alt="Clean delivery on customer threshold" class="collage-img" /></div>
                <div class="collage-sub"><img src="/assets/milk-bottle.png" alt="Pure milk glass jar" class="collage-img" /></div>
                <div class="floating-fact-badge float-top-left"><i class="fa-solid fa-home" style="color:var(--golden-accent)"></i><span>🥛 Ready by 7:00 AM</span></div>
                <div class="farmer-story-card">
                  <img src="https://placehold.co/100x100/0b6b3a/fff?text=SP" alt="Sukhdev Singh avatar" class="farmer-avatar" />
                  <div class="farmer-info"><span>Farmer Welfare</span><h4>Sukhdev Singh</h4><p>"We harvest purity with pride."</p></div>
                </div>
                <div class="knowledge-bubble" style="top:25%; left:68%;">
                  <i class="fa-solid fa-circle-question"></i>
                  <div class="knowledge-tooltip"><h4>🥛 Pure Wellness</h4><p>No chemicals, no preservatives, and zero human contact. Pour raw, pasteurize, or churn ghee, knowing it is dairy in its most honest form.</p></div>
                </div>
              </div>
            </div>
            <div class="journey-text" style="position:relative; z-index:3;">
              <div class="journey-stage-num">10</div>
              <h2>Your Dining Table</h2>
              <p>By 7:00 AM, the fresh milk bottle sits at your doorstep. Clean, pure, creamy, and ready to nourish your children, just as nature intended.</p>
              <div class="organic-fact-box">
                <div class="organic-fact-title"><i class="fa-solid fa-seedling"></i> Table Delivery</div>
                <div class="organic-fact-text">Zero preservatives, zero additives, and zero human contact—pure organic dairy just as nature intended for your family's health.</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="journey-progress">
        <div class="journey-progress-bar" id="journey-progress-bar"></div>
        <div class="journey-steps-indicator">
          <span class="journey-step-dot active" data-slide="0">01</span>
          <span class="journey-step-dot" data-slide="1">02</span>
          <span class="journey-step-dot" data-slide="2">03</span>
          <span class="journey-step-dot" data-slide="3">04</span>
          <span class="journey-step-dot" data-slide="4">05</span>
          <span class="journey-step-dot" data-slide="5">06</span>
          <span class="journey-step-dot" data-slide="6">07</span>
          <span class="journey-step-dot" data-slide="7">08</span>
          <span class="journey-step-dot" data-slide="8">09</span>
          <span class="journey-step-dot" data-slide="9">10</span>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Organic Farming SVG Section
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

  ${footerHTML()}`;
}

export function init(gsap, ScrollTrigger, lenis, MotionPathPlugin) {
  gsap.from('.page-hero-content', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 0.2 });

  // Horizontal scroll journey
  const journeyWrapper = document.getElementById('journey-wrapper');
  const stages = document.querySelectorAll('.journey-stage');

  if (journeyWrapper && stages.length) {
    // Ensure layout is done before measuring
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
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
            const percent = self.progress * 100;
            const progressBar = document.getElementById('journey-progress-bar');
            if (progressBar) progressBar.style.width = `${percent}%`;
            const stepIndex = Math.min(Math.floor(self.progress * stages.length), stages.length - 1);
            document.querySelectorAll('.journey-step-dot').forEach((dot, idx) => {
              dot.classList.toggle('active', idx === stepIndex);
            });
          }
        }
      });

      // Step dot clicks
      document.querySelectorAll('.journey-step-dot').forEach((dot) => {
        dot.addEventListener('click', () => {
          const targetSlide = parseInt(dot.getAttribute('data-slide'));
          const targetX = (targetSlide / (stages.length - 1)) * horizontalScrollAmount;
          const trigger = ScrollTrigger.create({ trigger: '#journey-pin', start: 'top top', end: () => `+=${horizontalScrollAmount}` });
          const triggerStart = trigger.start;
          trigger.kill();
          lenis.scrollTo(triggerStart + targetX, { duration: 1.2 });
        });
      });
    });
  }

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
