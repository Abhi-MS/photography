import React from 'react';
import { GALLERY_IMAGES } from '../utils/images';
import '../styles/Home.css'

const Home = () => {
  return (
    <section id="home">
      <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade " data-bs-ride="carousel" data-bs-interval="5000">
  <div className="carousel-inner slides">
    {GALLERY_IMAGES.map((image, index) => (
      <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
        <img 
          src={image.src} 
          className="d-block img-size" 
          alt={image.alt}
          loading={index === 0 ? "eager" : "lazy"}
        />
      </div>
    ))}
  </div>
  <button className="carousel-control-prev hidebuttons" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next hidebuttons" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </section>
  );
};

export default Home;
