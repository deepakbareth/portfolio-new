import "./Navbar.css"
import logo from '../../assets/logo.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg"
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" />
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <AnchorLink className="anchor-link" href="#home" onClick={() => setMenuOpen(false)}><li>Home</li></AnchorLink>
                <AnchorLink className="anchor-link" href="#about" onClick={() => setMenuOpen(false)}><li>About</li></AnchorLink>
                <AnchorLink className="anchor-link" href="#services" onClick={() => setMenuOpen(false)}><li>Services</li></AnchorLink>
                <AnchorLink className="anchor-link" href="#work" onClick={() => setMenuOpen(false)}><li>Portfolio</li></AnchorLink>
                <AnchorLink className="anchor-link" href="#contact" onClick={() => setMenuOpen(false)}><li>Contact</li></AnchorLink>
            </ul>
            <AnchorLink className="anchor-link" href="#contact"><div className="nav-connect">Connect With Me</div></AnchorLink>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menu_open} alt="Menu" />
            </button>
        </div>
    )
}

export default Navbar