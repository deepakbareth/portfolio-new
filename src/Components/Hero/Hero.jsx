import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile1.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from '../../assets/Resume.pdf';
import { ArrowRight, Download, Code2, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id='home' className='hero-section'>
      <div className="hero-container">
        
        {/* Left Content Column */}
        <div className="hero-content-left">
          <div className="hero-status-badge">
            <span className="hero-pulse-dot"></span>
            <span>Available for New Projects</span>
          </div>

          <h1 className="hero-headline">
            Hi, I'm <span className="hero-gradient-name">Deepak Bareth</span>
            <br />
            <span className="hero-title-sub">Frontend Developer</span>
          </h1>

          <p className="hero-description">
            Passionate about transforming creative concepts into responsive, high-performance web applications using <strong>React.js</strong>, <strong>JavaScript</strong>, and modern front-end technologies.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <AnchorLink className="hero-anchor" href="#contact">
              <button className="hero-btn-primary">
                <span>Connect With Me</span>
                <ArrowRight size={18} />
              </button>
            </AnchorLink>

            <a href={resume} download className="hero-btn-secondary">
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links & Quick Stats */}
          <div className="hero-social-row">
            <span className="hero-social-label">Follow Me:</span>
            
            <a 
              href="https://github.com/deepakbareth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-pill"
              aria-label="GitHub Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/deepak-bareth-114982355/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-pill"
              aria-label="LinkedIn Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="hero-visual-right">
          <div className="hero-avatar-frame">
            <div className="hero-glow-backdrop"></div>
            
            <div className="hero-image-box">
              <img src={profile_img} alt="Deepak Bareth" className="hero-profile-img" />
              <div className="hero-image-overlay"></div>
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-top-right">
              <span className="badge-icon">
                <Code2 size={20} color="#0072ff" />
              </span>
              <div className="badge-text">
                <strong>React.js</strong>
                <small>Frontend Core</small>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <span className="badge-icon">
                <Rocket size={20} color="#00c6ff" />
              </span>
              <div className="badge-text">
                <strong>10+ Projects</strong>
                <small>Built & Deployed</small>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;