import React from 'react';
import '../styles/Projects.css';
import IMG1 from '../assets/img1.jpg';
import IMG2 from '../assets/img2.jpg';
import IMG3 from '../assets/img3.jpg';
import IMG4 from '../assets/img4.jpg';
import IMG5 from '../assets/img5.jpg';
import IMG6 from '../assets/img6.jpg';



const Projects = () => {
  return (
    <section id="projects">
    <div className='galleryContainer'>
    <div className='textContainer'>
    <h2>Work</h2>
    </div>
    
      <div className="gallery">
        <img src={IMG1} alt="Gallery  1"/>
        <img src={IMG2} alt="Gallery  2"/>
        <img src={IMG3} alt="Gallery  3"/>
        <img src={IMG4} alt="Gallery  4"/>
        <img src={IMG5} alt="Gallery  5"/>
        <img src={IMG6} alt="Gallery  6"/>
        <img src={IMG1} alt="Gallery  1"/>
        <img src={IMG2} alt="Gallery 2"/>
        <img src={IMG3} alt="Gallery  3"/>
    </div>
      
</div>
    </section>
  );
};

export default Projects;
