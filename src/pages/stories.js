import { footerHTML } from '../components/footer.js';

export function html() {
  return `
    <!-- Page Hero -->
    <section class="page-hero" id="page-hero-stories">
      <img src="/assets/farm-story.jpg" alt="Farmer family of Hirav Farms" class="page-hero-bg" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <span class="subtitle">Social Impact</span>
        <h1>Farmer Stories &amp;<br>Community Voices</h1>
        <p>120+ families, one shared mission — bringing honest dairy to every household.</p>
      </div>
    </section>

    <!-- ==========================================
         Farmer Stories
         ========================================== -->
    <section id="farmer-stories">
      <span class="subtitle">Social Impact</span>
      <h2>Farmer Empowerment</h2>
      
      <div class="farmer-row">
        <div class="farmer-visual">
          <img src="/assets/farm-story.jpg" alt="Farmer family of Hirav Farms standing in fields" class="farmer-img" id="farmer-main-img" />
        </div>

        <div class="farmer-story-content">
          <div class="farmer-quote" id="farmer-quote-text">
            "Working with Hirav Farms has transformed our lives. We get fair prices, veterinary support, and dairy training. Our family now has stable medical security."
          </div>
          <div class="farmer-name" id="farmer-quote-name">Sukhdev Singh</div>
          <div class="farmer-role">Senior Farmer Partner</div>
          
          <div class="farmer-stat-row">
            <div class="farmer-stat-item">
              <h4 id="farmer-stat-income">+35%</h4>
              <p>Household Income</p>
            </div>
            <div class="farmer-stat-item">
              <h4 id="farmer-stat-veterinary">24/7</h4>
              <p>Vet Assistance</p>
            </div>
            <div class="farmer-stat-item">
              <h4 id="farmer-stat-farmers">120+</h4>
              <p>Farming Families</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Customer Testimonials
         ========================================== -->
    <section id="testimonials" class="section-center">
      <span class="subtitle">Reviews</span>
      <h2>Loved By Happy Families</h2>
      <p>Listen to parents who switched to Gaudai milk for their households.</p>

      <div class="testimonials-carousel" id="testimonials-carousel">
        <div class="testimonials-track" id="testimonials-track">
          
          <div class="testimonial-card">
            <div class="testimonial-stars">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p class="testimonial-text">"The fat consistency in Gaudai milk is incredible. My kids absolutely love the taste, and as a mother, I have peace of mind knowing it contains zero antibiotics."</p>
            <div class="testimonial-user">
              <img src="https://placehold.co/50x50/e0e0e0/555?text=A" alt="Ananya Sharma avatar" class="testimonial-avatar" />
              <div class="testimonial-user-info"><h4>Ananya Sharma</h4><p>Parent &amp; Nutritionist, Gurgaon</p></div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-stars">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p class="testimonial-text">"I ordered their Bilona Ghee last month. The aroma takes me straight back to my grandmother's home in Punjab. Pure quality and premium glass packaging."</p>
            <div class="testimonial-user">
              <img src="https://placehold.co/50x50/e0e0e0/555?text=R" alt="Rajesh Kapoor avatar" class="testimonial-avatar" />
              <div class="testimonial-user-info"><h4>Rajesh Kapoor</h4><p>Home Chef, Noida</p></div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-stars">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p class="testimonial-text">"Their automated subscription is so smooth. The cold delivery driver drops the chilled milk bottle by 6:30 AM every morning. Highly recommended!"</p>
            <div class="testimonial-user">
              <img src="https://placehold.co/50x50/e0e0e0/555?text=M" alt="Meera Sen avatar" class="testimonial-avatar" />
              <div class="testimonial-user-info"><h4>Meera Sen</h4><p>Tech Professional, Delhi</p></div>
            </div>
          </div>

        </div>

        <div class="carousel-controls">
          <button class="carousel-btn" id="prev-testi" aria-label="Previous Testimonial"><i class="fa-solid fa-chevron-left"></i></button>
          <button class="carousel-btn" id="next-testi" aria-label="Next Testimonial"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Gallery
         ========================================== -->
    <section id="gallery">
      <div class="section-center">
        <span class="subtitle">Glimpses</span>
        <h2>Inside Hirav Farms</h2>
        <p>A peek into our green landscape, automatic facilities, and happy workers.</p>
      </div>

      <div class="gallery-grid">
        <div class="gallery-item" id="gal-1">
          <div class="gallery-img-wrapper">
            <img src="/assets/hero-farm.jpg" alt="Aerial view of pastures" />
            <div class="gallery-overlay"><h4>Organic Pastures</h4><p>Drone Glimpse</p></div>
          </div>
        </div>
        <div class="gallery-item" id="gal-2">
          <div class="gallery-img-wrapper">
            <img src="/assets/cow-milking.jpg" alt="Automated Milking lines" />
            <div class="gallery-overlay"><h4>Clinical Extraction</h4><p>Factory Flow</p></div>
          </div>
        </div>
        <div class="gallery-item" id="gal-3">
          <div class="gallery-img-wrapper">
            <img src="/assets/farm-story.jpg" alt="Murrah buffalo closeup" />
            <div class="gallery-overlay"><h4>Healthy Cattle</h4><p>Our Pride</p></div>
          </div>
        </div>
        <div class="gallery-item" id="gal-4">
          <div class="gallery-img-wrapper">
            <img src="/assets/lab-test.jpg" alt="Quality analyzer setup" />
            <div class="gallery-overlay"><h4>Science First</h4><p>Laboratory Check</p></div>
          </div>
        </div>
        <div class="gallery-item" id="gal-5">
          <div class="gallery-img-wrapper">
            <img src="/assets/sustainability.jpg" alt="Solar grid install" />
            <div class="gallery-overlay"><h4>Green Energy</h4><p>Solar Panel Setup</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         Blog Section
         ========================================== -->
    <section id="blog">
      <div class="section-center">
        <span class="subtitle">Wellness Reads</span>
        <h2>Organic Farming &amp; Life</h2>
        <p>Read about natural living, dairy science, and organic rural initiatives.</p>
      </div>

      <div class="blog-grid">
        <div class="blog-card" id="blog-1">
          <div class="blog-img-container"><img src="/assets/farm-story.jpg" alt="Close-up of healthy organic fodder fields" class="blog-img" /></div>
          <div class="blog-content">
            <div class="blog-meta-info"><span>June 28, 2026</span> • <span>5 Min Read</span></div>
            <h3>Why Grass Quality Directly Impacts Milk Sweetness</h3>
            <p>Unveiling how customized multi-nutrient grass blends like napier and clover naturally adjust soluble sugars in dairy buffaloes.</p>
            <a href="#" class="btn btn-secondary" style="padding: 0.6rem 1.4rem; font-size: 0.85rem;">Read Article</a>
          </div>
        </div>

        <div class="blog-card" id="blog-2">
          <div class="blog-img-container"><img src="/assets/lab-test.jpg" alt="Milk testing vial setups" class="blog-img" /></div>
          <div class="blog-content">
            <div class="blog-meta-info"><span>June 15, 2026</span> • <span>8 Min Read</span></div>
            <h3>Understanding Milk Adulterants &amp; Food Safety</h3>
            <p>A visual walkthrough of regular parameters including urea, detergents, and maltodextrin testing methods in your milk.</p>
            <a href="#" class="btn btn-secondary" style="padding: 0.6rem 1.4rem; font-size: 0.85rem;">Read Article</a>
          </div>
        </div>

        <div class="blog-card" id="blog-3">
          <div class="blog-img-container"><img src="/assets/sustainability.jpg" alt="Sustainable rainwater farm ditch" class="blog-img" /></div>
          <div class="blog-content">
            <div class="blog-meta-info"><span>June 02, 2026</span> • <span>6 Min Read</span></div>
            <h3>Circular Economy in Indian Farming Communities</h3>
            <p>How biodigestors and solar irrigation are paving paths for zero-carbon independent rural farming structures.</p>
            <a href="#" class="btn btn-secondary" style="padding: 0.6rem 1.4rem; font-size: 0.85rem;">Read Article</a>
          </div>
        </div>
      </div>
    </section>

  ${footerHTML()}`;
}

export function init(gsap, ScrollTrigger) {
  gsap.from('.page-hero-content', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 0.2 });

  // Farmer quote typing
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

  // Income stat
  gsap.from('#farmer-stat-income', {
    textContent: 0, duration: 2.2, ease: 'power2.out', snap: { textContent: 1 },
    scrollTrigger: { trigger: '#farmer-stories', start: 'top 75%' },
    onUpdate: function () {
      const el = document.getElementById('farmer-stat-income');
      if (el) el.innerHTML = '+' + Math.ceil(el.textContent) + '%';
    }
  });

  // Testimonial carousel
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('prev-testi');
  const nextBtn = document.getElementById('next-testi');
  let currentSlide = 0;

  if (track) {
    const cards = document.querySelectorAll('.testimonial-card');
    const maxSlides = cards.length;
    function getCardWidth() {
      return cards[0].offsetWidth + parseInt(window.getComputedStyle(track).gap || '0');
    }
    function slideTo(idx) {
      currentSlide = Math.max(0, Math.min(idx, maxSlides - 1));
      gsap.to(track, { x: -currentSlide * getCardWidth(), duration: 0.6, ease: 'power3.out' });
    }
    prevBtn.addEventListener('click', () => slideTo(currentSlide - 1));
    nextBtn.addEventListener('click', () => slideTo(currentSlide + 1));
    window.addEventListener('resize', () => slideTo(currentSlide));
  }

  // Gallery
  gsap.from('.gallery-item', {
    opacity: 0, y: 50, duration: 0.8, stagger: 0.1,
    scrollTrigger: { trigger: '#gallery', start: 'top 75%' }
  });

  // Blog
  gsap.from('.blog-card', {
    opacity: 0, y: 40, duration: 0.8, stagger: 0.15,
    scrollTrigger: { trigger: '#blog', start: 'top 80%' }
  });
}
