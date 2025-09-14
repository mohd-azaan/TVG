// src/screens/LeaguesPage/sections/LeaderboardSection.jsx
// Leaderboard section displaying 2025 tournament standings with player rankings and scores
// Features sticky header, player data table, and hover effects for rows
// RELEVANT FILES: LeaguesPage.jsx, styleguide.css, flag assets (us.svg, ca.svg, en.svg)

import React from 'react';

// Player data extracted from Figma design
const leaderboardData = [
	{
		position: '1',
		player: 'Tommy Fleetwood',
		flag: '/saudi-riyal-symbol-2-1.svg', // Using existing flag, will need to be replaced with proper en flag
		par: '-2',
		r1: '64',
		r2: '63',
		r3: '67',
		r4: '68',
		total: '134'
	},
	{
		position: 'T2',
		player: 'Russell Henley',
		flag: '/saudi-riyal-symbol-2-1.svg', // Using placeholder, will need us flag
		par: '-1',
		r1: '61',
		r2: '66',
		r3: '69',
		r4: '69',
		total: '136'
	},
	{
		position: 'T2',
		player: 'Patrick Cantlay',
		flag: '/saudi-riyal-symbol-2-1.svg', // Using placeholder, will need us flag
		par: '+1',
		r1: '64',
		r2: '66',
		r3: '64',
		r4: '71',
		total: '136'
	},
	{
		position: '4',
		player: 'Corey Conners',
		flag: '/saudi-riyal-symbol-2-1.svg', // Using placeholder, will need ca flag
		par: '-8',
		r1: '70',
		r2: '67',
		r3: '67',
		r4: '62',
		total: '137'
	},
	{
		position: 'T5',
		player: 'Scottie Scheffler',
		flag: '/saudi-riyal-symbol-2-1.svg', // Using placeholder, will need us flag
		par: '-2',
		r1: '63',
		r2: '69',
		r3: '66',
		r4: '68',
		total: '138'
	},
	{
		position: 'T5',
		player: 'Cameron Young',
		flag: '/saudi-riyal-symbol-2-1.svg', // Using placeholder, will need us flag
		par: '-4',
		r1: '67',
		r2: '62',
		r3: '71',
		r4: '66',
		total: '138'
	},
	{
		position: 'T7',
		player: 'Justin Thomas',
		flag: '/saudi-riyal-symbol-2-1.svg', // Using placeholder, will need us flag
		par: '-5',
		r1: '64',
		r2: '69',
		r3: '69',
		r4: '65',
		total: '139'
	},
	{
		position: 'T7',
		player: 'Sam Burns',
		flag: '/saudi-riyal-symbol-2-1.svg', // Using placeholder, will need us flag
		par: '-4',
		r1: '67',
		r2: '66',
		r3: '68',
		r4: '66',
		total: '139'
	}
];

const TableRowHover = () => (
	<div className="absolute bg-[rgba(217,217,217,0)] inset-0" data-name="table raw hover" />
);

const LeaderboardSection = () => {
	return (
		<div className="absolute h-[1084px] left-0 overflow-clip top-[1024px] w-[1920px]" data-name="Leaderboard">
			<div className="absolute contents left-0 top-0" data-name="Leaderboard">
				{/* Main heading */}
				<div className="absolute font-['Morganite:ExtraBold',_sans-serif] leading-[0] left-[953.5px] not-italic text-[96px] text-black text-center top-[100px] tracking-[1.92px] translate-x-[-50%] uppercase w-[655px]">
					<p className="leading-[90px]">2025 Leaderboard</p>
				</div>

				{/* Sticky table header container */}
				<div className="absolute h-[871px] left-0 top-0 w-[1920px]" data-name="thead container">
					<div className="absolute bottom-0 left-0 pointer-events-none top-[50px]" style={{ height: "calc(100% - 50px)" }}>
						<div className="bg-white h-[254px] overflow-clip pointer-events-auto sticky top-0 w-[1920px]" data-name="Sticky thead">
							{/* Table headers */}
							<div className="absolute font-['Gilroy-Bold:☞',_sans-serif] leading-[0] not-italic text-[#009444] text-[22px] text-center text-nowrap top-[211px] tracking-[0.44px] translate-x-[-50%] uppercase" style={{ left: "calc(50% + 649px)" }}>
								<p className="leading-[26px] whitespace-pre">Total</p>
							</div>
							<div className="absolute font-['Gilroy-Bold:☞',_sans-serif] leading-[0] not-italic text-[#009444] text-[22px] text-center text-nowrap top-[211px] tracking-[0.44px] translate-x-[-50%] uppercase" style={{ left: "calc(50% + 486.5px)" }}>
								<p className="leading-[26px] whitespace-pre">R4</p>
							</div>
							<div className="absolute font-['Gilroy-Bold:☞',_sans-serif] leading-[0] not-italic text-[#009444] text-[22px] text-center text-nowrap top-[211px] tracking-[0.44px] translate-x-[-50%] uppercase" style={{ left: "calc(50% + 357px)" }}>
								<p className="leading-[26px] whitespace-pre">R3</p>
							</div>
							<div className="absolute font-['Gilroy-Bold:☞',_sans-serif] leading-[0] not-italic text-[#009444] text-[22px] text-center text-nowrap top-[211px] tracking-[0.44px] translate-x-[-50%] uppercase" style={{ left: "calc(50% + 227px)" }}>
								<p className="leading-[26px] whitespace-pre">R2</p>
							</div>
							<div className="absolute font-['Gilroy-Bold:☞',_sans-serif] leading-[0] not-italic text-[#009444] text-[22px] text-center text-nowrap top-[211px] tracking-[0.44px] translate-x-[-50%] uppercase" style={{ left: "calc(50% + 94.5px)" }}>
								<p className="leading-[26px] whitespace-pre">R1</p>
							</div>
							<div className="absolute font-['Gilroy-Bold:☞',_sans-serif] leading-[0] not-italic text-[#009444] text-[22px] text-center text-nowrap top-[211px] tracking-[0.44px] translate-x-[-50%] uppercase" style={{ left: "calc(50% - 34px)" }}>
								<p className="leading-[26px] whitespace-pre">10 Par</p>
							</div>
							<div className="absolute font-['Gilroy-Bold:☞',_sans-serif] leading-[0] not-italic text-[#009444] text-[22px] text-center text-nowrap top-[211px] tracking-[0.44px] translate-x-[-50%] uppercase" style={{ left: "calc(50% - 511px)" }}>
								<p className="leading-[26px] whitespace-pre">Player</p>
							</div>
							<div className="absolute font-['Gilroy-Bold:☞',_sans-serif] leading-[0] not-italic text-[#009444] text-[22px] text-center text-nowrap top-[211px] tracking-[0.44px] translate-x-[-50%] uppercase" style={{ left: "calc(50% - 658px)" }}>
								<p className="leading-[26px] whitespace-pre">Pos</p>
							</div>

							{/* Green divider line */}
							<div className="absolute bottom-0 left-[282px] pointer-events-none top-[253px]" style={{ height: "calc(100% - 253px)" }}>
								<div className="bg-[#009444] h-0.5 pointer-events-auto sticky top-0 w-[1360px]" />
							</div>
						</div>
					</div>
				</div>

				{/* Table rows with hover effects */}
				<div className="absolute h-[648px] left-[282px] overflow-clip top-[304px] w-[1360px]" data-name="Hover raws">
					{leaderboardData.map((_, index) => (
						<div key={index} className={`absolute h-[81px] left-0 top-[${81 * index}px] w-[1359px]`} data-name={`raw ${index + 1}`}>
							<TableRowHover />
						</div>
					))}
				</div>

				{/* Table row divider lines */}
				<div className="absolute contents left-[282px] top-[385px]" data-name="Lines">
					{Array.from({ length: 8 }).map((_, index) => (
						<div key={index} className={`absolute bg-[lightgrey] h-px left-[282px] top-[${385 + (81 * index)}px] w-[1360px]`} />
					))}
				</div>

				{/* Position column */}
				<div className="absolute bg-white font-['Gilroy-Medium:☞',_sans-serif] h-[708px] leading-[0] left-[280px] not-italic text-[22px] text-black text-nowrap top-[242px] tracking-[0.44px] uppercase w-[130px]" data-name="Pos">
					{leaderboardData.map((player, index) => (
						<div key={index} className={`absolute top-[${92 + (81 * index)}px]`} style={{ left: "calc(50% - 63px)" }}>
							<p className="leading-[26px] text-nowrap whitespace-pre">{player.position}</p>
						</div>
					))}
				</div>

				{/* Player column */}
				<div className="absolute bg-white h-[708px] left-[410px] overflow-clip top-[242px] w-[450px]" data-name="Player">
					{leaderboardData.map((player, index) => (
						<div key={index}>
							<div className={`absolute font-['Gilroy-Medium:☞',_sans-serif] leading-[0] left-[47px] not-italic text-[20px] text-black top-[${94 + (81 * index)}px] w-[295px]`}>
								<p className="leading-[28px]">{player.player}</p>
							</div>
							<div className={`absolute left-1.5 size-6 top-[${94 + (81 * index)}px]`} data-name="flag">
								<img alt="" className="block max-w-none size-full" src={player.flag} />
							</div>
						</div>
					))}
				</div>

				{/* Par column */}
				<div className="absolute bg-white font-['Gilroy-Medium:☞',_sans-serif] h-[708px] leading-[0] left-[861px] not-italic overflow-clip text-[22px] text-black text-center text-nowrap top-[242px] tracking-[0.44px] uppercase w-[130px]" data-name="Par">
					{leaderboardData.map((player, index) => (
						<div key={index} className={`absolute ${index % 2 === 0 ? 'left-1/2' : 'top-[translate-x-[-50%]'} top-[${92 + (81 * index)}px] translate-x-[-50%]`}>
							<p className="leading-[26px] text-nowrap whitespace-pre">{player.par}</p>
						</div>
					))}
				</div>

				{/* R1 column */}
				<div className="absolute bg-white font-['Gilroy-Medium:☞',_sans-serif] h-[708px] leading-[0] left-[991px] not-italic overflow-clip text-[22px] text-black text-center text-nowrap top-[242px] tracking-[0.44px] uppercase w-[130px]" data-name="R1">
					{leaderboardData.map((player, index) => (
						<div key={index} className={`absolute left-1/2 top-[${92 + (81 * index)}px] translate-x-[-50%]`}>
							<p className="leading-[26px] text-nowrap whitespace-pre">{player.r1}</p>
						</div>
					))}
				</div>

				{/* R2 column */}
				<div className="absolute bg-white font-['Gilroy-Medium:☞',_sans-serif] h-[708px] leading-[0] left-[1121px] not-italic overflow-clip text-[22px] text-black text-center text-nowrap top-[242px] tracking-[0.44px] uppercase w-[130px]" data-name="R2">
					{leaderboardData.map((player, index) => (
						<div key={index} className={`absolute left-1/2 top-[${92 + (81 * index)}px] translate-x-[-50%]`}>
							<p className="leading-[26px] text-nowrap whitespace-pre">{player.r2}</p>
						</div>
					))}
				</div>

				{/* R3 column */}
				<div className="absolute bg-white font-['Gilroy-Medium:☞',_sans-serif] h-[708px] leading-[0] left-[1251px] not-italic overflow-clip text-[22px] text-black text-center text-nowrap top-[242px] tracking-[0.44px] uppercase w-[130px]" data-name="R3">
					{leaderboardData.map((player, index) => (
						<div key={index} className={`absolute left-1/2 top-[${92 + (81 * index)}px] translate-x-[-50%]`}>
							<p className="leading-[26px] text-nowrap whitespace-pre">{player.r3}</p>
						</div>
					))}
				</div>

				{/* R4 column */}
				<div className="absolute bg-white font-['Gilroy-Medium:☞',_sans-serif] h-[708px] leading-[0] left-[1381px] not-italic overflow-clip text-[22px] text-black text-center text-nowrap top-[242px] tracking-[0.44px] uppercase w-[130px]" data-name="R4">
					{leaderboardData.map((player, index) => (
						<div key={index} className={`absolute left-1/2 top-[${92 + (81 * index)}px] translate-x-[-50%]`}>
							<p className="leading-[26px] text-nowrap whitespace-pre">{player.r4}</p>
						</div>
					))}
				</div>

				{/* Total column */}
				<div className="absolute bg-white font-['Gilroy-Medium:☞',_sans-serif] h-[708px] leading-[0] left-[1511px] not-italic overflow-clip text-[22px] text-black text-nowrap text-right top-[242px] tracking-[0.44px] uppercase w-[130px]" data-name="Total">
					{leaderboardData.map((player, index) => (
						<div key={index} className={`absolute right-0 top-[${92 + (81 * index)}px]`}>
							<p className="leading-[26px] text-nowrap whitespace-pre">{player.total}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export { LeaderboardSection };