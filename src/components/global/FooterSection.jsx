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
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-10'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20'>
					{/* Company Info */}
					<div className='lg:col-span-1 space-y-6'>
						<img
							className='w-[151px] h-auto'
							alt='TVG Logo'
							src='/tvg-logo.svg'
						/>

						<p className='font-TVG-typography-footer-default text-[#7f8c8c] leading-[var(--TVG-typography-footer-default-line-height)] max-w-[400px]'>
							The Virtual Greens is Riyadh&apos;s first indoor golf simulator
							lounge, blending cutting-edge tech with a laid-back social vibe.
							Whether you&#39;re here to play, practice, or party, we make golf
							fun, accessible, and unforgettable.
						</p>

						<div className='space-y-4'>
							<h3
								className='text-lg text-white tracking-wide font-bold'
								style={{ fontFamily: 'Gilroy-Medium, Helvetica' }}
							>
								WHAT&apos;S HAPPENING AT TVG
							</h3>

							<p className='font-TVG-typography-footer-default text-[#7f8c8c] leading-[var(--TVG-typography-footer-default-line-height)]'>
								Stay in the loop on tournaments, events, and deals
							</p>

							<Button className='flex items-center justify-center gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-white/10 rounded-full border-2 border-white text-white transition-colors duration-200'>
								<img
									className='w-6 sm:w-8 h-6 sm:h-8'
									alt='WhatsApp logo'
									src='/whatsapp-logo-variant-svgrepo-com-1.svg'
								/>
								<span className='font-TVG-typography-button text-[length:var(--TVG-typography-button-font-size)] font-[number:var(--TVG-typography-button-font-weight)] tracking-[var(--TVG-typography-button-letter-spacing)]'>
									Subscribe To WhatsApp Channel
								</span>
							</Button>
						</div>
					</div>

					{/* Navigation Links */}
					<div className='lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-20'>
						{/* Company Links */}
						<div className='space-y-6'>
							<h3
								className='text-lg text-white tracking-wide font-bold'
								style={{ fontFamily: 'Gilroy-Medium, Helvetica' }}
							>
								COMPANY
							</h3>

							<div className='space-y-[8px]'>
								{companyLinks.map((link, index) => (
									<div key={`company-${index}`}>
										<a
											href='#'
											className='font-TVG-typography-footer-menu text-[length:var(--TVG-typography-footer-menu-font-size)] text-[#7f8c8c] hover:text-white transition-colors duration-200 leading-[var(--TVG-typography-footer-menu-line-height)] block'
										>
											{link}
										</a>
									</div>
								))}
							</div>
						</div>

						{/* Indoor Golf Links */}
						<div className='space-y-6'>
							<h3
								className='text-lg text-white tracking-wide font-bold'
								style={{ fontFamily: 'Gilroy-Medium, Helvetica' }}
							>
								INDOOR GOLF
							</h3>

							<div className='space-y-[8px]'>
								{indoorGolfLinks.map((link, index) => (
									<div key={`indoor-golf-${index}`}>
										<a
											href='#'
											className='font-TVG-typography-footer-menu text-[length:var(--TVG-typography-footer-menu-font-size)] text-[#7f8c8c] hover:text-white transition-colors duration-200 leading-[var(--TVG-typography-footer-menu-line-height)] block'
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
				<div className='flex justify-center lg:justify-end mt-8'>
					<img
						className='w-[190px] h-auto'
						alt='Social icons'
						src='/social-icons.svg'
					/>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='w-full h-14 bg-[#0c1a1a] border-t border-white/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center justify-start'>
					<div className='font-TVG-typography-footer-default text-[length:var(--TVG-typography-footer-default-font-size)] text-[#7f8c8c]'>
						2025 The Virtual Greens. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};
