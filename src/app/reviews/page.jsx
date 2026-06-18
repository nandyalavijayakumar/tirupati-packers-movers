import Link from 'next/link';

export const metadata = {
  title: 'Customer Reviews - Tirupati Packers & Movers',
};

const reviews = [
  { name: 'Suresh Reddy', location: 'Tirupati', rating: 5, date: 'March 2024', text: 'Excellent service! They packed everything carefully and delivered on time. Very professional team. Highly recommend Tirupati Packers & Movers.' },
  { name: 'Lakshmi Devi', location: 'Renigunta', rating: 5, date: 'February 2024', text: 'Very happy with the service. The staff was polite and handled all our belongings with great care. Zero damage, zero stress. Will use again!' },
  { name: 'Venkat Rao', location: 'Chandragiri', rating: 5, date: 'January 2024', text: 'Shifted my office completely in one day. Amazing coordination, quick turnaround. The team was very systematic and professional.' },
  { name: 'Priya S.', location: 'Tirupati', rating: 5, date: 'December 2023', text: 'Best packers and movers in Tirupati! Affordable pricing, no hidden charges. Booked via WhatsApp and got instant confirmation. Superb experience.' },
  { name: 'Ramakrishna G.', location: 'Srikalahasti', rating: 4, date: 'November 2023', text: 'Good service overall. Team arrived on time, packed everything properly. Minor delay in delivery but they kept us updated throughout.' },
  { name: 'Anitha K.', location: 'Tiruchanoor', rating: 5, date: 'October 2023', text: 'I was very worried about shifting my 2BHK but these guys made it completely stress-free. Everything arrived safely. Thank you so much!' },
];

const WA_URL = 'https://wa.me/917993522059?text=Hi%2C%20I%20want%20to%20book%20a%20move';

function StarRating({ count }) {
  return (
    <div className="stars">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <span>Reviews</span>
          </nav>
          <h1>Customer Reviews</h1>
          <p style={{ color: '#666', marginTop: 6 }}>What our happy customers say about us</p>
        </div>
      </section>

      {/* RATING SUMMARY */}
      <section className="rating-summary">
        <div className="container">
          <div className="rating-cards">
            <div className="rating-card big-rating">
              <div className="big-score">4.9</div>
              <div className="big-stars">★★★★★</div>
              <div className="big-count">Based on 5000+ reviews</div>
            </div>
            <div className="rating-card">
              <div className="rbar-row"><span>5 ★</span><div className="rbar"><div className="rbar-fill" style={{ width: '90%' }}></div></div><span>90%</span></div>
              <div className="rbar-row"><span>4 ★</span><div className="rbar"><div className="rbar-fill" style={{ width: '7%' }}></div></div><span>7%</span></div>
              <div className="rbar-row"><span>3 ★</span><div className="rbar"><div className="rbar-fill" style={{ width: '2%' }}></div></div><span>2%</span></div>
              <div className="rbar-row"><span>2 ★</span><div className="rbar"><div className="rbar-fill" style={{ width: '1%' }}></div></div><span>1%</span></div>
              <div className="rbar-row"><span>1 ★</span><div className="rbar"><div className="rbar-fill" style={{ width: '0%' }}></div></div><span>0%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW CARDS */}
      <section className="section">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-header">
                  <div className="reviewer-avatar">{r.name[0]}</div>
                  <div>
                    <div className="reviewer-name">{r.name}</div>
                    <div className="reviewer-loc">📍 {r.location}</div>
                  </div>
                  <div className="review-date">{r.date}</div>
                </div>
                <div className="review-stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                <p className="review-text">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Join 5000+ Happy Customers</h2>
          <p>Experience our 5-star service. Book your move today!</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-green" style={{ marginTop: 20, display: 'inline-flex' }}>
            📱 Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
