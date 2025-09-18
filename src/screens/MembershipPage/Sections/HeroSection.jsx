import React from 'react';
import { HeroSection as ReusableHeroSection } from '../../../layouts/HeroSection/HeroSection';

export const HeroSection = () => {
    const title = <>BECAUSE GOLF <br /> IS BETTER <br /> WHEN IT’S YOURS</>;

    return (
        <ReusableHeroSection
            title={title}
            subtitle={null} // No subtitle in this design
            description={null} // No description in this design
            imageUrl="/freepik__background__81702-1.png"
            ctaText={null} // No CTA in this design
            ctaLink={null}
        />
    );
};