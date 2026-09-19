import React from 'react';
import './About.css';
import profile_img from '../../assets/profile1.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
  const skills = [
    { name: "React.js", level: "85%" },
    { name: "JavaScript (ES6+)", level: "85%" },
    { name: "HTML5 & CSS3", level: "90%" },
    { name: "Next.js", level: "75%" },
    { name: "Tailwind CSS & Bootstrap", level: "80%" },
    { name: "Redux & State Management", level: "75%" },
  ];

  const highlights = [
    {
      number: "10+",
      title: "Projects Built",
      desc: "Interactive web apps, clones, and responsive UI designs"
    },

    {
      number: "5+",
      title: "Core Technologies",
      desc: "React, Next.js, JavaScript, Tailwind, and front-end tooling"
    },
    {
      number: "100%",
      title: "Dedication",
      desc: "Committed to clean code, responsive layouts & continuous learning"
    }
  ];

  const tags = [
    "React.js", "Next.js", "JavaScript", "Tailwind CSS",
    "Redux Toolkit", "HTML5 & CSS3", "Responsive Design", "REST APIs",
    "Git & GitHub", "Component Architecture"
  ];

  return (
    <section id='about' className='about-section'>
      <div className="about-container">

        {/* Section Header */}
        <div className="about-header">
          <span className="about-badge">GET TO KNOW ME</span>
          <div className="about-title-wrap">
            <h2 className="about-title">About Me</h2>
            <img src={theme_pattern} alt="" className="about-title-pattern" />
          </div>
          <p className="about-subtitle">
            Passionate Frontend Developer dedicated to crafting pixel-perfect, interactive, and responsive web experiences.
          </p>
        </div>

        {/* Main Content Grid: Left (Photo & Tech Stack) + Right (Bio & Skills) */}
        <div className="about-content-grid">

          {/* Left Column: Profile Card & Stack */}
          <div className="about-profile-col">
            <div className="about-card-wrapper">
              <div className="about-image-card">
                <img src={profile_img} alt="Deepak Bareth" className="about-profile-photo" />
                <div className="about-image-gradient-overlay"></div>

                {/* Floating Status Pill */}
                <div className="about-status-pill">
                  <span className="status-dot"></span>
                  <span>Available for Opportunities</span>
                </div>
              </div>

              {/* Quick Info Bar */}
              <div className="about-quick-info">
                <div className="quick-info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <span className="info-label">Location</span>
                    <p className="info-val">Delhi NCR, India</p>
                  </div>
                </div>
                <div className="quick-info-item">
                  <span className="info-icon">💼</span>
                  <div>
                    <span className="info-label">Role</span>
                    <p className="info-val">Frontend Developer</p>
                  </div>
                </div>
                <div className="quick-info-item">
                  <span className="info-icon">⚡</span>
                  <div>
                    <span className="info-label">Focus</span>
                    <p className="info-val">React & Modern UI</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack & Tools Badges in Left Card */}
              <div className="about-tags-section">
                <h4 className="tags-heading">Tech Stack & Tools</h4>
                <div className="about-tags-list">
                  {tags.map((tag, idx) => (
                    <span key={idx} className="about-tag">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Skills */}
          <div className="about-details-col">
            <div className="about-bio-card">
              <h3 className="about-bio-heading">
                Transforming Ideas into <span className="gradient-text">Modern Web Experiences</span>
              </h3>

              <div className="about-bio-text">
                <p>
                  I started my journey in web development by mastering the building blocks of the web and building real-world projects that sharpened my problem-solving ability. My focus is writing <strong>clean, modern, and efficient code</strong> that functions seamlessly across all devices.
                </p>
                <p>
                  Beyond coding, I love exploring cutting-edge web technologies, optimizing user interfaces, and continuously growing as a developer to contribute meaningfully to impactful teams and projects.
                </p>
              </div>

              {/* Skills Progress Section */}
              <div className="about-skills-container">
                <h4 className="skills-heading">Technical Proficiency</h4>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}</span>
                      </div>
                      <div className="skill-progress-bg">
                        <div
                          className="skill-progress-bar"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats / Highlights Section */}
        <div className="about-highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-number-wrap">
                <span className="highlight-number">{item.number}</span>
              </div>
              <h4 className="highlight-title">{item.title}</h4>
              <p className="highlight-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;