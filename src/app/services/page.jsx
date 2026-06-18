import Link from 'next/link';

const WA_NUMBER = '917993522059';
const WA_MSG = encodeURIComponent('Hi, I want to enquire about your services');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const services = [
  {
    icon: '🏠',
    title: 'House Shifting',
    desc: '1BHK, 2BHK, 3BHK & Villa Shifting',
    details: [
      'Complete packing and unpacking services',
      '1BHK, 2BHK, 3BHK & Villa shifting',
      'Furniture dismantling & reassembly',
      'Safe loading and unloading',
      'Damage-free delivery guaranteed',
    ],
  },
  {
    icon: '🏢',
    title: 'Office Shifting',
    desc: 'Office Relocation with Zero Hassle',
    details: [
      'Minimal downtime during relocation',
      'IT equipment & furniture shifting',
      'Weekend and after-hours moves',
      'Systematic unpacking and setup',
      'Document & file safety ensured',
    ],
  },
  {
    icon: '📦',
    title: 'Local Shifting',
    desc: 'Within Tirupati City, Fast & Reliable',
    details: [
      'Same-day shifting available',
      'Local moves within Tirupati city',
      'Affordable hourly rates',
      'Experienced local team',
      'Quick turnaround time',
    ],
  },
  {
    icon: '🔧',
    title: 'Loading & Unloading',
    desc: 'Labour for Loading, Unloading & Rearranging',
    details: [
      'Trained labour team available',
      'Heavy furniture handling',
      'Floor-to-floor shifting',
      'Rearranging and placement',
      'Available on call & same day',
    ],
  },
  {
    icon: '🚗',
    title: 'Vehicle Transport',
    desc: 'Bike & Car Transport Services',
    details: [
      'Two-wheeler & four-wheeler transport',
      'Fully enclosed carrier options',
      'GPS tracking available',
      'Insurance coverage',
      'Door-to-door delivery',
    ],
  },
];

export const metadata = {
  title: 'Our Services - Tirupati Packers & Movers',
};

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <span>Services</span>
          </nav>
          <h1>Our Services</h1>
          <p style={{ color: '#666', marginTop: 6 }}>A complete range of professional moving solutions</p>
        </div>
      </section>

      {/* SERVICE CARDS GRID */}
      <section className="section">
        <div className="container">
          <div className="services-grid-top">
            {services.map((s) => (
              <div key={s.title} className="svc-card-top">
                <div className="svc-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE SECTIONS */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">What's Included in Each Service</h2>
          <p className="section-subtitle">Detailed breakdown of everything we offer</p>
          <div className="detail-grid">
            {services.map((s) => (
              <div key={s.title} className="detail-card">
                <div className="detail-header">
                  <span className="detail-icon">{s.icon}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
                <ul className="detail-list">
                  {s.details.map((d) => (
                    <li key={d}><span>✓</span> {d}</li>
                  ))}
                </ul>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-green svc-btn">
                  📱 Book This Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
