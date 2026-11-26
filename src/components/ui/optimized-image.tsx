'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'loading' | 'priority'> {
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  placeholder = 'empty',
  blurDataURL,
  className,
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src as string;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: isLoaded ? 'transparent' : '#10213a' }}>
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
}
