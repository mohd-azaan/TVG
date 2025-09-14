// src/screens/LeaguesPage/sections/HeroSection.jsx
// Hero section for leagues page with main heading, description, and call-to-action
// Features background graphics, main title, descriptive text, and WhatsApp join button
// RELEVANT FILES: LeaguesPage.jsx, styleguide.css, whatsapp-logo-variant-svgrepo-com-1.svg, shape14-2.svg

import React from 'react';

const HeroSection = () => {
	return (
		<div className="absolute bg-[#272727] h-[1024px] left-0 overflow-clip top-0 w-[1920px]" data-name="Hero">
			{/* Green background section */}
			<div className="absolute bg-[#006f33] h-[435px] left-0 top-[589px] w-[1920px]" />

			{/* Background graphics */}
			<div className="absolute flex h-[0px] items-center justify-center left-[341.98px] top-[431.9px] w-[0px]">
				<div className="flex-none rotate-[348.049deg]">
					<div className="h-[1080px] overflow-clip relative w-[1920px]" data-name="Shape14 2">
						<div className="absolute contents inset-[33.68%_-0.3%_13.63%_6.06%]" data-name="Group">
							<div className="absolute contents inset-[33.68%_-0.3%_13.63%_6.06%]" data-name="Layer 1">
								<div className="absolute contents inset-[33.68%_-0.3%_13.63%_6.06%] mix-blend-screen" data-name="Group">
									<div className="absolute inset-[33.68%_-0.3%_13.63%_6.06%] mix-blend-screen" data-name="Group">
										<img alt="" className="block max-w-none size-full" src="/shape14-2.svg" />
									</div>
								</div>
								<div className="absolute contents inset-[44.32%_32.92%_37.84%_31.87%]" data-name="Group">
									<div className="absolute flex inset-[44.32%_32.92%_37.84%_31.87%] items-center justify-center mix-blend-screen">
										<div className="flex-none h-[669.74px] rotate-[272.33deg] w-[165.5px]">
											<div className="relative size-full" data-name="Vector">
												<img alt="" className="block max-w-none size-full" src="/shape14-2.svg" />
											</div>
										</div>
									</div>
									<div className="absolute flex inset-[46.84%_39.17%_40.37%_38.12%] items-center justify-center mix-blend-screen">
										<div className="flex-none h-[431.6px] rotate-[272.33deg] w-[120.66px]">
											<div className="relative size-full" data-name="Vector">
												<img alt="" className="block max-w-none size-full" src="/shape14-2.svg" />
											</div>
										</div>
									</div>
								</div>
								<div className="absolute inset-[41.71%_15.3%_20.41%_20.79%]" data-name="Vector">
									<img alt="" className="block max-w-none size-full" src="/shape14-2.svg" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* WhatsApp join button */}
			<div className="absolute left-[280px] rounded-[50px] top-[833px]" data-name="CTA btn outline dark - icon">
				<div className="box-border content-stretch flex gap-[15px] items-center justify-center overflow-clip px-[30px] py-[7px] relative">
					<div className="overflow-clip relative shrink-0 size-8" data-name="whatsapp-logo-variant-svgrepo-com 1">
						<div className="relative size-full">
							<img alt="" className="block max-w-none size-full" src="/whatsapp-logo-variant-svgrepo-com-1.svg" />
						</div>
					</div>
					<div className="capitalize flex flex-col font-['Gilroy-SemiBold:☞',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
						<p className="leading-[40px] whitespace-pre">Join the  WhatsApp Group</p>
					</div>
				</div>
				<div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[50px]" />
			</div>

			{/* Main content text */}
			<div className="absolute content-stretch flex gap-2.5 items-center justify-start left-[280px] top-[619px]" data-name="Text box">
				<div className="font-['Gilroy-Medium:☞',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dedede] text-[24px] w-[655px]">
					<p className="mb-0">With this league, we're bringing the heat indoors, literally!!</p>
					<p className="mb-0">&nbsp;</p>
					<p className="">While the sun blazes outside, we're getting everything ready for a season of high-energy league play. Expect good games, better company, and a weekly competition you'll actually look forward to.</p>
				</div>
			</div>

			{/* Welcome tagline */}
			<div className="absolute font-['Gilroy-Bold:☞',_sans-serif] h-[84px] leading-[0] left-[280px] not-italic text-[#7ddb8a] text-[22px] top-[529px] tracking-[0.44px] uppercase w-[521.313px]">
				<p className="leading-[26px]">Welcome to your weekly golf routine.</p>
			</div>

			{/* Main heading */}
			<div className="absolute font-['Morganite:Black',_sans-serif] leading-[0] left-[280px] not-italic text-[148px] text-white top-[278px] tracking-[2.96px] uppercase w-[655px]">
				<p className="leading-[130px]">Leagues at The Virtual Greens</p>
			</div>

			{/* Right side golf image */}
			<div className="absolute bg-center bg-cover bg-no-repeat h-[610px] left-[990px] rounded-[30px] top-[278px] w-[650px]" data-name="freepik__background__81702 1" style={{ backgroundImage: "url('/indoor-golf-1.png')" }} />
		</div>
	);
};

export { HeroSection };