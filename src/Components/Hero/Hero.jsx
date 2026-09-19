import './Hero.css'
import profile_img from '../../assets/profile1.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from '../../assets/Resume.pdf'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Deepak Bareth</span>, frontend developer based in INDIA</h1>
        <p>Front-End Developer passionate about building responsive and user-friendly websites with React & JavaScript.</p>
        <div className="hero-action">
          <AnchorLink className="anchore-link" href="#contact"><div className="hero-connect">Connect With Me</div></AnchorLink>
            
            <div className="hero-resume"><a href={resume} download>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero