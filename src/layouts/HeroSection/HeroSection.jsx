import React from 'react';
import { Link } from 'react-router-dom';

// A simple arrow icon component for the button
const ArrowIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M13 7l5 5m0 0l-5 5m5-5H6'
		/>
	</svg>
);

export const HeroSection = ({
	title,
	subtitle,
	description,
	imageUrl,
	ctaText,
	ctaLink,
	secondaryCtaText,
	secondaryCtaLink,
	subtitleFirst = false, // New prop to control order
}) => {
	const TitleComponent = title && (
		<h1 className='-translate-y-4 lg:-translate-y-6 font-morganite text-[clamp(80px,10vw,120px)] font-[900] uppercase leading-[0.88] tracking-[2.2px] mb-2 mt-0'>
			{title}
		</h1>
	);

	const SubtitleComponent = subtitle && (
		<p className='-translate-y-2 lg:-translate-y-4 font-gilroy font-bold text-[15px] sm:text-[15px] lg:text-[20px] uppercase tracking-[1.10px] leading-[0.5] text-[#7ddb8a] mb-6 mt-0'>
			{subtitle}
		</p>
	);

	return (
		// Main container following TVG Design System hero standards
		<section className='relative w-full h-[100vh] lg:h-[100vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper - Following design system standards */}
			<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-28 lg:pt-36 pb-8 lg:pb-12'>
				{/* Content Positioning - Following hero standards */}
				<div className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
					<div className='flex flex-col'>
						{/* Main Title - Following design system hero title standards */}
						{title && (
							<h1 className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em] mb-2 mt-2 lg:mt-4'>
								{title}
							</h1>
						)}

						{/* Subtitle - Following design system hero subtitle standards */}
						{subtitle && (
							<p className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide mb-2'>
								{subtitle}
							</p>
						)}

						{/* Description Text - Following design system hero body text standards */}
						{description && (
							<div className='font-gilroy font-normal text-[18px] leading-6 text-white space-y-4 max-w-[510px] py-8 lg:py-12'>
								{description}
							</div>
						)}

						{/* CTA Buttons - Following design system hero CTA standards */}
						{(ctaText && ctaLink) || (secondaryCtaText && secondaryCtaLink) ? (
							<div className='flex flex-col sm:flex-row gap-4'>
								{ctaText && ctaLink && (
									<Link
										to={ctaLink}
										className='bg-[#009444] hover:bg-[#7ddb8a] transition-colors rounded-full px-6 py-2.5 flex items-center gap-3 group w-fit'
									>
										<span className='font-gilroy font-medium text-[14px] text-white group-hover:text-black uppercase'>{ctaText}</span>
										<ArrowIcon />
									</Link>
								)}
								{secondaryCtaText && secondaryCtaLink && (
									<Link
										to={secondaryCtaLink}
										className='border-2 border-white bg-transparent hover:bg-white/20 transition-colors rounded-full px-6 py-2.5 flex items-center gap-3 group w-fit'
									>
										<span className='font-gilroy font-medium text-[14px] text-white uppercase'>{secondaryCtaText}</span>
									</Link>
								)}
							</div>
						) : null}
					</div>
				</div>

				{/* Right Column: Image - Following design system hero image standards */}
				{imageUrl && (
					<div className='absolute top-[50%] right-0 lg:right-[8vw] transform -translate-y-1/2 hidden lg:block'>
						<img
							className='w-[85%] lg:w-[500px] lg:h-[420px] overflow-hidden rounded-[30px] lg:mr-36'
							src={imageUrl}
							alt='Hero image'
							fetchPriority='high'
							decoding='async'
							width='500'
							height='420'
						/>
					</div>
				)}
			</div>

			{/* Green Background Section */}
			<div className='absolute top-[55%] left-0 w-full h-[70vh] bg-[#006F33]'></div>

			{/* Decorative SVG bottom-right */}
			<img
				alt='decorative green waves'
				src='/shape14-2.svg'
				className='pointer-events-none absolute right-[-420px] bottom-[-220px] w-[1100px] opacity-95 lg:right-[-620px] lg:bottom-[-520px] lg:w-[1800px] mix-blend-screen z-0'
				fetchPriority='high'
				decoding='async'
				width='1800'
				height='800'
			/>
		</section>
	);
};
