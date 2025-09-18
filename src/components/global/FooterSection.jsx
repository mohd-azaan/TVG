import React from 'react';
import { Button } from '../ui/button';

export const FooterSection = () => {

	return (
		<footer className='w-full bg-[#102121] relative'>
			{/* Main footer content - positioned exactly like Figma */}
			<div className='relative w-full h-[612px]'>
				{/* Logo positioned at top left */}
				<img
					className='absolute top-[104px] left-[256px] w-[129px] h-[51px]'
					alt='TVG Logo'
					src='/tvg-logo.svg'
				/>

				{/* Company description */}
				<p 
					className='absolute top-[165px] left-[278px] w-[539px] text-[#7f8c8c]'
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

				{/* "What's Happening at TVG" section */}
				<h3 
					className='absolute top-[317px] left-[280px] text-white font-bold'
					style={{
						fontFamily: 'var(--TVG-typography-footer-title-font-family)',
						fontSize: 'var(--TVG-typography-footer-title-font-size)',
						fontWeight: 'bold',
						letterSpacing: 'var(--TVG-typography-footer-title-letter-spacing)',
						lineHeight: 'var(--TVG-typography-footer-title-line-height)'
					}}
				>
					WHAT&apos;S HAPPENING AT TVG
				</h3>

				<p 
					className='absolute top-[350px] left-[278px] w-[539px] text-[#7f8c8c]'
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

				{/* WhatsApp button */}
				<div className='absolute top-[404px] left-[278px] w-[394px]'>
					<Button className='flex items-center justify-center gap-4 px-8 py-8 bg-transparent hover:bg-white/10 rounded-full border-2 border-white text-white transition-colors duration-200 w-full'>
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

				{/* COMPANY Column - positioned as first column */}
				<div className='absolute top-[118px] left-[963px] w-[325px] h-[390px]'>
					<h3 
						className='absolute top-0 left-0 text-white font-bold'
						style={{
							fontFamily: 'var(--TVG-typography-footer-title-font-family)',
							fontSize: 'var(--TVG-typography-footer-title-font-size)',
							fontWeight: 'bold',
							letterSpacing: 'var(--TVG-typography-footer-title-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-title-line-height)'
						}}
					>
						COMPANY
					</h3>

					{/* Company Links - positioned exactly like Figma */}
					<a
						href='#'
						className='absolute top-[40px] left-0 text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200'
						style={{
							fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
							fontSize: 'var(--TVG-typography-footer-menu-font-size)',
							fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
						}}
					>
						About us
					</a>
					<a
						href='#'
						className='absolute top-[80px] left-0 text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200'
						style={{
							fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
							fontSize: 'var(--TVG-typography-footer-menu-font-size)',
							fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
						}}
					>
						Own/Rent simulators
					</a>
					<a
						href='#'
						className='absolute top-[120px] left-0 text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200'
						style={{
							fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
							fontSize: 'var(--TVG-typography-footer-menu-font-size)',
							fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
						}}
					>
						Partner with us
					</a>
					<a
						href='#'
						className='absolute top-[160px] left-0 text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200'
						style={{
							fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
							fontSize: 'var(--TVG-typography-footer-menu-font-size)',
							fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
						}}
					>
						Terms & Conditions
					</a>
					<a
						href='#'
						className='absolute top-[200px] left-0 text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200'
						style={{
							fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
							fontSize: 'var(--TVG-typography-footer-menu-font-size)',
							fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
						}}
					>
						Contact us
					</a>
				</div>

				{/* INDOOR GOLF Column - positioned as second column */}
				<div className='absolute top-[118px] left-[1318px] w-[325px] h-[390px]'>
					<h3 
						className='absolute top-0 left-0 text-white font-bold'
						style={{
							fontFamily: 'var(--TVG-typography-footer-title-font-family)',
							fontSize: 'var(--TVG-typography-footer-title-font-size)',
							fontWeight: 'bold',
							letterSpacing: 'var(--TVG-typography-footer-title-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-title-line-height)'
						}}
					>
						INDOOR GOLF
					</h3>

					{/* Indoor Golf Links - positioned exactly like Figma */}
					<a
						href='#'
						className='absolute top-[40px] left-0 text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200'
						style={{
							fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
							fontSize: 'var(--TVG-typography-footer-menu-font-size)',
							fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
						}}
					>
						Plan your visit
					</a>
					<a
						href='#'
						className='absolute top-[80px] left-0 text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200'
						style={{
							fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
							fontSize: 'var(--TVG-typography-footer-menu-font-size)',
							fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
						}}
					>
						Lessons
					</a>
					<a
						href='#'
						className='absolute top-[120px] left-0 text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200'
						style={{
							fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
							fontSize: 'var(--TVG-typography-footer-menu-font-size)',
							fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
						}}
					>
						Leagues
					</a>
					<a
						href='#'
						className='absolute top-[160px] left-0 text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200'
						style={{
							fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
							fontSize: 'var(--TVG-typography-footer-menu-font-size)',
							fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
						}}
					>
						Membership
					</a>
					<a
						href='#'
						className='absolute top-[200px] left-0 text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200'
						style={{
							fontFamily: 'var(--TVG-typography-footer-menu-font-family)',
							fontSize: 'var(--TVG-typography-footer-menu-font-size)',
							fontWeight: 'var(--TVG-typography-footer-menu-font-weight)',
							letterSpacing: 'var(--TVG-typography-footer-menu-letter-spacing)',
							lineHeight: 'var(--TVG-typography-footer-menu-line-height)'
						}}
					>
						Events
					</a>
				</div>

				{/* Social Icons - positioned exactly like Figma */}
				<img
					className='absolute top-[422px] left-[1450px] w-[190px] h-[40px]'
					alt='Social icons'
					src='/social-icons.svg'
				/>
			</div>

			{/* Bottom Copyright Bar - positioned exactly like Figma */}
			<div className='absolute bottom-0 left-0 w-full h-[60px] bg-[#0c1a1a]'>
				<p 
					className='absolute top-[16px] left-[280px] text-[#7f8c8c] whitespace-nowrap'
					style={{
						fontFamily: 'var(--TVG-typography-footer-default-font-family)',
						fontSize: 'var(--TVG-typography-footer-default-font-size)',
						lineHeight: 'var(--TVG-typography-footer-default-line-height)',
						fontWeight: 'var(--TVG-typography-footer-default-font-weight)',
						letterSpacing: 'var(--TVG-typography-footer-default-letter-spacing)'
					}}
				>
					2025 The Virtual Greens. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
