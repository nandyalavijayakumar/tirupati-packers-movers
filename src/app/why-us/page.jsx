import Link from 'next/link';

export const metadata = {
  title: 'Why Choose Us - Tirupati Packers & Movers',
};

const reasons = [
  { icon: '👷', title: 'Trained Professionals', desc: 'Our team consists of verified, experienced moving experts who are trained in proper packing, loading, and transport techniques to ensure zero damage.' },
  { icon: '🛡️', title: 'Safe & Secure', desc: 'Your belongings are 100% safe with us. We use high-quality packing materials and follow best practices to prevent any damage during the move.' },
  { icon: '⏱️', title: 'On-Time Delivery', desc: 'We value your time. Our team arrives on schedule and delivers your items within the promised timeframe, always keeping you updated.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Best prices with no hidden charges. We provide transparent quotations upfront so you know exactly what you\'re paying for.' },
  { icon: '📱', title: 'WhatsApp Booking', desc: 'Book your move instantly via WhatsApp. Get quick confirmations, real-time updates, and direct communication throughout your move.' },
  { icon: '🏆', title: '10+ Years Experience', desc: 'With over a decade in the moving industry in Tirupati, we have the expertise to handle any type of move efficiently and safely.' },
  { icon: '📦', title: 'Premium Packing Materials', desc: 'We use the best quality packing materials including bubble wrap, corrugated boxes, and stretch film to protect your valuables.' },
  { icon: '🌟', title: '5000+ Happy Customers', desc: 'Our track record speaks for itself. Over 5000 families and businesses in Tirupati have trusted us with their moves.' },
];

const WA_URL = 'https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20move';

export default function WhyUsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <span>Why Choose Us</span>
          </nav>
          <h1>Why Choose Us</h1>
          <p style={{ color: '#666', marginTop: 6 }}>Tirupati's most trusted packers and movers — here's why</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Tirupati Packers & Movers?</h2>
          <p className="section-subtitle">8 reasons why 5000+ customers trust us with their moves</p>
          <div className="reasons-grid">
            {reasons.map((r) => (
              <div key={r.title} className="reason-card">
                <div className="reason-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="compare-layout">
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a2e5a', marginBottom: 24 }}>
                Us vs Others
              </h2>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="us-col">Tirupati P&M ✅</th>
                    <th>Others ❌</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Transparent Pricing', '✅ Yes', '❌ Hidden charges'],
                    ['WhatsApp Booking', '✅ Instant', '❌ Long process'],
                    ['Trained Staff', '✅ Verified', '❌ Unverified'],
                    ['On-Time Delivery', '✅ Guaranteed', '❌ Uncertain'],
                    ['Free Quotation', '✅ Always', '❌ Charged'],
                    ['24/7 Support', '✅ WhatsApp', '❌ Limited hours'],
                  ].map(([feature, us, others]) => (
                    <tr key={feature}>
                      <td>{feature}</td>
                      <td className="us-col green">{us}</td>
                      <td className="red">{others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="why-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Experience the Difference</h2>
          <p>Join 5000+ happy customers who chose us for a stress-free move.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-green" style={{ marginTop: 24, display: 'inline-flex' }}>
            📱 Book on WhatsApp
          </a>
        </div>
      </section>

     
    </>
  );
}
