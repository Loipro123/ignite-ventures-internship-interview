import React from 'react';
import './home-content.styles.scss';

const HomeContent = () => {
    return (
        <div className="home--content">
            <div className="home--content__item">
                <span>Get Free Roof Inspection</span>
            </div>
            <div className="home--content__item">
               <iframe title="roof company" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.029321113917!2d-96.82235308437077!3d33.10831298087314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c8e66512685%3A0x4cfe926b3a2f55e!2s7460%20Warren%20Pkwy%20Suite%20100%2C%20Frisco%2C%20TX%2075034!5e0!3m2!1sen!2sus!4v1633097560951!5m2!1sen!2sus" className="home--content__item--map"  style={{ borderRadius:'5px'}}  loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default HomeContent;