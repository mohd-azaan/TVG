import React from 'react';
import { HeroSection as ReusableHeroSection } from '../../../layouts/HeroSection/HeroSection';

export const HeroSection = () => {
	const title = (
		<>
			BRING THE COURSE <br /> TO YOUR SPACE
		</>
	);
	const subtitle = 'OWN OR RENT A GOLFZON SIMULATOR AND PLAY ON YOUR TERMS';
	const description = (
		<>
			<p>
				Build the ultimate home setup or elevate your venue with Golfzon's
				award-winning simulators. deliver unmatched realism and performance. As
				the world's leading indoor golf tech, we're making it easier than ever
				to bring pro-level play anywhere with unmatched realism and performance.
			</p>
		</>
	);

	return (
		<ReusableHeroSection
			title={title}
			subtitle={subtitle}
			description={description}
			imageUrl='/advanced-simulators-1-1.png'
			ctaText='GET A QUOTE'
			ctaLink='#'
			secondaryCtaText='EXPLORE SIMULATOR MODELS'
			secondaryCtaLink='#'
		/>
	);
};
