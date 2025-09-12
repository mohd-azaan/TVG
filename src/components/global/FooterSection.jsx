import React from 'react';
import { Button } from '../../components/ui/button';

export const FooterSection = () => {
	const indoorGolfLinks = [
		'Plan your visit',
		'Lessons',
		'Leagues',
		'Membership',
		'Events',
	];

	const companyLinks = [
		'About us',
		'Own/Rent simulators',
		'Partner with us',
		'Terms & Conditions',
		'Contact us',
	];

	return (
		<footer className='w-full bg-[#102121] relative'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 sm:py-20 lg:py-24'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16'>
					{/* Company Info */}
					<div className='lg:col-span-1 space-y-6 sm:space-y-8'>
						<img
							className='w-32 sm:w-36 lg:w-[151px] h-auto'
							alt='TVG Logo'
							src='/tvg-logo.svg'
						/>

						<p className='text-base sm:text-lg font-medium text-[#7f8c8c] leading-relaxed max-w-lg'>
							The Virtual Greens is Riyadh&apos;s first indoor golf simulator
							lounge, blending cutting-edge tech with a laid-back social vibe.
							Whether you&#39;re here to play, practice, or party, we make golf
							fun, accessible, and unforgettable.
						</p>

						<div className='space-y-4 sm:space-y-6'>
							<h3 className='text-lg sm:text-xl font-bold text-white tracking-wide'>
								WHAT&apos;S HAPPENING AT TVG
							</h3>

							<p className='text-base sm:text-lg font-medium text-[#7f8c8c] leading-relaxed'>
								Stay in the loop on tournaments, events, and deals
							</p>

							<Button className='flex items-center justify-center gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-white/10 rounded-full border-2 border-white text-white transition-colors duration-200'>
								<img
									className='w-6 sm:w-8 h-6 sm:h-8'
									alt='WhatsApp logo'
									src='/whatsapp-logo-variant-svgrepo-com-1.svg'
								/>
								<span className='text-sm sm:text-base font-semibold tracking-wide'>
									Subscribe To WhatsApp Channel
								</span>
							</Button>
						</div>
					</div>

					{/* Navigation Links */}
					<div className='lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12'>
						{/* Indoor Golf Links */}
						<div className='space-y-6'>
							<h3 className='text-lg sm:text-xl font-bold text-white tracking-wide'>
								INDOOR GOLF
							</h3>

							<div className='space-y-4'>
								{indoorGolfLinks.map((link, index) => (
									<div key={`indoor-golf-${index}`}>
										<a
											href='#'
											className='text-base sm:text-lg font-medium text-[#7f8c8c] hover:text-white transition-colors duration-200 leading-relaxed'
										>
											{link}
										</a>
									</div>
								))}
							</div>
						</div>

						{/* Company Links */}
						<div className='space-y-6'>
							<h3 className='text-lg sm:text-xl font-bold text-white tracking-wide'>
								COMPANY
							</h3>

							<div className='space-y-4'>
								{companyLinks.map((link, index) => (
									<div key={`company-${index}`}>
										<a
											href='#'
											className='text-base sm:text-lg font-medium text-[#7f8c8c] hover:text-white transition-colors duration-200 leading-relaxed'
										>
											{link}
										</a>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Social Icons */}
				<div className='flex justify-center lg:justify-end mt-12 sm:mt-16'>
					<img
						className='w-48 sm:w-56 lg:w-[190px] h-auto'
						alt='Social icons'
						src='/social-icons.svg'
					/>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='w-full h-16 sm:h-20 bg-[#0c1a1a] border-t border-white/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center justify-center'>
					<div className='text-sm sm:text-base font-medium text-[#7f8c8c] text-center'>
						2025 The Virtual Greens. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};
