import React from 'react';
import '../styles/Projects.css';
import { GALLERY_IMAGES } from '../utils/images';
import LazyImage from './LazyImage';

const Projects = () => {
  return (
    <section id="projects">
      <div className='gallery-container'>
        <div className='text-container'>
          <h2>Gallery</h2>
        </div>
        
        <div className="gallery">
          {GALLERY_IMAGES.map((image, index) => (
            <LazyImage
              key={image.id}
              src={image.src} 
              alt={image.alt}
              title={image.title}
              loading={index < 2 ? "eager" : "lazy"} // Only load first 2 images eagerly
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
