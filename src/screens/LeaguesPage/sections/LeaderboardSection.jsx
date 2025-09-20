// src/screens/LeaguesPage/sections/LeaderboardSection.jsx
// Leaderboard section displaying 2025 tournament standings with player rankings and scores
// Features sticky header, player data table, and hover effects for rows
// RELEVANT FILES: LeaguesPage.jsx, styleguide.css

import React, { useState } from 'react';

const leaderboardData = [
    { pos: '1', player: 'Tommy Fleetwood', flag: '/assets/flags/en.svg', par: '-2', r1: '64', r2: '63', r3: '67', r4: '68', total: '134' },
    { pos: 'T2', player: 'Russell Henley', flag: '/assets/flags/us.svg', par: '-1', r1: '61', r2: '66', r3: '69', r4: '69', total: '136' },
    { pos: 'T2', player: 'Patrick Cantlay', flag: '/assets/flags/us.svg', par: '+1', r1: '64', r2: '66', r3: '64', r4: '71', total: '136' },
    { pos: '4', player: 'Corey Conners', flag: '/assets/flags/ca.svg', par: '-8', r1: '70', r2: '67', r3: '67', r4: '62', total: '137' },
    { pos: 'T5', player: 'Scottie Scheffler', flag: '/assets/flags/us.svg', par: '-2', r1: '63', r2: '69', r3: '66', r4: '68', total: '138' },
    { pos: 'T5', player: 'Cameron Young', flag: '/assets/flags/us.svg', par: '-4', r1: '67', r2: '62', r3: '71', r4: '66', total: '138' },
    { pos: 'T7', player: 'Justin Thomas', flag: '/assets/flags/us.svg', par: '-5', r1: '64', r2: '69', r3: '69', r4: '65', total: '139' },
    { pos: 'T7', player: 'Sam Burns', flag: '/assets/flags/us.svg', par: '-4', r1: '67', r2: '66', r3: '68', r4: '66', total: '139' },
];

export const LeaderboardSection = () => {
    const [hoveredRow, setHoveredRow] = useState(null);

    return (
        <section className="bg-white py-24">
            <div className="max-w-[1360px] mx-auto px-4">
                <h2 className="font-morganite font-black text-[96px] text-black uppercase tracking-wider text-center mb-12">2025 Leaderboard</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 bg-white z-10">
                            <tr>
                                <th className="font-TVG-typography-tagline font-bold text-xl text-[#009444] uppercase p-4 border-b-2 border-green-700 w-[130px]">Pos</th>
                                <th className="font-TVG-typography-tagline font-bold text-xl text-[#009444] uppercase p-4 border-b-2 border-green-700 w-[450px]">Player</th>
                                <th className="font-TVG-typography-tagline font-bold text-xl text-[#009444] uppercase p-4 border-b-2 border-green-700 w-[130px] text-center">10 Par</th>
                                <th className="font-TVG-typography-tagline font-bold text-xl text-[#009444] uppercase p-4 border-b-2 border-green-700 w-[130px] text-center">R1</th>
                                <th className="font-TVG-typography-tagline font-bold text-xl text-[#009444] uppercase p-4 border-b-2 border-green-700 w-[130px] text-center">R2</th>
                                <th className="font-TVG-typography-tagline font-bold text-xl text-[#009444] uppercase p-4 border-b-2 border-green-700 w-[130px] text-center">R3</th>
                                <th className="font-TVG-typography-tagline font-bold text-xl text-[#009444] uppercase p-4 border-b-2 border-green-700 w-[130px] text-center">R4</th>
                                <th className="font-TVG-typography-tagline font-bold text-xl text-[#009444] uppercase p-4 border-b-2 border-green-700 w-[130px] text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((player, index) => (
                                <tr key={index} onMouseEnter={() => setHoveredRow(index)} onMouseLeave={() => setHoveredRow(null)} className={`${hoveredRow === index ? 'bg-gray-50' : ''}`}>
                                    <td className="font-TVG-typography-default text-lg text-black p-4 border-b border-gray-200">{player.pos}</td>
                                    <td className="font-TVG-typography-default text-lg text-black p-4 border-b border-gray-200 flex items-center">
                                        <img src={player.flag} alt="" className="w-6 h-6 mr-4" />
                                        {player.player}
                                    </td>
                                    <td className="font-TVG-typography-default text-lg text-black p-4 border-b border-gray-200 text-center">{player.par}</td>
                                    <td className="font-TVG-typography-default text-lg text-black p-4 border-b border-gray-200 text-center">{player.r1}</td>
                                    <td className="font-TVG-typography-default text-lg text-black p-4 border-b border-gray-200 text-center">{player.r2}</td>
                                    <td className="font-TVG-typography-default text-lg text-black p-4 border-b border-gray-200 text-center">{player.r3}</td>
                                    <td className="font-TVG-typography-default text-lg text-black p-4 border-b border-gray-200 text-center">{player.r4}</td>
                                    <td className="font-TVG-typography-default text-lg text-black p-4 border-b border-gray-200 text-right">{player.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default LeaderboardSection;
