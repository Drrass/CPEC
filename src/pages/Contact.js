import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-intro">Contact us today for your engineering needs.</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-label">Email</div>
                <div className="info-value">info@cpec.com</div>
              </div>
              <div className="info-item">
                <div className="info-label">Phone</div>
                <div className="info-value">+1 (123) 456-7890</div>
              </div>
              <div className="info-item">
                <div className="info-label">Location</div>
                <div className="info-value">1234 Industry Road, City, State, ZIP</div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
