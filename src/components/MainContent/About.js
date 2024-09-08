import React, { useEffect, useRef } from 'react';
import './About.css'; // Import the CSS file for styling
import goKartImage from '../../assets/go-kart.jpg'; // Replace with your go-kart image

const About = () => {
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.5 } // Trigger animation when 50% of the section is visible
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }

            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <section className="about" id="about">
            <div className="about-image" ref={imageRef}>
                <img src={goKartImage} alt="Go-Kart" />
            </div>
            <div className="about-content" ref={contentRef}>
                <h2>Our Goal: Foster a love for automobiles among students</h2>
                <p>
                    As the Automobile Club of University college of Engineering Kakinada, our mission is to foster a love for automobiles among students, encouraging them to pursue careers in automotive engineering. 

Collaborate with industry leaders to provide practical experience and promote product development.
                </p>
            </div>
        </section>
    );
};

export default About;