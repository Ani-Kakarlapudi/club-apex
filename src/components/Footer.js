import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import gmailIcon from '../assets/gmail-icon.png'; // Ensure the path is correct
import phoneIcon from '../assets/phone-icon.png'; // Ensure the path is correct
import twitterIcon from '../assets/twitter-icon.png'; // Ensure the path is correct
import linkedinIcon from '../assets/linkedin-icon.png'; // Ensure the path is correct

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Club Apex. All rights reserved.</p>
                <div className="social-links">
                    <a href="mailto:example@gmail.com" className="social-link">
                        <img src={gmailIcon} alt="Gmail" />
                    </a>
                    <a href="tel:+1234567890" className="social-link">
                        <img src={phoneIcon} alt="Phone" />
                    </a>
                    <a href="#" className="social-link">
                        <img src={twitterIcon} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/your-profile" className="social-link">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;