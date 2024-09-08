import React from 'react';
import './Team.css'; // Import the CSS file for styling

// Placeholder image URL
const placeholderImage = 'https://via.placeholder.com/120'; // Adjusted size for round images

const Team = () => {
    return (
        <section className="team" id="team">
            <h2>Our Team</h2>

            <div className="team-category">
                <h3>Faculty Mentors</h3>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={placeholderImage} alt="Mentor 1" />
                        <h4>Dr. K. Meera Saheb</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Mentor 2" />
                        <h4>Dr. D. Lingaraju</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Mentor 3" />
                        <h4>Dr. T. Lakshmana Kishore</h4>
                    </div>
                </div>
            </div>

            <div className="team-category">
                <h3>Faculty Advisors</h3>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={placeholderImage} alt="Advisor 1" />
                        <h4>Dr. B. Balakrishna</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Advisor 2" />
                        <h4>Dr. A. Swarna Kumari</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Advisor 3" />
                        <h4>Sri. M. Kumara Swamy</h4>
                    </div>
                </div>
            </div>

            <div className="team-category">
                <h3>Faculty Coordinators</h3>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={placeholderImage} alt="Coordinator 1" />
                        <h4>Mr. M. Bala Ganapathi</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Coordinator 2" />
                        <h4>Sri. V. Badde Naik</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Coordinator 3" />
                        <h4>Smt. K. Vijaya Lakshmi</h4>
                    </div>
                </div>
            </div>

            <div className="team-category">
                <h3>Student Committee</h3>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={placeholderImage} alt="President" />
                        <h4>President:D. Sriram</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Vice President" />
                        <h4>Vice President: T. Lohith</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Secretary" />
                        <h4>Secretary: M. Govardhan</h4>
                    </div>
                </div>
            </div>

            <div className="team-category">
                <h3>Student Coordinators</h3>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={placeholderImage} alt="Coordinator 1" />
                        <h4>G.Bhanv</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Coordinator 2" />
                        <h4>P.L.Trilokya</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Coordinator 3" />
                        <h4>S.Karthik</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Coordinator 4" />
                        <h4>K.Praneeth</h4>
                    </div>
                    <div className="team-member">
                        <img src={placeholderImage} alt="Coordinator 5" />
                        <h4>B.Sri Vani</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;