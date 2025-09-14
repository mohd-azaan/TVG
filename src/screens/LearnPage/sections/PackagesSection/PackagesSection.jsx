// src/screens/LearnPage/sections/PackagesSection/PackagesSection.jsx
// Packages section featuring three pricing cards with detailed lesson options and pricing
// This component displays Start, Improve, and Boost packages with adult/junior pricing
// RELEVANT FILES: LearnPage.jsx, Button.jsx, Card.jsx, tailwind.config.js

import React from 'react';
import { Button } from '../../../../components/ui/button';

// Saudi Riyal symbol component
const SaudiRiyalSymbol = ({ className = "w-5 h-5" }) => (
	<span className={`inline-block ${className}`}>﷼</span>
);

// Golf icon component
const GolfIcon = ({ className = "w-6 h-6" }) => (
	<div className={`${className} flex items-center justify-center`}>
		<svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
			<path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor" />
		</svg>
	</div>
);

// Arrow Right icon component
const ArrowRight = ({ className = "w-6 h-6" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export const PackagesSection = () => {
	return (
		<div className='relative w-full bg-white py-16'>
			{/* Section title */}
			<div className='text-center mb-16'>
				<h2 className='font-morganite font-extrabold text-[96px] leading-[90px] text-black uppercase tracking-[1.92px] mb-6'>
					Our Coaching Approach
				</h2>
				<p className='font-TVG-typography-tagline text-[22px] leading-[26px] text-[#009444] uppercase tracking-[0.44px] max-w-[655px] mx-auto'>
					NO TWO SWINGS ARE THE SAME. SO LET'S PUT A GAME PLAN TOGETHER THAT'S JUST FOR YOU
				</p>
			</div>

			{/* Three pricing cards */}
			<div className='max-w-[1360px] mx-auto px-4 flex gap-[50px] items-center justify-center mb-16'>
				{/* Start Package - Swing Evaluation */}
				<div className='bg-[#f6f6f6] rounded-[30px] w-[420px] h-auto relative'>
					{/* Header */}
					<div className='bg-[#009444] rounded-t-[30px] h-[87px] flex items-center justify-between px-8'>
						<h3 className='font-TVG-typography-tagline text-[28px] text-white uppercase tracking-[0.56px]'>Start</h3>
						<div className='w-[50px] h-[50px] bg-white/20 rounded-full flex items-center justify-center'>
							<GolfIcon className="text-white w-6 h-6" />
						</div>
					</div>

					{/* Price */}
					<div className='text-center py-6'>
						<div className='flex items-center justify-center gap-2'>
							<SaudiRiyalSymbol className="text-black text-[40px]" />
							<span className='font-morganite text-[120px] leading-[110px] text-black uppercase tracking-[2.4px]'>199</span>
							<span className='font-TVG-typography-default text-[22px] text-black'>/person</span>
						</div>
					</div>

					{/* Description */}
					<div className='px-6 mb-8'>
						<div className='bg-[#f9f9f9] border border-neutral-200 rounded-[30px] p-6'>
							<h4 className='font-TVG-typography-tagline text-[27px] text-black uppercase mb-4'>Swing Evaluation</h4>
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
								Start with a 45-minute deep dive into your swing, goals, and game. You'll walk away with a game plan and probably a few lightbulb moments.
								<br /><br />
								For all levels — a clear diagnosis for experienced players, a guided starting point for newcomers.
							</p>
						</div>
					</div>

					{/* Details */}
					<div className='px-6 space-y-4 mb-8'>
						<div className='text-center border-t border-gray-200 pt-4'>
							<p className='font-TVG-typography-default text-[20px] text-black'>45-minute session</p>
						</div>
						<div className='text-center border-t border-gray-200 pt-4'>
							<p className='font-TVG-typography-default text-[20px] text-black'>Adults & Juniors</p>
						</div>
						<div className='text-center border-t border-gray-200 pt-4'>
							<p className='font-TVG-typography-default text-[20px] text-black'>One-on-one session</p>
						</div>
					</div>

					{/* CTA Button */}
					<div className='px-8 pb-8'>
						<Button className='w-full bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-4 font-TVG-typography-button text-[18px] uppercase'>
							<span>Book Evaluation</span>
							<ArrowRight className="w-6 h-6" />
						</Button>
					</div>
				</div>

				{/* Improve Package - Lessons & Packages */}
				<div className='bg-[#f6f6f6] rounded-[30px] w-[420px] h-auto relative'>
					{/* Header */}
					<div className='bg-[#006f33] rounded-t-[30px] h-[87px] flex items-center justify-between px-8'>
						<h3 className='font-TVG-typography-tagline text-[28px] text-white uppercase tracking-[0.56px]'>Improve</h3>
						<div className='w-[50px] h-[50px] bg-white/20 rounded-full flex items-center justify-center'>
							<GolfIcon className="text-white w-6 h-6" />
						</div>
					</div>

					{/* Price */}
					<div className='text-center py-6'>
						<div className='flex items-center justify-center gap-2'>
							<SaudiRiyalSymbol className="text-black text-[40px]" />
							<span className='font-morganite text-[120px] leading-[110px] text-black uppercase tracking-[2.4px]'>400+</span>
							<span className='font-TVG-typography-default text-[22px] text-black'>/person</span>
						</div>
					</div>

					{/* Description */}
					<div className='px-6 mb-8'>
						<div className='bg-[#f9f9f9] border border-neutral-200 rounded-[30px] p-6'>
							<h4 className='font-TVG-typography-tagline text-[27px] text-black uppercase mb-4'>Lessons & Packages</h4>
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
								Private sessions taught by our tour professionals, leveraging Golfzon's advanced simulator technology.
							</p>
						</div>
					</div>

					{/* Pricing breakdown */}
					<div className='px-6 space-y-4 mb-8'>
						<div className='text-center border-t border-gray-200 pt-4'>
							<p className='font-TVG-typography-default text-[20px] text-black'>60-minute session</p>
						</div>
						<div className='text-center border-t border-gray-200 pt-4'>
							<p className='font-TVG-typography-default text-[20px] text-black'>One-on-one session</p>
						</div>

						{/* Adults Section */}
						<div className='border-t border-gray-200 pt-4'>
							<p className='font-inter font-bold text-[18px] text-black mb-4'>ADULTS</p>

							<div className='space-y-2'>
								<div className='flex items-center justify-between'>
									<div className='bg-[#cceada] px-4 py-2 rounded-[50px]'>
										<span className='font-TVG-typography-button text-[18px] text-black'>60-Minute</span>
									</div>
									<div className='flex items-center gap-1'>
										<SaudiRiyalSymbol />
										<span className='font-TVG-typography-tagline text-[30px]'>500</span>
									</div>
								</div>

								<div className='flex items-center justify-between'>
									<div className='bg-[#cceada] px-4 py-2 rounded-[50px]'>
										<span className='font-TVG-typography-button text-[18px] text-black'>5-lesson Package</span>
									</div>
									<div className='flex items-center gap-1'>
										<SaudiRiyalSymbol />
										<span className='font-TVG-typography-tagline text-[30px]'>2,400</span>
									</div>
								</div>

								<div className='flex items-center justify-between'>
									<div className='bg-[#cceada] px-4 py-2 rounded-[50px]'>
										<span className='font-TVG-typography-button text-[18px] text-black'>10-lesson Package</span>
									</div>
									<div className='flex items-center gap-1'>
										<SaudiRiyalSymbol />
										<span className='font-TVG-typography-tagline text-[30px]'>4,500</span>
									</div>
								</div>
							</div>
						</div>

						{/* Juniors Section */}
						<div className='border-t border-gray-200 pt-4'>
							<p className='font-inter font-bold text-[18px] text-black mb-4'>JUNIORS</p>

							<div className='space-y-2'>
								<div className='flex items-center justify-between'>
									<div className='bg-[#cceada] px-4 py-2 rounded-[50px]'>
										<span className='font-TVG-typography-button text-[18px] text-black'>60-Minute</span>
									</div>
									<div className='flex items-center gap-1'>
										<SaudiRiyalSymbol />
										<span className='font-TVG-typography-tagline text-[30px]'>400</span>
									</div>
								</div>

								<div className='flex items-center justify-between'>
									<div className='bg-[#cceada] px-4 py-2 rounded-[50px]'>
										<span className='font-TVG-typography-button text-[18px] text-black'>5-Lesson Package</span>
									</div>
									<div className='flex items-center gap-1'>
										<SaudiRiyalSymbol />
										<span className='font-TVG-typography-tagline text-[30px]'>1,900</span>
									</div>
								</div>

								<div className='flex items-center justify-between'>
									<div className='bg-[#cceada] px-4 py-2 rounded-[50px]'>
										<span className='font-TVG-typography-button text-[18px] text-black'>10-Lesson Package</span>
									</div>
									<div className='flex items-center gap-1'>
										<SaudiRiyalSymbol />
										<span className='font-TVG-typography-tagline text-[30px]'>3,500</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* CTA Button */}
					<div className='px-8 pb-8'>
						<Button className='w-full bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-4 font-TVG-typography-button text-[18px] uppercase'>
							<span>Book a Lesson</span>
							<ArrowRight className="w-6 h-6" />
						</Button>
					</div>
				</div>

				{/* Boost Package - Practice on your Own */}
				<div className='bg-[#f6f6f6] rounded-[30px] w-[420px] h-auto relative'>
					{/* Header */}
					<div className='bg-[#004a22] rounded-t-[30px] h-[87px] flex items-center justify-between px-8'>
						<h3 className='font-TVG-typography-tagline text-[28px] text-white uppercase tracking-[0.56px]'>Boost</h3>
						<div className='w-[50px] h-[50px] bg-white/20 rounded-full flex items-center justify-center'>
							<GolfIcon className="text-white w-6 h-6" />
						</div>
					</div>

					{/* Price */}
					<div className='text-center py-6'>
						<div className='flex items-center justify-center gap-2'>
							<SaudiRiyalSymbol className="text-black text-[40px]" />
							<span className='font-morganite text-[120px] leading-[110px] text-black uppercase tracking-[2.4px]'>180</span>
							<span className='font-TVG-typography-default text-[22px] text-black'>/person</span>
						</div>
					</div>

					{/* Description */}
					<div className='px-6 mb-8'>
						<div className='bg-[#f9f9f9] border border-neutral-200 rounded-[30px] p-6'>
							<h4 className='font-TVG-typography-tagline text-[27px] text-black uppercase mb-4'>Practice on your Own</h4>
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
								Become a member or book simulator time with your coach, apply what you've learned, and measure real improvement by challenging your coach in gameplay.
								<br /><br />
								For seasoned players chasing precision — deep data analysis and advanced drills.
							</p>
						</div>
					</div>

					{/* Details */}
					<div className='px-6 space-y-4 mb-8'>
						<div className='text-center border-t border-gray-200 pt-4'>
							<p className='font-TVG-typography-default text-[20px] text-black'>60-minute session</p>
						</div>
						<div className='text-center border-t border-gray-200 pt-4'>
							<p className='font-TVG-typography-default text-[20px] text-black'>Adults & Juniors</p>
						</div>
						<div className='text-center border-t border-gray-200 pt-4'>
							<div className='flex items-center justify-between'>
								<div className='bg-[#cceada] px-4 py-2 rounded-[50px]'>
									<span className='font-TVG-typography-button text-[18px] text-black'>With coach</span>
								</div>
								<div className='flex items-center gap-1'>
									<span className='font-TVG-typography-default text-[30px]'>+</span>
									<SaudiRiyalSymbol />
									<span className='font-TVG-typography-tagline text-[30px]'>250</span>
									<span className='font-TVG-typography-default text-[20px]'>/hour</span>
								</div>
							</div>
						</div>
					</div>

					{/* CTA Button */}
					<div className='px-8 pb-8'>
						<Button className='w-full bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-4 font-TVG-typography-button text-[18px] uppercase'>
							<span>Book a Bay</span>
							<ArrowRight className="w-6 h-6" />
						</Button>
					</div>
				</div>
			</div>

			{/* Footer notes */}
			<div className='text-center space-y-2'>
				<p className='font-TVG-typography-default text-[20px] text-[#757575]'>
					Your session data, videos, and notes are emailed to you after each lesson
				</p>
				<p className='font-TVG-typography-default text-[20px] text-[#757575]'>
					<span className='font-TVG-typography-tagline text-black'>NOTE:</span> The prices are exclusive of 15% VAT
				</p>
			</div>
		</div>
	);
};