import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Header.css'; // Import the CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Club Apex</h1>
                <p>Automobile Club</p>
                <Link to="about" smooth={true} duration={100} className="cta-button">
                    Know More
                </Link>
            </div>
        </header>
    );
};

export default Header;