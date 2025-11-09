import React, { useEffect } from 'react';
import '../styles/Projects.css';
import { GALLERY_IMAGES } from '../utils/images';

const Projects = () => {
  useEffect(() => {
    // Preload gallery images after component mounts (slight delay to not block initial render)
    const preloadImages = () => {
      GALLERY_IMAGES.forEach((image) => {
        const img = new Image();
        img.src = image.src;
      });
    };

    // Delay preloading by 500ms to let the page finish initial render
    const timer = setTimeout(preloadImages, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects">
    <div className='gallery-container'>
    <div className='text-container'>
    <h2>Gallery</h2>
    </div>
    
      <div className="gallery">
        {GALLERY_IMAGES.map((image, index) => (
          <img 
            key={image.id}
            src={image.src} 
            alt={image.alt}
            title={image.title}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
    </div>
      
</div>
    </section>
  );
};

export default Projects;
