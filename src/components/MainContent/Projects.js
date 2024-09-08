import React from 'react';
import './Projects.css'; // Import the CSS file for styling
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2>Our Projects</h2>
            <div className="project-grid">
                <div className="project-item">
                    <img src={project1} alt="Project 1" />
                    <div className="project-info">
                        <h3>Fabricating a Go-kart</h3>
                        <p>Design, simulate, and fabricate a Formula-type car for competitions like SUPRA SAE.</p>
                        <button className="project-button">Learn More</button>
                    </div>
                </div>
                <div className="project-item">
                    <img src={project2} alt="Project 2" />
                    <div className="project-info">
                        <h3>Electric Go-kart</h3>
                        <p>Design and fabricate a single-passenger electric go-kart for the Eco-Kart competition. </p>
                        <button className="project-button">Learn More</button>
                    </div>
                </div>
                <div className="project-item">
                    <img src={project3} alt="Project 3" />
                    <div className="project-info">
                        <h3>Hybrid Vehicle</h3>
                        <p>Develop projects related to hybrid suspension systems, electrically operated superchargers, and electric vehicle charging systems.</p>
                        <button className="project-button">Learn More</button>
                    </div>
                </div>
                <div className="project-item">
                    <img src={project4} alt="Project 4" />
                    <div className="project-info">
                        <h3>Solar Vehicle</h3>
                        <p>Design and build chassis and body for solar cars, including the battery setup and solar panels.</p>
                        <button className="project-button">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;