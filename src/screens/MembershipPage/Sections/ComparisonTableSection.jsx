// src/screens/MembershipPage/Sections/ComparisonTableSection.jsx
// Pixel-perfect recreation of Figma design nodes 2439:2574 and 3003:3418
// Exact layout matching "WHICH TIER FITS YOU BEST?" comparison table with all 24 features
// RELEVANT FILES: MembershipPage.jsx, styleguide.css, tailwind.config.js

import React, { useState } from 'react';

const ICON_CLOSE = '/assets/close-small-24dp.svg';
const ICON_INFO = '/assets/info-icon.svg';
const SAUDI_RIYAL = '/saudi-riyal.svg';

const CheckIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const tiers = [
    { key: 'individual', label: 'INDIVIDUAL', type: 'individual' },
    { key: 'standard', label: 'STANDARD', type: 'corporate' },
    { key: 'executive', label: 'EXECUTIVE', type: 'corporate' },
    { key: 'c-suite', label: 'C-SUITE', type: 'corporate' },
];

const features = [
    { id: 'priority-booking', label: 'Priority Booking', values: ['check', 'check', 'check', 'check'] },
    { id: 'concierge-service', label: 'Concierge Service', values: ['check', 'check', 'check', 'check'] },
    { id: 'open-private-bay', label: 'Open & Private Bay Access', values: ['check', 'check', 'check', 'check'] },
    { id: 'access-club-member', label: 'Access to Club Member Business Meetup & Events', values: ['check', 'check', 'check', 'check'] },
    { id: 'access-extended-partner', label: 'Access extended to partner', values: ['First year', 'close', 'close', 'close'], hasTooltip: true, tooltip: '+1 Partner (Spouse, Fiancee) for the first year only. To keep this benefit in year 2 and beyond, the member must renew within 1 month of expiry.' },
    { id: 'membership-freezing', label: 'Membership Freezing', values: ['1 Month', 'close', 'close', 'close'] },
    { id: 'membership-transferable', label: 'Membership Transferable', values: ['check', 'close', 'close', 'close'] },
    { id: 'dedicated-account-manager', label: 'Dedicated Account Manager', values: ['check', 'check', 'check', 'check'] },
    { id: '45-minute-swing', label: '45-minute Swing Evaluation', values: ['1x', '1x for all', '1x for all', '1x for all'] },
    { id: 'vip-parking', label: 'VIP Parking', values: ['1', '1', '2', '3'] },
    { id: 'vip-corporate-meeting', label: 'VIP for Corporate Meeting & Birthday Access', values: ['check', 'close', 'close', 'close'] },
    { id: 'club-member-alumni', label: 'Club Member Alumni & Community Access', values: ['check', 'close', 'check', 'check'] },
    { id: 'named-club-member', label: 'Named Club Member', values: ['close', '2', '4', '6'] },
    { id: 'monthly-rotational', label: 'Monthly Rotational Best-Performer Wildcard', values: ['close', '1', '2', '3'] },
    { id: 'discount-tvg-academy', label: 'Discounts for TVG Academy', values: ['close', 'check', 'check', 'check'] },
    { id: 'tvg-academy-priority', label: 'TVG Academy Priority Coach Availability', values: ['close', 'close', 'check', 'check'] },
    { id: 'credit-top-up', label: 'Credit Top-Up', values: ['2,000', '5,000', '10,000', '15,000'], hasTooltip: true, tooltip: 'Optional credit top-up for Exclusive Benefits, Activities, and Access' },
    { id: 'team-building-venue', label: 'Team Building Venue Access', values: ['close', 'Annually', 'Semiannually', 'Quarterly'] },
    { id: 'advertisement-space', label: 'Advertisement Space', values: ['close', '1', '2', '3'] },
    { id: 'permanent-corporate-logo', label: 'Permanent Corporate Logo', values: ['close', 'check', 'check', 'check'], hasTooltip: true, tooltip: 'Optional permanent corporate logo until membership duration for SAR 15,000 (two lockers)' },
    { id: 'simulator-access-corporate', label: 'Simulator Access for Corporate Events', values: ['close', 'close', 'check', 'check'] },
    { id: 'exclusive-high-profile', label: 'Exclusive High-Profile Annual Event', values: ['close', 'close', 'close', 'check'] },
    { id: 'exclusive-industry-partnership', label: 'Exclusive Industry Partnership Agreement', values: ['close', 'close', 'close', 'check'] },
];

const prices = ['15,000', '30,000', '60,000', '90,000'];

const Tooltip = ({ content, show }) => (
    <div className={`absolute left-full ml-4 w-80 bg-white border border-gray-200 p-4 rounded-lg shadow-lg z-20 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {content}
    </div>
);

export const ComparisonTableSection = () => {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [activeTooltip, setActiveTooltip] = useState(null);

    return (
        <section className="bg-white py-24">
            <div className="max-w-[1360px] mx-auto px-4">
                <h2 className="font-morganite font-black text-[96px] text-black uppercase tracking-wider text-center mb-12">Which Tier Fits You Best?</h2>
                
                <div className="relative">
                    <div className="flex justify-end mb-[-2px]">
                        <div className="bg-[#004a22] text-white font-TVG-typography-button text-lg uppercase tracking-wider px-8 py-2 rounded-t-3xl w-[780px] text-center">
                            Corporate
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="sticky top-0 bg-white z-10">
                                <tr>
                                    <th className="font-TVG-typography-tagline font-bold text-xl text-black uppercase p-4 w-[320px]">Membership</th>
                                    {tiers.map(tier => (
                                        <th key={tier.key} className={`font-TVG-typography-tagline font-bold text-xl uppercase p-4 w-[260px] text-center ${tier.type === 'individual' ? 'text-green-700' : 'text-green-900'}`}>
                                            {tier.label}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            {/* Sticky border line that remains when header scrolls away */}
                            <thead className="sticky top-0 z-20">
                                <tr>
                                    <th className="h-0 p-0 border-b-2 border-green-700 w-[320px]"></th>
                                    {tiers.map(tier => (
                                        <th key={`border-${tier.key}`} className="h-0 p-0 border-b-2 border-green-700 w-[260px]"></th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, index) => (
                                    <tr key={feature.id} onMouseEnter={() => setHoveredRow(index)} onMouseLeave={() => setHoveredRow(null)} className={`${hoveredRow === index ? 'bg-gray-50' : ''}`}>
                                        <td className="font-TVG-typography-default text-lg text-black p-4 border-b border-gray-200 flex items-center">
                                            {feature.label}
                                            {feature.hasTooltip && (
                                                <div className="relative ml-2">
                                                    <img src={ICON_INFO} alt="info" className="w-5 h-5 cursor-pointer" onClick={() => setActiveTooltip(activeTooltip === feature.id ? null : feature.id)} />
                                                    <Tooltip content={feature.tooltip} show={activeTooltip === feature.id} />
                                                </div>
                                            )}
                                        </td>
                                        {feature.values.map((value, i) => (
                                            <td key={i} className="font-TVG-typography-default text-lg text-black p-4 border-b border-gray-200 text-center">
                                                {value === 'check' ? <CheckIcon className="mx-auto w-7 h-7 text-black" /> : value === 'close' ? <img src={ICON_CLOSE} alt="close" className="mx-auto w-6 h-6" /> : value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                <tr className="bg-white">
                                    <td className="font-TVG-typography-tagline font-bold text-xl text-black p-4 border-t-2 border-green-700">12-Month Membership</td>
                                    {prices.map((price, i) => (
                                        <td key={i} className="font-gilroy font-bold text-2xl text-green-700 p-4 border-t-2 border-green-700 text-center">
                                            <div className="flex items-center justify-center">
                                                <img src={SAUDI_RIYAL} alt="SAR" className="w-5 h-5 mr-1" />
                                                {price}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="max-w-[1360px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#f6f6f6] p-8 rounded-3xl flex items-center">
                        <div className="text-center w-1/3">
                            <p className="font-morganite font-black text-[96px] leading-[90px] text-[#009444]">96</p>
                            <p className="font-gilroy font-semibold text-[20px] text-[#009444] uppercase tracking-[0.44px]">Members</p>
                        </div>
                        <div className="w-2/3 pl-4">
                            <p className="font-gilroy font-bold text-[28px] leading-[40px] text-black uppercase mb-2">96 Members per year</p>
                            <p className="font-gilroy text-[20px] leading-[28px] text-black">Individual memberships are capped at <span className="font-gilroy font-bold">96</span> per year.</p>
                        </div>
                    </div>
                    <div className="bg-[#f6f6f6] p-8 rounded-3xl">
                        <h3 className="font-gilroy font-bold text-[28px] text-black uppercase mb-4">Discounted Membership</h3>
                        <p className="font-gilroy text-[20px] text-black mb-4">Additional family members enjoy discounted membership rates:</p>
                        <ul className="space-y-2">
                            <li className="flex items-center font-gilroy text-[20px] text-black"><span className="text-green-700 mr-2">●</span>Spouse (1st Year - continues) <span className="font-gilroy font-semibold ml-1">No fees</span></li>
                            <li className="flex items-center font-gilroy text-[20px] text-black"><span className="text-green-700 mr-2">●</span>2nd family member <img src={SAUDI_RIYAL} alt="SAR" className="w-4 h-4 mx-1" /> <span className="font-gilroy font-semibold">10,000</span></li>
                            <li className="flex items-center font-gilroy text-[20px] text-black"><span className="text-green-700 mr-2">●</span>3rd family member onwards <img src={SAUDI_RIYAL} alt="SAR" className="w-4 h-4 mx-1" /> <span className="font-gilroy font-semibold">5,000</span></li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#f6f6f6] rounded-3xl mt-8 max-w-[1360px] mx-auto p-8 flex items-center justify-between">
                    <div>
                        <h3 className="font-gilroy font-bold text-[28px] leading-[40px] text-black uppercase">Not sure which is right for you?</h3>
                        <p className="font-gilroy text-[20px] leading-[28px] text-black mt-2">Talk to our team — we’ll match your membership to your play style.</p>
                    </div>
                    <button className="bg-[#009444] text-white px-6 py-3 rounded-full font-gilroy text-lg uppercase flex items-center font-semibold">
                        Talk to our team
                        <img src="/arrow-right.svg" alt="arrow" className="w-6 h-6 ml-2" />
                    </button>
                </div>

                <div className="max-w-[1360px] mx-auto mt-4 text-center">
                    <p className="font-TVG-typography-default text-lg text-gray-500"><span className="font-TVG-typography-tagline">NOTE</span> All prices are exclusive of 15% VAT</p>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTableSection;