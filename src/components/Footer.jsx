import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🚛</span>
            <div>
              <div className="logo-main">TIRUPATI</div>
              <div className="logo-sub">PACKERS & MOVERS</div>
            </div>
          </div>
          <p className="footer-tagline">Safe, Fast & Affordable Moving Services in Tirupati.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <Link href="/services">House Shifting</Link>
          <Link href="/services">Office Shifting</Link>
          <Link href="/services">Local Shifting</Link>
          <Link href="/services">Vehicle Transport</Link>
        </div>

        <div className="footer-col">
          <h4>Service Areas</h4>
          <span>Tirupati</span>
          <span>Renigunta</span>
          <span>Tiruchanoor</span>
          <span>Chandragiri</span>
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <a href="tel:+917993522059">📞 +91 79935 22059</a>
          <a href="mailto:nviju25@gmail.com">✉️ nviju25@gmail.com</a>
          <span>📍 Tirupati, Andhra Pradesh</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Tirupati Packers & Movers. All Rights Reserved. &nbsp;|&nbsp; Designed with ❤️ for Better Moving Experience</p>
      </div>


    </footer>
  );
}
