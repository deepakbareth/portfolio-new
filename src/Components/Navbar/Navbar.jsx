import "./Navbar.css"
import logo from '../../assets/logo.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

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
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
        </nav>
    )
}

export default Navbar