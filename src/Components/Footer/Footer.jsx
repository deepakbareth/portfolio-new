import './Footer.css'

import logo from '../../assets/logo.jpeg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="" />
        </div>
        <div className="foote-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email"  placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">Subscrib</div>
        </div>
       </div>
       <hr />
       <div className="footer-bottom">
        <p className="footer-bootom-left">@ 2025 Deepak bareth. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
       </div>
    </div>
  )
}

export default Footer