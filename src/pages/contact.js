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
              Continue to WhatsApp <i class="fa-brands fa-whatsapp btn-icon"></i>
            </button>
            <p id="contact-form-status" class="form-status" role="status" aria-live="polite">
              Your message will open in WhatsApp for you to review and send.
            </p>
          </form>
        </div>

        <div class="contact-info-panel">
          <div class="contact-details">
            <div class="contact-detail-item">
              <h4><i class="fa-solid fa-location-dot" style="color:var(--primary-green); margin-right:8px;"></i> Farm Location</h4>
              <p>Hirav Farms, Georai, Beed, Maharashtra 431127.</p>
            </div>
            <div class="contact-detail-item">
              <h4><i class="fa-solid fa-envelope" style="color:var(--primary-green); margin-right:8px;"></i> Email</h4>
              <p><a href="mailto:hiravfarms@gmail.com">hiravfarms@gmail.com</a></p>
            </div>
            <div class="contact-detail-item">
              <h4><i class="fa-solid fa-phone" style="color:var(--primary-green); margin-right:8px;"></i> Phone</h4>
              <p><a href="tel:+918055943000">+91 80559 43000</a></p>
            </div>
            <div class="contact-detail-item">
              <h4><i class="fa-brands fa-whatsapp" style="color:var(--primary-green); margin-right:8px;"></i> WhatsApp</h4>
              <p><a href="https://wa.me/918055943000" target="_blank">Chat with us</a></p>
            </div>
          </div>

          <div class="map-wrapper">
            <iframe 
              class="map-iframe"
              src="https://www.google.com/maps?q=Georai%2C+Beed%2C+Maharashtra+431127&output=embed" 
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

  // Open a pre-filled WhatsApp message. The visitor reviews and sends it
  // in WhatsApp; this site does not claim to deliver the enquiry itself.
  const contactForm = document.getElementById('contact-form-element');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const message = String(formData.get('message') || '').trim();

      const whatsappMessage = [
        'Hello Hirav Farms,',
        '',
        'I would like to make an enquiry.',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Message: ${message}`,
      ].join('\n');

      const whatsappUrl = `https://wa.me/918055943000?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      const status = document.getElementById('contact-form-status');
      if (status) {
        status.textContent = 'WhatsApp should open with your enquiry filled in. Please review the message and press Send in WhatsApp.';
      }
    });
  }
}
