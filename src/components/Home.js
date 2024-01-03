import React from 'react';
import IMG1 from '../assets/img1.jpg'
import IMG2 from '../assets/img2.jpg'
import IMG3 from '../assets/img3.jpg'
import '../styles/Home.css'

const Home = () => {
  return (
    <section id="home">
      <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade " data-bs-ride="carousel" data-bs-interval="5000">
  <div className="carousel-inner slides">
    <div className="carousel-item active">
      <img src={IMG1} className="d-block w-100" alt="1 of slideshow"/>
    </div>
    <div className="carousel-item">
      <img src={IMG2} className="d-block w-100" alt="2 of slideshow"/>
    </div>
    <div className="carousel-item">
      <img src={IMG3} className="d-block w-100" alt="3 of slideshow"/>
    </div>
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
