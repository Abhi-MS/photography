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
import IMG10 from '../assets/IMG10.jpg';
import IMG11 from '../assets/IMG11.jpg';
import IMG12 from '../assets/IMG12.jpg';
import IMG13 from '../assets/IMG13.jpg';
import IMG14 from '../assets/IMG14.jpg';
import IMG15 from '../assets/IMG15.jpg';
import IMG16 from '../assets/IMG16.jpg';
import IMG17 from '../assets/IMG17.jpg';
import IMG18 from '../assets/IMG18.jpg';
import IMG19 from '../assets/IMG19.jpg';

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
  },
  {
    id: 10,
    src: IMG10,
    alt: 'Nature photography - outdoor landscape',
    title: 'Landscape View',
    category: 'nature'
  },
  {
    id: 11,
    src: IMG11,
    alt: 'Wildlife photography capture',
    title: 'Wildlife Scene',
    category: 'nature'
  },
  {
    id: 12,
    src: IMG12,
    alt: 'Natural environment photography',
    title: 'Natural Environment',
    category: 'nature'
  },
  {
    id: 13,
    src: IMG13,
    alt: 'Outdoor nature photography',
    title: 'Outdoor Nature',
    category: 'nature'
  },
  {
    id: 14,
    src: IMG14,
    alt: 'Scenic landscape photography',
    title: 'Scenic Landscape',
    category: 'nature'
  },
  {
    id: 15,
    src: IMG15,
    alt: 'Beautiful nature capture',
    title: 'Nature Beauty',
    category: 'nature'
  },
  {
    id: 16,
    src: IMG16,
    alt: 'Photography art in nature',
    title: 'Nature Art',
    category: 'nature'
  },
  {
    id: 17,
    src: IMG17,
    alt: 'Professional nature photography',
    title: 'Professional Nature',
    category: 'nature'
  },
  {
    id: 18,
    src: IMG18,
    alt: 'Artistic nature composition',
    title: 'Nature Composition',
    category: 'nature'
  },
  {
    id: 19,
    src: IMG19,
    alt: 'Stunning nature photography',
    title: 'Stunning Nature',
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
  IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9,
  IMG10, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16, IMG17, IMG18, IMG19
};