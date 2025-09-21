import React from 'react';

export const HeroImage = ({
	src = '/learn-hero-training.png',
	alt = 'Hero image',
	className = '',
}) => {
	return (
		<img
			className={`w-[90%] lg:w-[550px] lg:h-[420px] rounded-[24px] object-cover ${className}`}
			src={src}
			alt={alt}
			loading='lazy'
		/>
	);
};

export default HeroImage;
