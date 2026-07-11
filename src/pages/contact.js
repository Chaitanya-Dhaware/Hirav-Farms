import { footerHTML } from '../components/footer.js';

export function html() {
  return `
    <!-- Page Hero -->
    <section class="page-hero" id="page-hero-contact">
      <img src="/assets/hero-farm.jpg" alt="Hirav Farms sunrise farm view" class="page-hero-bg" />
      <div class="page-hero-overlay page-hero-overlay-deep"></div>
      <div class="page-hero-content">
        <span class="subtitle">Get In Touch</span>
        <h1>Connect With Our<br>Office &amp; Farm</h1>
        <p>Reach out to request custom bulk orders, schedule agricultural visits, or solve app delivery queries.</p>
      </div>
    </section>

    <!-- ==========================================
         Contact Form & Map
         ========================================== -->
    <section id="contact">
      <div class="section-center">
        <span class="subtitle">Get In Touch</span>
        <h2>Connect With Our Office &amp; Farm</h2>
        <p>Reach out to request custom bulk orders, schedule agricultural visits, or solve app delivery queries.</p>
      </div>

      <div class="contact-row">
        <div class="contact-form-container">
          <form class="contact-form" id="contact-form-element">
            <div class="form-group">
              <label for="contact-name">Full Name</label>
              <input type="text" id="contact-name" name="name" placeholder="Enter your name" required />
            </div>
            <div class="form-group">
              <label for="contact-email">Email Address</label>
              <input type="email" id="contact-email" name="email" placeholder="Enter your email" required />
            </div>
            <div class="form-group">
              <label for="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" id="btn-submit-contact" style="align-self:flex-start;">
              Send Message <i class="fa-solid fa-paper-plane btn-icon"></i>
            </button>
          </form>
        </div>

        <div class="contact-info-panel">
          <div class="contact-details">
            <div class="contact-detail-item">
              <h4><i class="fa-solid fa-location-dot" style="color:var(--primary-green); margin-right:8px;"></i> Farm Location</h4>
              <p>Hirav Farms, Vill. Nauranga, Hissar-Delhi Highway, Haryana, India.</p>
            </div>
            <div class="contact-detail-item">
              <h4><i class="fa-solid fa-envelope" style="color:var(--primary-green); margin-right:8px;"></i> Email</h4>
              <p><a href="mailto:info@hiravfarms.com">info@hiravfarms.com</a></p>
            </div>
            <div class="contact-detail-item">
              <h4><i class="fa-solid fa-phone" style="color:var(--primary-green); margin-right:8px;"></i> Phone</h4>
              <p><a href="tel:+919876543210">+91 98765 43210</a></p>
            </div>
            <div class="contact-detail-item">
              <h4><i class="fa-brands fa-whatsapp" style="color:var(--primary-green); margin-right:8px;"></i> WhatsApp</h4>
              <p><a href="https://wa.me/919876543210" target="_blank">Chat with us</a></p>
            </div>
          </div>

          <div class="map-wrapper">
            <iframe 
              class="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111664.12351239856!2d75.6321235652312!3d29.15123456782345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391163dc1234567f%3A0xabcd12345678abcd!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              aria-label="Google Map location of Hirav Farms">
            </iframe>
          </div>
        </div>
      </div>
    </section>

  ${footerHTML()}`;
}

export function init(gsap, ScrollTrigger) {
  gsap.from('.page-hero-content', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 0.2 });

  gsap.from('.contact-form-container', {
    opacity: 0, x: -40, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: '#contact', start: 'top 80%' }
  });
  gsap.from('.contact-info-panel', {
    opacity: 0, x: 40, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: '#contact', start: 'top 80%' }
  });

  // Contact form submit
  const contactForm = document.getElementById('contact-form-element');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('btn-submit-contact');
      btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin btn-icon"></i>';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = 'Success! <i class="fa-solid fa-check btn-icon"></i>';
        btn.style.background = 'var(--fresh-green)';
        contactForm.reset();
        setTimeout(() => {
          btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane btn-icon"></i>';
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
}
