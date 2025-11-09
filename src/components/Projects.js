import React from 'react';
import '../styles/Projects.css';
import { GALLERY_IMAGES } from '../utils/images';



const Projects = () => {
  return (
    <section id="projects">
    <div className='gallery-container'>
    <div className='text-container'>
    <h2>Work</h2>
    </div>
    
      <div className="gallery">
        {GALLERY_IMAGES.map((image) => (
          <img 
            key={image.id}
            src={image.src} 
            alt={image.alt}
            title={image.title}
          />
        ))}
    </div>
      
</div>
    </section>
  );
};

export default Projects;
