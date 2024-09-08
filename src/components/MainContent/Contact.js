import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2>Contact</h2>
                <div className="contact-info">
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h3>Email</h3>
                            <p>apexclub.me@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <div>
                            <h3>Phone</h3>
                            <p>9071244959</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;