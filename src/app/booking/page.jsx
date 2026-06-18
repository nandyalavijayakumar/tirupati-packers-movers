'use client';
import { useState } from 'react';
import Link from 'next/link';

const WA_NUMBER = '917993522059';

export default function BookingPage() {
  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    pickup: '',
    drop: '',
    houseType: '',
    movingDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { fullName, mobile, pickup, drop, houseType, movingDate, message } = form;
    if (!fullName || !mobile || !pickup || !drop) {
      alert('Please fill in all required fields (Name, Mobile, Pickup & Drop location).');
      return;
    }
    const text = `Hi, I want to book a move with Tirupati Packers & Movers.

*Name:* ${fullName}
*Mobile:* ${mobile}
*Pickup Location:* ${pickup}
*Drop Location:* ${drop}
*House Type / Items:* ${houseType || 'Not specified'}
*Moving Date:* ${movingDate || 'Not specified'}
*Message:* ${message || 'No additional message'}`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <span>Book Your Move</span>
          </nav>
          <h1>Book Your Move</h1>
          <p style={{ color: '#666', marginTop: 6 }}>Fill the details below and send us on WhatsApp</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="booking-layout">
            <div className="booking-form-wrap">
              <div className="booking-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      value={form.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Pickup Location *</label>
                    <input
                      type="text"
                      name="pickup"
                      placeholder="Enter pickup location"
                      value={form.pickup}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Drop Location *</label>
                    <input
                      type="text"
                      name="drop"
                      placeholder="Enter drop location"
                      value={form.drop}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>House Type / Items</label>
                    <select name="houseType" value={form.houseType} onChange={handleChange}>
                      <option value="">Select House Type</option>
                      <option value="1BHK">1BHK</option>
                      <option value="2BHK">2BHK</option>
                      <option value="3BHK">3BHK</option>
                      <option value="Villa">Villa</option>
                      <option value="Office">Office</option>
                      <option value="Vehicle">Vehicle Only</option>
                      <option value="Other">Other Items</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Moving Date</label>
                    <input
                      type="date"
                      name="movingDate"
                      value={form.movingDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                  📱 Send on WhatsApp
                </button>
              </div>
            </div>

            <div className="booking-info">
              <h3>Why Book With Us?</h3>
              <ul className="why-list">
                <li><span>✅</span> Instant WhatsApp confirmation</li>
                <li><span>✅</span> Free site visit & quotation</li>
                <li><span>✅</span> No hidden charges</li>
                <li><span>✅</span> Trained & verified staff</li>
                <li><span>✅</span> 100% safe & secure shifting</li>
                <li><span>✅</span> On-time delivery guaranteed</li>
              </ul>

              <div className="contact-quick">
                <h4>Quick Contact</h4>
                <a href="tel:+917993522059" className="contact-row">
                  <span>📞</span> +91 79935 22059
                </a>
                <a href="https://wa.me/917993522059" target="_blank" rel="noopener noreferrer" className="contact-row">
                  <span>💬</span> WhatsApp Us
                </a>
                <a href="mailto:nviju25@gmail.com" className="contact-row">
                  <span>✉️</span> nviju25@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
