import Link from 'next/link';

export const metadata = {
  title: 'Areas We Serve - Tirupati Packers & Movers',
};

const areas = [
  { name: 'Tirupati', desc: 'Full city coverage including Alipiri, Tirumala Road, Balaji Nagar, and all localities.' },
  { name: 'Renigunta', desc: 'Complete shifting services for Renigunta town and nearby railway colony areas.' },
  { name: 'Tiruchanoor', desc: 'House and office shifting in Tiruchanoor and surrounding temple town areas.' },
  { name: 'Chandragiri', desc: 'Local and long-distance moves to and from Chandragiri and nearby villages.' },
  { name: 'Srikalahasti', desc: 'Affordable relocation services covering Srikalahasti and surrounding areas.' },
  { name: 'Yerpedu', desc: 'Reliable shifting services in Yerpedu and connecting highway localities.' },
  { name: 'Puttur', desc: 'House shifting, office relocation, and vehicle transport to/from Puttur.' },
  { name: 'Nagari', desc: 'Budget-friendly local and intercity moves covering Nagari and nearby areas.' },
];

const WA_URL = 'https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20move';

export default function AreasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <span>Areas We Serve</span>
          </nav>
          <h1>Areas We Serve</h1>
          <p style={{ color: '#666', marginTop: 6 }}>Tirupati and all surrounding districts</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">We Cover All Areas in and Around Tirupati</h2>
          <p className="section-subtitle">No matter where you're moving in the region, we have you covered</p>
          <div className="areas-grid">
            {areas.map((a) => (
              <div key={a.name} className="area-card">
                <div className="area-icon">📍</div>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="area-cta">
                  Book in {a.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="coverage-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Don't See Your Area?</h2>
          <p>We may still serve your location. Contact us on WhatsApp to confirm.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-green" style={{ marginTop: 20, display: 'inline-flex' }}>
            📱 Ask on WhatsApp
          </a>
        </div>
      </section>

    
    </>
  );
}
