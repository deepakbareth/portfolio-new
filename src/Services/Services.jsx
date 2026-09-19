import React from 'react';
import './Services.css';
import theme_pattern from '../assets/theme_pattern.svg';
import { Code2, Zap, Palette, Check, ArrowRight } from 'lucide-react';

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
    icon: <Code2 size={26} />
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
    icon: <Zap size={26} />
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
    icon: <Palette size={26} />
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
                    <span className="feature-check">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-footer">
                <a href="#contact" className="service-cta">
                  <span>Discuss Project</span>
                  <ArrowRight size={18} className="service-cta-arrow" />
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
