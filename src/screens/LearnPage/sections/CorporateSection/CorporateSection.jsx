// src/screens/LearnPage/sections/CorporateSection/CorporateSection.jsx
// Corporate programs section featuring team-building and employee wellness golf initiatives
// This component displays corporate golf programs with image and description layout
// RELEVANT FILES: LearnPage.jsx, Button.jsx, tailwind.config.js

import React from 'react';
import { Button } from '../../../../components/ui/button';

const ArrowRight = ({ className = 'w-6 h-6' }) => (
	<svg className={className} viewBox='0 0 24 24' fill='none'>
		<path
			d='M5 12H19M19 12L12 5M19 12L12 19'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export const CorporateSection = () => {
	return (
		<div className="relative w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center gap-16">
                    <div className="w-[655px]">
                        <img src="/freepik__background__81702-1.png" alt="Corporate Event" className="rounded-3xl" />
                    </div>
                    <div className="w-[655px]">
                        <h2 className="font-TVG-typography-h2 font-[800] text-[96px] leading-[90px] tracking-[1.92px] text-black uppercase">Corporate Programs</h2>
                        <p className="font-TVG-typography-tagline font-[700] text-[22px] leading-[26px] tracking-[0.44px] text-[#009444] uppercase mt-4">Golf is a great team-building and well-being tool</p>
                        <div className="font-TVG-typography-default font-[500] text-lg text-[#757575] mt-6 space-y-4">
                            <p>The Virtual Greens recognizes the importance of employee wellbeing and offers various initiatives to help companies support their employees.</p>
                            <p>We offer company individual or group golf lessons and beginners programmes that remove the barriers of traditional corporate golf membership and make the sport more accessible.</p>
                        </div>
                        <div className="mt-8">
                            <Button className="bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-8 py-8 font-TVG-typography-button text-[18px] text-white uppercase">
                                <span>Learn More</span>
                                <ArrowRight className='w-6 h-6' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};
