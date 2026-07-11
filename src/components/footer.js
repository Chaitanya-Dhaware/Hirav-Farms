export function footerHTML() {
  return `
  <footer>
    <svg class="footer-wave" viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,20 Q360,40 720,20 T1440,20 L1440,40 L0,40 Z" />
    </svg>
    
    <div class="footer-row">
      <div class="footer-col-about">
        <a href="/#/" class="footer-logo">Hirav Farms</a>
        <p>Delivering authentic, chemically clean, and laboratory verified premium dairy products directly from our sustainable eco-farm to your doorstep.</p>
        <div class="social-links">
          <a href="#" class="social-btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="social-btn" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" class="social-btn" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>

      <div class="footer-col-links">
        <h4>Explore</h4>
        <ul class="footer-links">
          <li><a href="/#/about">Our Story</a></li>
          <li><a href="/#/products">Products Range</a></li>
          <li><a href="/#/sustainability">Green Plant</a></li>
          <li><a href="/#/stories">Farmer Welfare</a></li>
        </ul>
      </div>

      <div class="footer-col-links">
        <h4>Support</h4>
        <ul class="footer-links">
          <li><a href="/#/contact">Contact Support</a></li>
          <li><a href="#">Delivery Cities</a></li>
          <li><a href="#">FAQ Help</a></li>
          <li><a href="#">Refund Policy</a></li>
        </ul>
      </div>

      <div class="footer-col-newsletter">
        <h4>Newsletter</h4>
        <p>Subscribe to receive organic recipes, farming updates, and special discounts.</p>
        <form class="newsletter-form" id="newsletter-form-element">
          <input type="email" placeholder="Your Email Address" aria-label="Email for newsletter subscribe" required />
          <button type="submit" aria-label="Subscribe to newsletter"><i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Hirav Farms Private Limited. All Rights Reserved. Gaudai is a registered trademark of Hirav Farms.</p>
      <div class="footer-bottom-links">
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Security Info</a>
      </div>
    </div>
  </footer>`;
}
