import Link from 'next/link';

const WA_URL = 'https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5000+', label: 'Happy Customers' },
  { value: '100+', label: 'Trained Staff' },
];

const values = [
  { icon: '🏆', title: 'Excellence', desc: 'We strive for excellence in every move, ensuring the highest standards of service.' },
  { icon: '🤝', title: 'Trust', desc: 'We build long-term relationships with our customers through transparency and reliability.' },
  { icon: '🛡️', title: 'Safety', desc: 'Your belongings are treated with the utmost care. We guarantee safe and secure delivery.' },
  { icon: '⚡', title: 'Efficiency', desc: 'We value your time. Our team works swiftly and professionally without cutting corners.' },
];

export const metadata = {
  title: 'About Us - Tirupati Packers & Movers',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <span>About Us</span>
          </nav>
          <h1>About Us</h1>
        </div>
      </section>

      {/* MAIN ABOUT SECTION */}
      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div className="about-visual">
              <div className="about-visual-card">
                <span style={{ fontSize: '5rem' }}>🚛</span>
                <div className="about-stats-row">
                  {stats.map((s) => (
                    <div key={s.label} className="about-stat">
                      <div className="about-stat-val">{s.value}</div>
                      <div className="about-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-text">
              <span className="section-badge">Who We Are</span>
              <h2>We Make Moving <span style={{ color: '#25a244' }}>Simple & Stress-Free</span></h2>
              <p>
                Tirupati Packers & Movers is a trusted moving company providing reliable and affordable shifting services for homes, offices, and vehicles. Our professional team ensures your belongings are safe and delivered on time.
              </p>
              <p>
                Founded over a decade ago in Tirupati, Andhra Pradesh, we have grown from a small local team to one of the most trusted packers and movers in the region. We serve Tirupati, Renigunta, Tiruchanoor, Chandragiri, Srikalahasti, Yerpedu, and all surrounding areas.
              </p>
              <p>
                Our mission is to take the stress out of moving. Whether you're shifting a 1BHK apartment or an entire office, we handle every detail — from careful packing to final placement — so you can focus on your new beginning.
              </p>
              <div style={{ marginTop: 28 }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-green">
                  📱 Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE BANNER */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Trusted by 5000+ Families in Tirupati</h2>
          <p>Experience the difference of working with professionals who truly care about your move.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' }}>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-green">
              📱 Book on WhatsApp
            </a>
            <Link href="/contact" className="btn-outline-w">Contact Us</Link>
          </div>
        </div>
      </section>

    </>
  );
}
