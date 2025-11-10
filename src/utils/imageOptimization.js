// Image optimization utilities for better performance

/**
 * Generate responsive image sizes for different screen resolutions
 * @param {string} src - Original image source
 * @param {number} baseWidth - Base width for calculations
 * @returns {object} - Srcset and sizes for responsive images
 */
export const generateResponsiveImageData = (src, baseWidth = 400) => {
  // For now, return the original src since we don't have a server-side resize service
  // In production, you'd want to use a service like Cloudinary, ImageKit, or generate multiple sizes
  return {
    src,
    srcSet: src, // Would be: `${src}?w=200 1x, ${src}?w=400 2x, ${src}?w=600 3x`
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  };
};

/**
 * Preload critical images (above the fold)
 * @param {Array} images - Array of image sources to preload
 * @param {number} limit - Maximum number of images to preload
 */
export const preloadCriticalImages = (images, limit = 2) => {
  const criticalImages = images.slice(0, limit);
  
  criticalImages.forEach((imageSrc) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageSrc;
    document.head.appendChild(link);
  });
};

/**
 * Progressive loading: load a low-quality placeholder first
 * @param {string} src - Original image source
 * @returns {object} - Placeholder and full-quality image sources
 */
export const getProgressiveImageSources = (src) => {
  // For a real implementation, you'd have different quality versions
  // For now, we'll simulate with the same image
  return {
    placeholder: src, // Would be: `${src}?q=10&blur=10` for a blurred, low-quality version
    fullQuality: src
  };
};

/**
 * Check if WebP format is supported
 * @returns {boolean} - True if WebP is supported
 */
export const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').startsWith('data:image/webp');
};

/**
 * Get optimized image format based on browser support
 * @param {string} src - Original image source
 * @returns {string} - Optimized image source
 */
export const getOptimizedImageSrc = (src) => {
  // In a real implementation, you'd serve WebP when supported
  // For now, return the original source
  return src;
};

/**
 * Image loading performance monitoring
 */
export const measureImageLoadTime = (imageSrc, onComplete) => {
  const startTime = performance.now();
  const img = new Image();
  
  img.onload = () => {
    const loadTime = performance.now() - startTime;
    onComplete?.(loadTime, true);
  };
  
  img.onerror = () => {
    const loadTime = performance.now() - startTime;
    onComplete?.(loadTime, false);
  };
  
  img.src = imageSrc;
};