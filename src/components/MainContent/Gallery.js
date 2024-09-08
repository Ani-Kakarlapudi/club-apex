import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css'; // Import your custom CSS

const Gallery = () => {
    const images = [
        { id: 1, src: 'https://via.placeholder.com/150', alt: 'Project 1' }, // Changed to 150x150
        { id: 2, src: 'https://via.placeholder.com/150', alt: 'Project 2' },
        { id: 3, src: 'https://via.placeholder.com/150', alt: 'Project 3' },
        { id: 4, src: 'https://via.placeholder.com/150', alt: 'Project 4' },
        { id: 5, src: 'https://via.placeholder.com/150', alt: 'Project 5' },
        { id: 6, src: 'https://via.placeholder.com/150', alt: 'Project 6' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section className="gallery" id="portfolio">
            <h2>Our Gallery</h2>
            <Slider {...settings}>
                {images.map(image => (
                    <div key={image.id} className="gallery-item">
                        <img src={image.src} alt={image.alt} className="slider-image" />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Gallery;