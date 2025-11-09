// Centralized image management
import IMG1 from '../assets/img1.jpg';
import IMG2 from '../assets/img2.jpg';
import IMG3 from '../assets/img3.jpg';
import IMG4 from '../assets/img4.jpg';
import IMG5 from '../assets/img5.jpg';
import IMG6 from '../assets/img6.jpg';
import IMG7 from '../assets/img7.jpg';
import IMG8 from '../assets/img8.jpg';
import IMG9 from '../assets/img9.jpg';

// Gallery images with metadata
export const GALLERY_IMAGES = [
  {
    id: 1,
    src: IMG1,
    alt: 'Waterfall in a lush forest setting',
    title: 'Waterfall',
    category: 'nature'
  },
  {
    id: 2,
    src: IMG2,
    alt: 'Canada Goose portrait in natural habitat',
    title: 'Canada Goose',
    category: 'nature'
  },
  {
    id: 3,
    src: IMG3,
    alt: 'Chipmunk',
    title: 'Chipmunk',
    category: 'nature'
  },
  {
    id: 4,
    src: IMG4,
    alt: 'Mountain landscape with artistic touch',
    title: 'Mountain',
    category: 'nature'
  },
  {
    id: 5,
    src: IMG5,
    alt: 'Dew drops on a leaf',
    title: 'Dew Drops',
    category: 'nature'
  },
  {
    id: 6,
    src: IMG6,
    alt: 'Puppy potrait',
    title: 'Puppy Portrait',
    category: 'animals'
  },
  {
    id: 7,
    src: IMG7,
    alt: 'Fall leaves in autumn',
    title: 'Fall Leaves',
    category: 'nature'
  },
  {
    id: 8,
    src: IMG8,
    alt: 'Peacock displaying its feathers',
    title: 'Peacock',
    category: 'nature'
  },
  {
    id: 9,
    src: IMG9,
    alt: 'Sillhouette of grass against a sunset',
    title: 'Sunset Grass',
    category: 'nature'
  }
];

// Helper function to get specific images by category
export const getImagesByCategory = (category) => {
  return GALLERY_IMAGES.filter(image => image.category === category);
};

// Helper function to get image by ID
export const getImageById = (id) => {
  return GALLERY_IMAGES.find(image => image.id === id);
};

// Export individual images for carousel (maintaining current functionality)
export {
  IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9
};