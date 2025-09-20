import React from 'react';

export const HeroImage = ({
  src = '/learn-hero-training.png',
  alt = 'Man playing on an indoor golf simulator with motion trails',
  className = '',
}) => {
  return (
    <img
      className={`w-[88%] max-w-[900px] h-auto max-h-[520px] rounded-[24px] object-contain ${className}`}
      src={src}
      alt={alt}
    />
  );
};

export default HeroImage;
