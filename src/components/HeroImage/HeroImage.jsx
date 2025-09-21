import React from 'react';

export const HeroImage = ({
	src = '/learn-hero-training.png',
	alt = 'Hero image',
	className = '',
}) => {
	return (
		<img
			className={`w-[88%] max-w-[900px] h-auto max-h-[520px] rounded-[24px] object-contain ${className}`}
			src={src}
			alt={alt}
			loading='lazy'
		/>
	);
};

export default HeroImage;
