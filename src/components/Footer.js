import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Club Apex. All rights reserved.</p>
                <div className="social-links">
                    <a href="#" className="social-link">Facebook</a>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;