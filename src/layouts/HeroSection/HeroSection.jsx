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
		// Main container matching the exact layout from the image
		<div className='relative w-full h-[100vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper - Full height layout with navbar offset */}
			<div className='relative z-10 mx-auto flex max-w-[1440px] items-center px-8 lg:px-16 h-full pt-20 lg:pt-24'>
				{/* Left Column: Text content */}
				<div className='w-full lg:w-[50%] lg:pr-12'>
					<div className='flex flex-col'>
						{/* Main Title - stays in dark section */}
						{TitleComponent}

						{/* Subtitle - positioned to overlap green section */}
						{subtitle && (
							<p className='relative z-20 font-gilroy font-bold text-[15px] sm:text-[18px] lg:text-[20px] uppercase tracking-[1.10px] leading-[1.2] text-[#7ddb8a] mb-6 -translate-y-2 lg:-translate-y-4'>
								{subtitle}
							</p>
						)}

						{/* Description Text - in green section area */}
						{description && (
							<div className='relative z-20 font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[18px] lg:text-[22px] leading-7 text-white space-y-4 max-w-[600px] mb-6'>
								{description}
							</div>
						)}

						{/* CTA Buttons */}
						{(ctaText && ctaLink) || (secondaryCtaText && secondaryCtaLink) ? (
							<div className='relative z-20 flex flex-col sm:flex-row gap-4'>
								{ctaText && ctaLink && (
									<Link
										to={ctaLink}
										className='inline-flex w-fit items-center gap-3 rounded-full bg-[#009444] px-6 py-2 text-center text-[16px] lg:text-[18px] font-gilroy font-medium uppercase leading-[40px] tracking-wide text-white transition-colors duration-200 ease-out hover:bg-white/20 focus:outline-none'
									>
										<span>{ctaText}</span>
										<ArrowIcon />
									</Link>
								)}
								{secondaryCtaText && secondaryCtaLink && (
									<Link
										to={secondaryCtaLink}
										className='inline-flex w-fit items-center gap-3 rounded-full border-2 border-white bg-transparent px-6 py-2 text-center text-[16px] lg:text-[18px] font-gilroy font-medium uppercase leading-[40px] tracking-wide text-white transition-colors duration-200 ease-out hover:bg-white/20 focus:outline-none'
									>
										<span>{secondaryCtaText}</span>
									</Link>
								)}
							</div>
						) : null}
					</div>
				</div>

				{/* Right Column: Image */}
				{imageUrl && (
					<div className='hidden lg:flex lg:w-[50%] justify-center items-center'>
						<img
							className='w-[90%] max-w-[900px] h-auto max-h-[480px] rounded-[30px] object-contain'
							src={imageUrl}
							alt='Hero image'
						/>
					</div>
				)}
			</div>

			{/* Green Background Section - positioned to start around subtitle area */}
			<div className='absolute bottom-0 left-0 w-full h-[45%] bg-[#006F33] z-0'></div>

			{/* Decorative SVG bottom-right */}
			<img
				alt='decorative green waves'
				src='/shape14-2.svg'
				className='pointer-events-none absolute right-[-420px] bottom-[-220px] w-[1100px] opacity-95 lg:right-[-620px] lg:bottom-[-520px] lg:w-[1800px] mix-blend-screen z-0'
			/>
		</div>
	);
};
