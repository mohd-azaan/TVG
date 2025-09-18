// src/screens/LeaguesPage/sections/WhatToExpectSection.jsx
// What to Expect section featuring league benefits and features with golf icons
// Displays image, main heading, and feature list with detailed descriptions
// RELEVANT FILES: LeaguesPage.jsx, styleguide.css, indoor-golf-1.png

import React from 'react';

const GolfIcon = () => (
    <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 40C25.125 40 20.9896 38.3021 17.5938 34.9062C14.1979 31.5104 12.5 27.375 12.5 22.5C12.5 17.625 14.1979 13.4896 17.5938 10.0938C20.9896 6.69792 25.125 5 30 5C34.875 5 39.0104 6.69792 42.4062 10.0938C45.8021 13.4896 47.5 17.625 47.5 22.5C47.5 27.375 45.8021 31.5104 42.4062 34.9062C39.0104 38.3021 34.875 40 30 40ZM30 35C33.4583 35 36.4062 33.7812 38.8438 31.3438C41.2812 28.9062 42.5 25.9583 42.5 22.5C42.5 19.0417 41.2812 16.0938 38.8438 13.6562C36.4062 11.2188 33.4583 10 30 10C26.5417 10 23.5938 11.2188 21.1562 13.6562C18.7188 16.0938 17.5 19.0417 17.5 22.5C17.5 25.9583 18.7188 28.9062 21.1562 31.3438C23.5938 33.7812 26.5417 35 30 35ZM25 22.5C25.7083 22.5 26.3021 22.2604 26.7812 21.7812C27.2604 21.3021 27.5 20.7083 27.5 20C27.5 19.2917 27.2604 18.6979 26.7812 18.2188C26.3021 17.7396 25.7083 17.5 25 17.5C24.2917 17.5 23.6979 17.7396 23.2188 18.2188C22.7396 18.6979 22.5 19.2917 22.5 20C22.5 20.7083 22.7396 21.3021 23.2188 21.7812C23.6979 22.2604 24.2917 22.5 25 22.5ZM35 22.5C35.7083 22.5 36.3021 22.2604 36.7812 21.7812C37.2604 21.3021 37.5 20.7083 37.5 20C37.5 19.2917 37.2604 18.6979 36.7812 18.2188C36.3021 17.7396 35.7083 17.5 35 17.5C34.2917 17.5 33.6979 17.7396 33.2188 18.2188C32.7396 18.6979 32.5 19.2917 32.5 20C32.5 20.7083 32.7396 21.3021 33.2188 21.7812C33.6979 22.2604 34.2917 22.5 35 22.5ZM30 17.5C30.7083 17.5 31.3021 17.2604 31.7812 16.7812C32.2604 16.3021 32.5 15.7083 32.5 15C32.5 14.2917 32.2604 13.6979 31.7812 13.2188C31.3021 12.7396 30.7083 12.5 30 12.5C29.2917 12.5 28.6979 12.7396 28.2188 13.2188C27.7396 13.6979 27.5 14.2917 27.5 15C27.5 15.7083 27.7396 16.3021 28.2188 16.7812C28.6979 17.2604 29.2917 17.5 30 17.5ZM27.5 55V52.5C27.5 51.125 27.0104 49.9479 26.0312 48.9688C25.0521 47.9896 23.875 47.5 22.5 47.5H17.5V42.5H42.5V47.5H37.5C36.125 47.5 34.9479 47.9896 33.9688 48.9688C32.9896 49.9479 32.5 51.125 32.5 52.5V55H27.5Z" fill="#009444"/>
    </svg>
);

const features = [
    "Weekly matches with a rotating format.",
    "Exclusive league-night food and drink specials.",
    "Prizes and giveaways for top players and standout moments.",
    "Live leaderboard to track your progress.",
    "Laid-back, social atmosphere with just the right level of friendly competition."
];

export const WhatToExpectSection = () => {
    return (
        <section className="bg-[#f6f6f6] py-24">
            <div className="max-w-[1360px] mx-auto px-4 flex items-center gap-16">
                <div className="w-1/2">
                    <img src="/indoor-golf-1.png" alt="Indoor golf setup" className="rounded-3xl" />
                </div>
                <div className="w-1/2">
                    <h2 className="font-TVG-typography-h2 font-[800] text-[96px] text-black uppercase leading-none mb-4">What to Expect</h2>
                    <p className="font-TVG-typography-tagline font-bold text-2xl text-green-700 uppercase mb-8">Stay Tuned...</p>
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <GolfIcon />
                                <p className="font-TVG-typography-default text-lg text-gray-600">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatToExpectSection;
