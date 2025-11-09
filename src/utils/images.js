// Dynamic image management - automatically loads all images from assets folder
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Import all images from assets folder
const imageModules = importAll(
  require.context('../assets', false, /\.(png|jpe?g|svg)$/)
);

// Convert to array and generate metadata
const generateImageData = () => {
  const imageFiles = Object.keys(imageModules).sort(); // Sort for consistent order
  
  return imageFiles.map((filename, index) => {
    const imageModule = imageModules[filename];
    const imageSrc = imageModule.default || imageModule;
    
    // Extract name without extension for title
    const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|svg)$/i, '');
    const displayName = nameWithoutExt.replace(/[_-]/g, ' ');
    
    return {
      id: index + 1,
      src: imageSrc,
      filename: filename,
      alt: `${displayName} - Professional photography by Abhi Murali`,
      title: displayName,
      category: 'nature' // Default category, can be customized
    };
  });
};

// Generate gallery images array
export const GALLERY_IMAGES = generateImageData();

// Helper function to get specific images by category
export const getImagesByCategory = (category) => {
  return GALLERY_IMAGES.filter(image => image.category === category);
};

// Helper function to get image by ID
export const getImageById = (id) => {
  return GALLERY_IMAGES.find(image => image.id === id);
};

// Helper function to get total image count
export const getTotalImages = () => {
  return GALLERY_IMAGES.length;
};

// Export individual images for carousel (maintaining current functionality)
// This creates named exports for backward compatibility
const imageExports = {};
GALLERY_IMAGES.forEach((image, index) => {
  imageExports[`IMG${index + 1}`] = image.src;
});

export const {
  IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9,
  IMG10, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16, IMG17, IMG18, IMG19
} = imageExports;