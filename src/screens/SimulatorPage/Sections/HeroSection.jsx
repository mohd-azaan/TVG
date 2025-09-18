import React from 'react';
import { HeroSection as ReusableHeroSection } from '../../../layouts/HeroSection/HeroSection';

export const HeroSection = () => {
    const title = <>BRING THE COURSE <br /> TO YOUR SPACE</>;
    const subtitle = "THE ULTIMATE IN-HOME GOLF EXPERIENCE";
    const description = (
        <>
            <p>Experience the most advanced golf simulation technology in the comfort of your own space. Our premium simulators bring world-class golf courses directly to you.</p>
        </>
    );

    return (
        <ReusableHeroSection
            title={title}
            subtitle={subtitle}
            description={description}
            imageUrl="/advanced-simulators-1-1.png"
            ctaText="GET STARTED"
            ctaLink="#"
        />
    );
};