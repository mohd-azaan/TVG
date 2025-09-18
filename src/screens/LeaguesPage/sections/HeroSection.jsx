import React from 'react';
import { HeroSection as ReusableHeroSection } from '../../../layouts/HeroSection/HeroSection';

export const HeroSection = () => {
    const title = <>LEAGUES AT <br /> THE VIRTUAL GREENS</>;
    const subtitle = "WELCOME TO YOUR WEEKLY GOLF ROUTINE.";
    const description = (
        <>
            <p>With this league, we're bringing the heat indoors, literally!!</p>
            <p>While the sun blazes outside, we're getting everything ready for a season of high-energy league play. Expect good games, better company, and a weekly competition you'll actually look forward to.</p>
        </>
    );

    return (
        <ReusableHeroSection
            title={title}
            subtitle={subtitle}
            description={description}
            imageUrl="/indoor-golf-1.png"
            ctaText="JOIN THE WHATSAPP GROUP"
            ctaLink="#"
        />
    );
};