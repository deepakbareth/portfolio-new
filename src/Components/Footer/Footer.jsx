import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpeg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Mail, ArrowUp, Check } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className="footer-container">
        
        {/* Main 4-Column Content */}
        <div className="footer-content-grid">
          
          {/* Col 1: Brand & Bio */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <img src={logo} alt="Deepak Bareth Logo" className="footer-logo" />
              <div>
                <h3 className="footer-brand-name">Deepak Bareth</h3>
                <span className="footer-brand-role">Frontend Developer</span>
              </div>
            </div>
            
            <p className="footer-bio">
              Dedicated to building responsive, pixel-perfect, and modern web applications with clean, efficient code and delightful user interfaces.
            </p>

            <div className="footer-social-links">
              <a 
                href="https://github.com/deepakbareth" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              <a 
                href="https://www.linkedin.com/in/deepak-bareth-114982355/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a 
                href="mailto:deepakbareth7735@gmail.com" 
                className="footer-social-icon"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><AnchorLink href="#home">Home</AnchorLink></li>
              <li><AnchorLink href="#about">About Me</AnchorLink></li>
              <li><AnchorLink href="#services">Services</AnchorLink></li>
              <li><AnchorLink href="#work">Portfolio Projects</AnchorLink></li>
              <li><AnchorLink href="#contact">Contact Me</AnchorLink></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">My Expertise</h4>
            <ul className="footer-nav-list">
              <li><AnchorLink href="#services">Website Development</AnchorLink></li>
              <li><AnchorLink href="#services">Single Page Apps</AnchorLink></li>
              <li><AnchorLink href="#services">UI / UX Implementation</AnchorLink></li>
              <li><AnchorLink href="#services">React.js & Next.js</AnchorLink></li>
              <li><AnchorLink href="#services">Responsive Web Design</AnchorLink></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="footer-col footer-col-newsletter">
            <h4 className="footer-heading">Stay Connected</h4>
            <p className="footer-newsletter-desc">
              Subscribe to receive updates on my latest web projects and work.
            </p>
            
            <form onSubmit={handleSubscribe} className="footer-subscribe-box">
              <div className="footer-input-wrap">
                <Mail size={16} className="footer-input-icon" />
                <input 
                  type="email" 
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="footer-subscribe-btn">
                Subscribe
              </button>
            </form>

            {subscribed && (
              <p className="footer-subscribe-success">
                <Check size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                Thank you for subscribing!
              </p>
            )}
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            © {currentYear} <strong>Deepak Bareth</strong>. All rights reserved.
          </p>

          <p className="footer-credit">
            Built with ❤️ using <span className="footer-tech-pill">React</span> & <span className="footer-tech-pill">CSS</span>
          </p>

          <AnchorLink href="#home" className="footer-back-to-top">
            <span>Back to top</span>
            <ArrowUp size={15} />
          </AnchorLink>
        </div>

      </div>
    </footer>
  );
};

export default Footer;