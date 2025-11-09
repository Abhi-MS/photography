import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const LazyImage = ({ src, alt, title, className, loading = "lazy", ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="lazy-image-container" style={{ position: 'relative' }}>
      {isLoading && (
        <div className="image-placeholder">
          <LoadingSpinner size="small" />
        </div>
      )}
      {hasError ? (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      ) : (
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
            display: isLoading ? 'none' : 'block',
            transition: 'opacity 0.3s ease-in-out',
            opacity: isLoading ? 0 : 1
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;