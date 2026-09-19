import React from 'react'
import './About.css' 
import profile_img from '../../assets/profile1.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I started my journey in web development by learning the fundamentals of web design, and over time, I’ve built multiple projects that sharpened my problem-solving and coding skills. My focus is always on writing clean, efficient code and building applications that work seamlessly across devices.</p>
                   <p>Beyond coding, I love exploring new technologies and continuously improving my skills to stay updated with industry trends. My goal is to grow as a developer and contribute to impactful projects that make a difference.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"55%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"65%"}} /></div>
                    <div className="about-skill"><p>Bootstrap & Tailwind CSS</p><hr style={{width:"40%"}} /></div>
                    <div className="about-skill"><p>Redux</p><hr style={{width:"45%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>FRESHER</h1>
                <p>0 YEAR OF EXPERIENCE</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
          
        </div>
    </div>
  )
}

export default About