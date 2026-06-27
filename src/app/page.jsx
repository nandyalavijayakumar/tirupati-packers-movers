
import Link from 'next/link';
import Script from "next/script";

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
  Best Packers and Movers in Tirupati for
  <span className="hero-highlight">
    {" "}House Shifting, Office Relocation & Vehicle Transport
  </span>
</h1>
          <p>We make your move simple and stress-free.<br />From packing to delivery – We handle everything!</p>
          <div className="hero-buttons">
  <a
    href={WA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-green"
  >
    📱 Book on WhatsApp
  </a>

  <Link href="/booking" className="btn-outline">
    Get a Quote
  </Link>

  <a
    href="tel:+917993522059"
    className="btn-outline"
  >
    📞 Call Now
  </a>
</div>
        </div>
        <div className="hero-image">
          <div className="truck-placeholder">
            <span>🚛</span>
            <div className="boxes">📦📦📦</div>
          </div>
        </div>

        
  </section>

{/* ABOUT US */}
<section className="section">
  <div className="container">

    <h2 className="section-title">
      Professional Packers and Movers in Tirupati
    </h2>

    <p
      style={{
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '0 auto',
        lineHeight: '1.9',
        color: '#555',
        fontSize: '1.05rem'
      }}
    >
      Tirupati Packers & Movers is one of the most trusted relocation companies
      in Tirupati offering safe, affordable and reliable moving services.
      Whether you are shifting your house, apartment, office or commercial
      establishment, our experienced team ensures every item is packed,
      transported and delivered with complete care.

      <br /><br />

      We specialize in house shifting, office relocation, local shifting,
      furniture moving, loading & unloading, bike transportation and car
      transport services. Using premium packing materials and trained
      professionals, we minimize damage risks and ensure on-time delivery.

      <br /><br />

      Thousands of customers trust Tirupati Packers & Movers because of our
      transparent pricing, experienced staff, modern vehicles and excellent
      customer support. From a single room to complete villa relocation, we
      provide customized moving solutions that fit every budget.
    </p>

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

{/* WHY CUSTOMERS CHOOSE US */}
<section className="section">
  <div className="container">

    <h2 className="section-title">
      Why Thousands of Customers Choose Tirupati Packers & Movers
    </h2>

    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.9",
        color: "#555",
      }}
    >

      <h3 style={{ marginTop: 20 }}>
  Professional Packing Services
</h3>

      <p>
        We use high-quality packing materials including bubble wrap, carton
        boxes, stretch film, foam sheets and waterproof covers to protect
        fragile items during transportation. Every item is packed carefully by
        trained professionals.
      </p>

      <h3 style={{ marginTop: 25 }}>✔ Safe Transportation</h3>

      <p>
        Our experienced drivers and well-maintained moving vehicles ensure that
        your belongings reach the destination safely and on time. Whether it is
        local shifting within Tirupati or long-distance relocation, we handle
        every move professionally.
      </p>

      <h3 style={{ marginTop: 25 }}>✔ Affordable Pricing</h3>

      <p>
        We believe in transparent pricing without hidden charges. Every customer
        receives a detailed quotation before booking, helping families and
        businesses plan their relocation within budget.
      </p>

      <h3 style={{ marginTop: 25 }}>✔ Experienced Moving Team</h3>

      <p>
        Our trained staff has extensive experience in residential shifting,
        office relocation, furniture moving, loading & unloading and vehicle
        transportation. We treat every customer's belongings with the same care
        as our own.
      </p>

      <h3 style={{ marginTop: 25 }}>✔ Customer Satisfaction</h3>

      <p>
        Customer satisfaction is our highest priority. We focus on punctuality,
        careful handling, professional service and excellent customer support
        from booking until delivery.
      </p>

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
      {/* WHY HIRE PROFESSIONAL MOVERS */}
<section className="section section-alt">
  <div className="container">

    <h2 className="section-title">
      Why Hire Professional Packers and Movers in Tirupati?
    </h2>

    <p
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center",
        lineHeight: "1.9",
        color: "#555",
      }}
    >
      Moving to a new home or office is an exciting experience, but it can also
      be stressful without professional assistance. Packing delicate items,
      lifting heavy furniture, arranging transportation and unloading everything
      safely requires proper planning and experienced manpower.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "30px",
        marginTop: "50px",
      }}
    >

      <div className="service-card">
        <h3>🏠 Safe House Shifting</h3>

        <p>
          We carefully pack every household item including furniture,
          electronics, kitchen items, glassware and appliances using premium
          packing materials to prevent damage during transportation.
        </p>
      </div>

      <div className="service-card">
        <h3>🏢 Office Relocation</h3>

        <p>
          Our office relocation service helps businesses move quickly with
          minimum downtime. We safely transport office furniture, computers,
          files and equipment.
        </p>
      </div>

      <div className="service-card">
        <h3>🚗 Vehicle Transportation</h3>

        <p>
          Need to move your bike or car? Our secure vehicle transport service
          ensures safe delivery across Andhra Pradesh and throughout India.
        </p>
      </div>

      <div className="service-card">
        <h3>📦 Premium Packing Materials</h3>

        <p>
          We use bubble wrap, corrugated boxes, foam sheets, stretch film and
          waterproof covers to keep your belongings completely protected.
        </p>
      </div>

      <div className="service-card">
        <h3>👷 Experienced Team</h3>

        <p>
          Every move is handled by trained professionals with years of
          experience in residential and commercial relocation.
        </p>
      </div>

      <div className="service-card">
        <h3>💰 Affordable Pricing</h3>

        <p>
          We provide transparent quotations with no hidden charges, ensuring
          that you receive excellent value for money.
        </p>
      </div>

    </div>

    <div
      style={{
        marginTop: "40px",
        lineHeight: "1.9",
        color: "#555",
      }}
    >

      <p>
        At Tirupati Packers & Movers, customer satisfaction is our highest
        priority. From the moment you request a quotation until the final item
        is unloaded at your destination, our team remains committed to
        delivering a smooth and hassle-free relocation experience.
      </p>

      <p>
        Whether you are moving locally within Tirupati or relocating to another
        city, we provide dependable relocation services with modern vehicles,
        experienced staff and professional packing techniques. Our goal is to
        make every move safe, affordable and stress-free.
      </p>

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

{/* CUSTOMER TESTIMONIALS */}
<section className="section section-alt">
  <div className="container">

    <h2 className="section-title">
      What Our Customers Say
    </h2>

    <p className="section-subtitle">
      We are proud to have helped thousands of happy customers with safe and stress-free relocations.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "25px",
        marginTop: "40px",
      }}
    >

      <div className="service-card">
        <div style={{ fontSize: "22px", color: "#f59e0b" }}>
          ⭐⭐⭐⭐⭐
        </div>

        <p style={{ marginTop: "15px" }}>
          Excellent packing quality and on-time delivery. The team handled our
          furniture carefully and completed the entire house shifting process
          without any damage. Highly recommended.
        </p>

        <h3 style={{ marginTop: "20px" }}>
          Ravi Kumar
        </h3>

        <small>Tirupati</small>
      </div>

      <div className="service-card">
        <div style={{ fontSize: "22px", color: "#f59e0b" }}>
          ⭐⭐⭐⭐⭐
        </div>

        <p style={{ marginTop: "15px" }}>
          Very professional movers with affordable pricing. Booking through
          WhatsApp was easy, and the staff arrived exactly on time. Great
          service.
        </p>

        <h3 style={{ marginTop: "20px" }}>
          Lakshmi Devi
        </h3>

        <small>Renigunta</small>
      </div>

      <div className="service-card">
        <div style={{ fontSize: "22px", color: "#f59e0b" }}>
          ⭐⭐⭐⭐⭐
        </div>

        <p style={{ marginTop: "15px" }}>
          We shifted our office to a new location, and everything was completed
          quickly with minimal downtime. Excellent customer support throughout
          the relocation.
        </p>

        <h3 style={{ marginTop: "20px" }}>
          Srinivas Rao
        </h3>

        <small>Chandragiri</small>
      </div>

    </div>

  </div>
</section>

{/* FAQ */}
<section className="section">
  <div className="container">

    <h2 className="section-title">
      Frequently Asked Questions
    </h2>

    <p className="section-subtitle">
      Everything you need to know before booking our Packers and Movers services.
    </p>

    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto 0",
        display: "grid",
        gap: "20px",
      }}
    >

      <div className="service-card">
        <h3>How much does house shifting cost in Tirupati?</h3>
        <p>
          House shifting charges depend on the number of household items,
          distance, floor level and additional services required. Contact us
          for a free, no-obligation quotation.
        </p>
      </div>

      <div className="service-card">
        <h3>Do you provide packing materials?</h3>
        <p>
          Yes. We use premium quality carton boxes, bubble wrap, foam sheets,
          stretch film and waterproof packing materials for maximum protection.
        </p>
      </div>

      <div className="service-card">
        <h3>Do you provide office relocation services?</h3>
        <p>
          Yes. We offer office shifting for businesses of every size while
          minimizing downtime and ensuring safe transportation of office
          equipment.
        </p>
      </div>

      <div className="service-card">
        <h3>Can you transport bikes and cars?</h3>
        <p>
          Absolutely. We provide secure bike transportation and car carrier
          services throughout Andhra Pradesh and across India.
        </p>
      </div>

      <div className="service-card">
        <h3>How do I book your moving service?</h3>
        <p>
          Simply click the WhatsApp button or fill out our booking form. Our
          team will contact you immediately with pricing and scheduling details.
        </p>
      </div>

      <div className="service-card">
        <h3>Which locations do you serve?</h3>
        <p>
          We provide relocation services in Tirupati, Renigunta,
          Tiruchanoor, Chandragiri, Srikalahasti, Yerpedu and nearby
          locations.
        </p>
      </div>

    </div>

  </div>
</section>

{/* FAQ SCHEMA */}
<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does house shifting cost in Tirupati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "House shifting charges depend on the number of household items, distance, floor level and services required."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide packing materials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We use premium quality packing materials for safe transportation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide office relocation services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide professional office relocation services."
          }
        },
        {
          "@type": "Question",
          "name": "Can you transport bikes and cars?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide bike and car transportation services across India."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book your moving service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book through WhatsApp or the online booking form."
          }
        },
        {
          "@type": "Question",
          "name": "Which locations do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve Tirupati, Renigunta, Tiruchanoor, Chandragiri, Srikalahasti, Yerpedu and surrounding areas."
          }
        }
      ]
    }),
  }}
/>
<Script
  id="breadcrumb-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tirupatimovers.in",
        },
      ],
    }),
  }}
/>
<section className="section">
  <div className="container">

    <h2 className="section-title">
      Trusted Packers and Movers in Tirupati
    </h2>

    <p
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.9",
        color: "#555",
      }}
    >
      Tirupati Packers & Movers has helped thousands of families and businesses
      relocate safely. Whether you need house shifting, office relocation,
      furniture moving, local shifting or vehicle transportation, our trained
      professionals ensure every move is smooth and hassle-free. We proudly
      serve Tirupati, Renigunta, Tiruchanoor, Chandragiri, Srikalahasti and
      nearby areas with affordable pricing, modern equipment and reliable
      customer support.
    </p>

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
