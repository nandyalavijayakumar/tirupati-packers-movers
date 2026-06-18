import Link from 'next/link';

export const metadata = {
  title: 'Contact Us - Tirupati Packers & Movers',
};

const contactInfo = [
  { icon: '📞', label: 'Phone', value: '+91 79935 22059', href: 'tel:+917993522059' },
  { icon: '💬', label: 'WhatsApp', value: '+91 79935 22059', href: 'https://wa.me/917993522059' },
  { icon: '✉️', label: 'Email', value: 'nviju25@gmail.com', href: 'mailto:nviju25@gmail.com' },
  { icon: '📍', label: 'Address', value: 'Tirupati, Andhra Pradesh, India', href: null },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <span>Contact Us</span>
          </nav>
          <h1>Contact Us</h1>
          <p style={{ color: '#666', marginTop: 6 }}>Get in touch for a free quote or any enquiries</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* GET IN TOUCH */}
            <div className="contact-info-panel">
              <h2>Get in Touch</h2>
              <p>Reach out via call, WhatsApp, or email. We respond quickly!</p>

              <div className="contact-info-list">
                {contactInfo.map((c) => (
                  <div key={c.label} className="contact-info-item">
                    <div className="ci-icon">{c.icon}</div>
                    <div>
                      <div className="ci-label">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="ci-value">{c.value}</a>
                      ) : (
                        <span className="ci-value">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="follow-us">
                <h4>Follow Us</h4>
                <div className="social-row">
                  <a href="#" className="social-btn fb" title="Facebook">f</a>
                  <a href="#" className="social-btn ig" title="Instagram">📷</a>
                  <a href="#" className="social-btn yt" title="YouTube">▶</a>
                  <a href="https://wa.me/917993522059" target="_blank" rel="noopener noreferrer" className="social-btn wa" title="WhatsApp">💬</a>
                </div>
              </div>
            </div>

            {/* QUICK BOOK CTA */}
            <div className="contact-cta-panel">
              <div className="cta-card">
                <div className="cta-icon">🚛</div>
                <h3>Ready to Move?</h3>
                <p>Book your move now via WhatsApp for instant confirmation and a free quote.</p>
                <a
                  href="https://wa.me/917993522059?text=Hi%2C%20I%20want%20to%20book%20a%20move"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green cta-btn"
                >
                  📱 Book on WhatsApp
                </a>
              </div>

              <div className="cta-card secondary-cta">
                <h3>Get a Detailed Quote</h3>
                <p>Fill our booking form for a detailed quotation based on your requirements.</p>
                <Link href="/booking" className="btn-outline">Fill Booking Form</Link>
              </div>

              <div className="hours-card">
                <h4>📅 Working Hours</h4>
                <div className="hours-row">
                  <span>Monday – Saturday</span>
                  <span className="hours-val">8:00 AM – 8:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <span className="hours-val">9:00 AM – 6:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>WhatsApp Support</span>
                  <span className="hours-val green-text">24 / 7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
