import React from 'react';
import { HeroSection as ReusableHeroSection } from '../../../layouts/HeroSection/HeroSection';

export const Hero = () => {
    const title = <>WHERE GOLF <br /> PEOPLE BELONG</>;
    const description = (
        <>
            <p>Step into a place built for people who live the game, not just play it. Our advanced simulator technology recreates the world’s greatest courses in precise detail. You’ll get the analytics you need, the challenges you crave, and a community that speaks your language.</p>
            <p>Improve your swing, hang with friends, or host a private event in The Virtual Greens. We’re building a community of modern golfers, casual players, and anyone looking for a better way to spend their time in Riyadh.</p>
        </>
    );

    return (
        <ReusableHeroSection
            title={title}
            description={description}
            imageUrl="/freepik__background__81702-1.png"
        />
    );
};