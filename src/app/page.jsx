
import Link from 'next/link';

const WA_NUMBER = '917993522059';
const WA_MSG = encodeURIComponent('Hi, I want to book a move with Tirupati Packers & Movers');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const services = [
  { icon: '🏠', title: 'House Shifting', desc: '1BHK, 2BHK, 3BHK & Villa Shifting' },
  { icon: '🏢', title: 'Office Shifting', desc: 'Office Relocation with Zero Hassle' },
  { icon: '📦', title: 'Local Shifting', desc: 'Within Tirupati City, Fast & Reliable' },
  { icon: '🔧', title: 'Loading & Unloading', desc: 'Labour for Loading, Unloading & Rearranging' },
  { icon: '🚗', title: 'Vehicle Transport', desc: 'Bike & Car Transport Services' },
];

const trustPoints = [
  { icon: '👷', title: 'Trained Professionals', desc: 'Verified & Experienced Moving Experts' },
  { icon: '🛡️', title: 'Safe & Secure', desc: 'Your Belongings are 100% Safe' },
  { icon: '⏱️', title: 'On-Time Delivery', desc: 'Punctual & Reliable Service' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Best Prices with No Hidden Charges' },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5000+', label: 'Happy Customers' },
  { value: '24/7', label: 'Customer Support' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
  { value: 'Trained & Verified', label: 'Staff' },
];

const areas = ['Tirupati', 'Renigunta', 'Tiruchanoor', 'Chandragiri', 'Srikalahasti', 'Yerpedu'];

const steps = [
  { icon: '📋', label: 'VISITOR FILLS FORM' },
  { icon: '💬', label: 'OPENS WHATSAPP WITH DETAILS' },
  { icon: '✅', label: 'YOU RECEIVE & CONFIRM BOOKING' },
  { icon: '🚛', label: 'ARRANGE LABOUR & VEHICLE' },
  { icon: '🎉', label: 'JOB COMPLETED, CUSTOMER HAPPY!' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Trusted Packers & Movers in Tirupati</span>
          <h1>
            Safe. Fast. Affordable<br />
            <span className="hero-highlight">House Shifting Services</span>
          </h1>
          <p>We make your move simple and stress-free.<br />From packing to delivery – We handle everything!</p>
          <div className="hero-buttons">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-green">
              📱 Book on WhatsApp
            </a>
            <Link href="/booking" className="btn-outline">Get a Quote</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="truck-placeholder">
            <span>🚛</span>
            <div className="boxes">📦📦📦</div>
          </div>
        </div>

        
      </section>

      {/* TRUST POINTS */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-grid">
            {trustPoints.map((t) => (
              <div key={t.title} className="trust-item">
                <span className="trust-icon">{t.icon}</span>
                <div>
                  <div className="trust-title">{t.title}</div>
                  <div className="trust-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
   
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We provide a wide range of moving services</p>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
        
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container">
          <h2 style={{ color: '#fff', textAlign: 'center', fontSize: '2rem', fontWeight: 800, marginBottom: 36 }}>
            Why Choose Us?
          </h2>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
       
      </section>

      {/* SERVICE AREAS */}
      <section className="section section-alt">
        <div className="container">
          <div className="areas-layout">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Our Service Areas</h2>
              <p style={{ color: '#666', marginBottom: 24 }}>We Serve All Areas in and Around Tirupati</p>
              <div className="areas-tags">
                {areas.map((a) => (
                  <span key={a} className="area-tag">{a}</span>
                ))}
                <span className="area-tag area-more">And More...</span>
              </div>
            </div>
            <div className="areas-visual">
              <span>🛕</span>
              <p>Tirupati & Surrounding Areas</p>
            </div>
          </div>
        </div>
        
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Simple 5-step booking process via WhatsApp</p>
          <div className="steps-row">
            {steps.map((step, i) => (
              <div key={i} className="step-wrapper">
                <div className="step-item">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-label">{step.label}</div>
                </div>
                {i < steps.length - 1 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
     
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Move? Get a Free Quote!</h2>
          <p>Contact us today and experience the most reliable moving service in Tirupati.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-green">
              📱 Book on WhatsApp
            </a>
            <Link href="/booking" className="btn-outline-white">Get a Quote</Link>
          </div>
        </div>
   
      </section>
    </>
  );
}
