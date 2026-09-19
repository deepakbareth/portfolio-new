import React from 'react';
import './Services.css';
import theme_pattern from '../assets/theme_pattern.svg';

const servicesData = [
  {
    id: "01",
    title: "Website Development",
    desc: "Build responsive, high-speed, and interactive websites tailored to your specific requirements using modern front-end technologies.",
    features: [
      "100% Responsive & Mobile-First",
      "Cross-Browser Compatibility",
      "Fast Performance & SEO Friendly"
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: "02",
    title: "Single Page Applications",
    desc: "Develop dynamic, fluid, and scalable single-page applications (SPAs) with React.js, Redux, and modern component architecture.",
    features: [
      "Modular Component Architecture",
      "Dynamic Routing & State Management",
      "RESTful API Integration"
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    id: "03",
    title: "UI / UX Implementation",
    desc: "Transform Figma, Adobe XD, or custom design prototypes into pixel-perfect, accessible, and fluid web interfaces using modern CSS & Tailwind.",
    features: [
      "Pixel-Perfect Design Conversion",
      "Tailwind CSS & Modern Styling",
      "Smooth Micro-Animations & Hover Effects"
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section id='services' className='services-section'>
      <div className="services-container">
        
        {/* Header */}
        <div className="services-header">
          <span className="services-badge">WHAT I OFFER</span>
          <div className="services-title-wrap">
            <h2 className="services-title">My Services</h2>
            <img src={theme_pattern} alt="" className="services-title-pattern" />
          </div>
          <p className="services-subtitle">
            High-performance frontend development solutions crafted for speed, responsiveness, and intuitive user experiences.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div key={idx} className='service-card'>
              <div className="service-card-top">
                <div className="service-icon-wrap">
                  {service.icon}
                </div>
                <span className="service-number">{service.id}</span>
              </div>
              
              <h3 className="service-name">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              <ul className="service-features">
                {service.features.map((item, fIdx) => (
                  <li key={fIdx} className="service-feature-item">
                    <span className="feature-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-footer">
                <a href="#contact" className="service-cta">
                  <span>Discuss Project</span>
                  <svg className="service-cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
