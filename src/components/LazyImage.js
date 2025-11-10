import React, { useState, useRef, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

const LazyImage = ({ 
  src, 
  alt, 
  title, 
  className, 
  loading = "lazy", 
  placeholder = true,
  quality = 85,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(loading === "eager");
  const imgRef = useRef();

  // Intersection Observer for better lazy loading
  useEffect(() => {
    if (loading === "eager" || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading, shouldLoad]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div 
      ref={imgRef}
      className="lazy-image-container" 
      style={{ position: 'relative', backgroundColor: '#f0f0f0' }}
    >
      {isLoading && placeholder && (
        <div 
          className="image-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            zIndex: 1
          }}
        >
          <LoadingSpinner size="small" />
        </div>
      )}
      {hasError ? (
        <div 
          className="image-error"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
            backgroundColor: '#f8f8f8',
            color: '#666'
          }}
        >
          <span>Failed to load image</span>
        </div>
      ) : (
        shouldLoad && (
          <img
            src={src}
            alt={alt}
            title={title}
            className={className}
            loading={loading}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            style={{
              display: 'block',
              transition: 'opacity 0.3s ease-in-out',
              opacity: isLoading ? 0 : 1,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            {...props}
          />
        )
      )}
    </div>
  );
};

export default LazyImage;