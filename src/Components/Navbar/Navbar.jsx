import "./Navbar.css"
import logo from '../../assets/logo.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <AnchorLink href="#home">
                <img src={logo} alt="Logo" className="nav-logo" />
            </AnchorLink>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <AnchorLink className="anchor-link" href="#home" onClick={() => setMenuOpen(false)}><li>Home</li></AnchorLink>
                <AnchorLink className="anchor-link" href="#about" onClick={() => setMenuOpen(false)}><li>About</li></AnchorLink>
                <AnchorLink className="anchor-link" href="#services" onClick={() => setMenuOpen(false)}><li>Services</li></AnchorLink>
                <AnchorLink className="anchor-link" href="#work" onClick={() => setMenuOpen(false)}><li>Portfolio</li></AnchorLink>
                <AnchorLink className="anchor-link" href="#contact" onClick={() => setMenuOpen(false)}><li>Contact</li></AnchorLink>
            </ul>
            <AnchorLink className="anchor-link nav-connect-link" href="#contact">
                <div className="nav-connect">Connect With Me</div>
            </AnchorLink>
            <button 
                className={`menu-btn ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
                {menuOpen ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                )}
            </button>
        </nav>
    )
}

export default Navbar