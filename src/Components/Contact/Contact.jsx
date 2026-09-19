import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Contact = () => {
  const [inputValues, setInputValue] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "ab765b88-de91-4933-8ec7-9c1352e545bf");

    try {
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setInputValue({ name: "", email: "", message: "" });
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  return (
    <section id='contact' className='contact-section'>
      <div className="contact-container">
        
        {/* Section Header */}
        <div className="contact-header">
          <span className="contact-badge">GET IN TOUCH</span>
          <div className="contact-title-wrap">
            <h2 className="contact-title">Let's Connect</h2>
            <img src={theme_pattern} alt="" className="contact-title-pattern" />
          </div>
          <p className="contact-subtitle">
            Have a project in mind, a job opportunity, or just want to chat tech? Feel free to reach out anytime.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Info & Details */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <h3 className="contact-info-heading">
                Let's build something <span className="gradient-text">extraordinary together</span>.
              </h3>
              
              <p className="contact-info-desc">
                I'm actively seeking front-end developer roles and exciting freelance projects. Whether you have an open position, need a web app built, or want to collaborate, I'd love to hear from you.
              </p>

              {/* Status Pill */}
              <div className="contact-status-pill">
                <span className="status-pulse-dot"></span>
                <span>Typically replies within a few hours</span>
              </div>

              {/* Direct Info Cards */}
              <div className="contact-cards-list">
                
                <a href="mailto:deepakbareth7735@gmail.com" className="contact-method-card">
                  <div className="contact-method-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-method-text">
                    <span className="method-label">Email Me</span>
                    <strong className="method-val">deepakbareth7735@gmail.com</strong>
                  </div>
                  <span className="method-arrow">→</span>
                </a>

                <a href="tel:+918000678983" className="contact-method-card">
                  <div className="contact-method-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-method-text">
                    <span className="method-label">Call / WhatsApp</span>
                    <strong className="method-val">+91 80006 78983</strong>
                  </div>
                  <span className="method-arrow">→</span>
                </a>

                <div className="contact-method-card">
                  <div className="contact-method-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-method-text">
                    <span className="method-label">Location</span>
                    <strong className="method-val">Delhi NCR, India (Available Worldwide)</strong>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-desc">Fill out the form below and I'll respond as soon as possible.</p>

              <form onSubmit={onSubmit} className='contact-form'>
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <div className="form-input-wrap">
                    <svg className="form-field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input 
                      id="name"
                      name="name" 
                      value={inputValues.name} 
                      onChange={(e) => setInputValue({...inputValues, [e.target.name]: e.target.value})} 
                      type="text" 
                      placeholder='e.g. John Doe'
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <div className="form-input-wrap">
                    <svg className="form-field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input 
                      id="email"
                      name="email" 
                      value={inputValues.email} 
                      onChange={(e) => setInputValue({...inputValues, [e.target.name]: e.target.value})} 
                      type="email" 
                      placeholder='e.g. john@example.com'
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <div className="form-input-wrap textarea-wrap">
                    <svg className="form-field-icon textarea-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <textarea 
                      id="message"
                      name="message" 
                      value={inputValues.message} 
                      onChange={(e) => setInputValue({...inputValues, [e.target.name]: e.target.value})} 
                      rows="5" 
                      placeholder='Tell me about your project, timeline, or opportunity...'
                      required
                    ></textarea>
                  </div>
                </div>

                <button 
                  type='submit' 
                  className={`contact-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-alert success">
                    ✓ Message sent successfully! I will get back to you shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-alert error">
                    ✕ Something went wrong. Please try again or email me directly.
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;