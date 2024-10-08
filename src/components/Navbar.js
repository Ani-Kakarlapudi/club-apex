import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css'; // Import your custom CSS

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <div className="navbar-left">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Apex Club Logo" className="navbar-logo" /> {/* Left Logo */}
                    <a className="navbar-brand">Club Apex</a>
                </div>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu} 
                    aria-controls="navbarNav" 
                    aria-expanded={isOpen} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="home" smooth={true} duration={100} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" smooth={true} duration={100} className="nav-link">Our Vision</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projects" smooth={true} duration={100} className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="portfolio" smooth={true} duration={100} className="nav-link">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="events" smooth={true} duration={100} className="nav-link">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="team" smooth={true} duration={100} className="nav-link">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" smooth={true} duration={100} className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <img src={`${process.env.PUBLIC_URL}/second-logo.png`} alt="Second Logo" className="navbar-second-logo" /> {/* Right Logo */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;