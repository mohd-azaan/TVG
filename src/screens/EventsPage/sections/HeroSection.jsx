import React from 'react';
import { HeroSection as ReusableHeroSection } from '../../../layouts/HeroSection/HeroSection';

export const HeroSection = () => {
    const title = <>YOUR EVENT <br /> A HOLE-IN-ONE</>;
    const subtitle = "LET’S MAKE";
    const description = (
        <>
            <p>In the heart of Riyadh’s Hitteen district, The Virtual Greens is where serious fun meets serious golf. Plan a laid-back hangout or a large-scale celebration. We’ve got the space, the energy, and the food to make it unforgettable.</p>
            <p>Come rain or shine, morning or midnight, we’re ready to host. Good times, great food, and swings that hit different. Oh, and food and drinks? We’ll bring them to you right on the course. No need to pause the game.</p>
        </>
    );

    return (
        <ReusableHeroSection
            title={title}
            subtitle={subtitle}
            description={description}
            imageUrl="/freepik__background__81702-1.png"
            ctaText="PLAN YOUR EVENT"
            ctaLink="#"
            subtitleFirst={true} // This will render the subtitle before the title
        />
    );
};