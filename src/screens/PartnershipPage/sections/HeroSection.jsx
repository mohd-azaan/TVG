import React from 'react';
import { HeroSection as ReusableHeroSection } from '../../../layouts/HeroSection/HeroSection';

export const HeroSection = () => {
    const title = <>PARTNER WITH <br /> THE VIRTUAL GREENS</>;
    const subtitle = "REVOLUTIONIZING GOLF ENTERTAINMENT";
    const description = (
        <>
            <p>The Virtual Greens is changing the way golf is played and experienced. Built for today's players and tomorrow's fans, we blend sport, hospitality, and tech into one bold concept that works in any city or suburb.</p>
            <p>We're now expanding across the region and inviting select partners to join the next wave of golf entertainment.</p>
        </>
    );

    return (
        <ReusableHeroSection
            title={title}
            subtitle={subtitle}
            description={description}
            imageUrl="/freepik-background.png"
            ctaText="BECOME A PARTNER"
            ctaLink="#"
        />
    );
};