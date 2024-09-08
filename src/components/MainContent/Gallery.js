import React from 'react';
import './Gallery.css'; // Import the CSS file for styling

const Gallery = () => {
    const images = [
        { id: 1, src: 'https://via.placeholder.com/300', alt: 'Project 1' },
        { id: 2, src: 'https://via.placeholder.com/300', alt: 'Project 2' },
        { id: 3, src: 'https://via.placeholder.com/300', alt: 'Project 3' },
        { id: 4, src: 'https://via.placeholder.com/300', alt: 'Project 4' },
        { id: 5, src: 'https://via.placeholder.com/300', alt: 'Project 5' },
        { id: 6, src: 'https://via.placeholder.com/300', alt: 'Project 6' },
    ];

    return (
        <section className="gallery" id="portfolio">
            <h2>Our Gallery</h2>
            <div className="gallery-grid">
                {images.map(image => (
                    <div key={image.id} className="gallery-item">
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;