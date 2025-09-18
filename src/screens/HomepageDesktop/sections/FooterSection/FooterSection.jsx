import React from 'react';
import { Button } from '../../../../components/ui/button';

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
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 lg:py-24'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20'>
					{/* Company Info */}
					<div className='lg:col-span-1 space-y-8'>
						<img
							className='w-[151px] h-auto'
							alt='TVG Logo'
							src='/tvg-logo.svg'
						/>

						<p 
							className='max-w-[400px] text-[#7f8c8c]'
							style={{
								fontFamily: 'var(--TVG-typography-footer-default-font-family)',
								fontSize: 'var(--TVG-typography-footer-default-font-size)',
								lineHeight: 'var(--TVG-typography-footer-default-line-height)',
								fontWeight: 'var(--TVG-typography-footer-default-font-weight)',
								letterSpacing: 'var(--TVG-typography-footer-default-letter-spacing)'
							}}
						>
							The Virtual Greens is Riyadh&apos;s first indoor golf simulator
							lounge, blending cutting-edge tech with a laid-back social vibe.
							Whether you&#39;re here to play, practice, or party, we make golf
							fun, accessible, and unforgettable.
						</p>

						<div className='space-y-6'>
							<h3 
								className='text-[#7DDB8A]'
								style={{
									fontFamily: 'var(--TVG-typography-footer-title-font-family)',
									fontSize: 'var(--TVG-typography-footer-title-font-size)',
									fontWeight: 'var(--TVG-typography-footer-title-font-weight)',
									letterSpacing: 'var(--TVG-typography-footer-title-letter-spacing)',
									lineHeight: 'var(--TVG-typography-footer-title-line-height)'
								}}
							>
								WHAT&apos;S HAPPENING AT TVG
							</h3>

							<p 
								className='text-[#7f8c8c]'
								style={{
									fontFamily: 'var(--TVG-typography-footer-default-font-family)',
									fontSize: 'var(--TVG-typography-footer-default-font-size)',
									lineHeight: 'var(--TVG-typography-footer-default-line-height)',
									fontWeight: 'var(--TVG-typography-footer-default-font-weight)',
									letterSpacing: 'var(--TVG-typography-footer-default-letter-spacing)'
								}}
							>
								Stay in the loop on tournaments, events, and deals
							</p>

							<Button className='flex items-center justify-center gap-4 px-8 py-4 bg-transparent hover:bg-white/10 rounded-full border-2 border-white text-white transition-colors duration-200'>
								<img
									className='w-8 h-8'
									alt='WhatsApp logo'
									src='/whatsapp-logo-variant-svgrepo-com-1.svg'
								/>
								<span 
									className='font-semibold tracking-wide'
									style={{
										fontFamily: 'var(--TVG-typography-footer-default-font-family)',
										fontSize: 'var(--TVG-typography-footer-default-font-size)'
									}}
								>
									Subscribe To WhatsApp Channel
								</span>
							</Button>
						</div>
					</div>

					{/* Navigation Links */}
					<div className='lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16'>
						{/* Indoor Golf Links */}
						<div className='space-y-6'>
							<h3 
								className='text-[#7DDB8A]'
								style={{
									fontFamily: 'var(--TVG-typography-footer-title-font-family)',
									fontSize: 'var(--TVG-typography-footer-title-font-size)',
									fontWeight: 'var(--TVG-typography-footer-title-font-weight)',
									letterSpacing: 'var(--TVG-typography-footer-title-letter-spacing)',
									lineHeight: 'var(--TVG-typography-footer-title-line-height)'
								}}
							>
								INDOOR GOLF
							</h3>

							<div className='space-y-2'>
								{indoorGolfLinks.map((link, index) => (
									<div key={`indoor-golf-${index}`}>
										<a
											href='#'
											className='text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200 block'
											style={{
												fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
												fontSize: 'var(--TVG-typography-footer-menu-font-size)',
												fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
												letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
												lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
											}}
										>
											{link}
										</a>
									</div>
								))}
							</div>
						</div>

						{/* Company Links */}
						<div className='space-y-6'>
							<h3 
								className='text-[#7DDB8A]'
								style={{
									fontFamily: 'var(--TVG-typography-footer-title-font-family)',
									fontSize: 'var(--TVG-typography-footer-title-font-size)',
									fontWeight: 'var(--TVG-typography-footer-title-font-weight)',
									letterSpacing: 'var(--TVG-typography-footer-title-letter-spacing)',
									lineHeight: 'var(--TVG-typography-footer-title-line-height)'
								}}
							>
								COMPANY
							</h3>

							<div className='space-y-2'>
								{companyLinks.map((link, index) => (
									<div key={`company-${index}`}>
										<a
											href='#'
											className='text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200 block'
											style={{
												fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
												fontSize: 'var(--TVG-typography-footer-menu-font-size)',
												fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
												letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
												lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
											}}
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
				<div className='flex justify-end mt-16'>
					<img
						className='w-[190px] h-auto'
						alt='Social icons'
						src='/social-icons.svg'
					/>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='w-full h-20 bg-[#0c1a1a] border-t border-[#AFACAD]/20'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center justify-center'>
					<div 
						className='text-[#AFACAD] text-center'
						style={{
							fontFamily: 'var(--TVG-typography-footer-default-font-family)',
							fontSize: '14px',
							fontWeight: 'var(--TVG-typography-footer-default-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-default-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-default-line-height)'
						}}
					>
						2025 The Virtual Greens. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};
