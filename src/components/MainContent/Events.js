import React from 'react';
import './Events.css'; // Import the CSS file for styling
import event1 from '../../assets/event1.jpg'; // Replace with actual event images
import event2 from '../../assets/event2.jpg';
import event3 from '../../assets/event3.jpg';
import event4 from '../../assets/event4.jpg';

const Events = () => {
    return (
        <section className="events" id="events">
            <h2>Events and Activities</h2>
            <div className="events-grid">
                <div className="event-item">
                    <img src={event1} alt="Event 1" />
                    <h3>Go-Kart Racing Day</h3>
                    <p>Date: MM/DD/YYYY</p>
                    <p>A fun day of racing go-karts with club members and friends!</p>
                </div>
                <div className="event-item">
                    <img src={event2} alt="Event 2" />
                    <h3>Robo Wars</h3>
                    <p>Date: MM/DD/YYYY</p>
                    <p>Join us for a workshop on the latest in electric vehicle technology.</p>
                </div>
                <div className="event-item">
                    <img src={event3} alt="Event 3" />
                    <h3>Annual Auto Show</h3>
                    <p>Date: MM/DD/YYYY</p>
                    <p>Showcasing our projects and innovations at the annual auto show.</p>
                </div>
                <div className="event-item">
                    <img src={event4} alt="Event 4" />
                    <h3>Community Outreach Program</h3>
                    <p>Date: MM/DD/YYYY</p>
                    <p>Engaging with the community through automotive education.</p>
                </div>
            </div>
        </section>
    );
};

export default Events;