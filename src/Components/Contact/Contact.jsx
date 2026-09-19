import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { Mail, Phone, MapPin, User, MessageSquare, Send, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

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
                    <Mail size={20} />
                  </div>
                  <div className="contact-method-text">
                    <span className="method-label">Email Me</span>
                    <strong className="method-val">deepakbareth7735@gmail.com</strong>
                  </div>
                  <ArrowRight size={18} className="method-arrow" />
                </a>

                <a href="tel:+918000678983" className="contact-method-card">
                  <div className="contact-method-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-method-text">
                    <span className="method-label">Call / WhatsApp</span>
                    <strong className="method-val">+91 80006 78983</strong>
                  </div>
                  <ArrowRight size={18} className="method-arrow" />
                </a>

                <div className="contact-method-card">
                  <div className="contact-method-icon">
                    <MapPin size={20} />
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
                    <User size={18} className="form-field-icon" />
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
                    <Mail size={18} className="form-field-icon" />
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
                    <MessageSquare size={18} className="form-field-icon textarea-icon" />
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
                      <Send size={18} />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-alert success">
                    <CheckCircle2 size={18} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                    Message sent successfully! I will get back to you shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-alert error">
                    <AlertCircle size={18} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                    Something went wrong. Please try again or email me directly.
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