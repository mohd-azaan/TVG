import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const FooterLink = ({ to, children }) => (
	<Link
		to={to}
		className='block text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200 font-gilroy text-[14px] py-1'
	>
		{children}
	</Link>
);

const SocialIcon = ({ href, alt, src }) => (
	<a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		className='opacity-80 hover:opacity-100 transition-opacity'
	>
		<img className='h-7' alt={alt} src={src} />
	</a>
);

export const FooterSection = () => {
	return (
		<footer className='w-full bg-[#102121] text-white pt-12 pb-0 lg:pt-16 lg:pb-0'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				<div className='grid grid-cols-1 md:grid-cols-12 gap-4 lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Column 1: Logo, Description & What's Happening */}
					<div className='md:col-span-6 space-y-4'>
						<img
							className='w-[100px] h-auto'
							alt='TVG Logo'
							src='/tvg-logo.svg'
						/>
						<p className='font-gilroy text-[14px] font-medium text-[#7f8c8c] leading-relaxed max-w-md'>
							The Virtual Greens is Riyadh’s first indoor golf simulator lounge,
							blending cutting-edge tech with a laid-back social vibe. Whether
							you're here to play, practice, or party, we make golf fun,
							accessible, and unforgettable.
						</p>
						<div className='space-y-3 pt-4'>
							<h3 className='font-gilroy font-bold text-[16px] sm:text-[12px] lg:text-[16px] leading-tight tracking-wide uppercase'>
								WHAT'S HAPPENING AT TVG
							</h3>
							<p className='font-gilroy text-[14px] font-medium text-[#7f8c8c] leading-relaxed'>
								Stay in the loop on tournaments, events, and deals
							</p>
							<a
								href='https://whatsapp.com/channel/0029VatRXC6IHphNepePyv20'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-center gap-2 px-4 py-2 bg-transparent hover:bg-white/10 rounded-full border-2 border-white text-white transition-colors duration-200 w-full max-w-xs'
							>
								<img
									className='w-6 h-6'
									alt='WhatsApp logo'
									src='/whatsapp-logo-variant-svgrepo-com-1.svg'
								/>
								<span className='font-semibold tracking-wide font-gilroy text-sm whitespace-nowrap'>
									Subscribe To WhatsApp Channel
								</span>
							</a>
						</div>
					</div>

					{/* Column 2: Company Links */}
					<div className='md:col-span-3 space-y-4'>
						<h3 className='font-gilroy font-bold text-[14px] sm:text-[12px] lg:text-[14px] leading-tight tracking-wide uppercase'>
							COMPANY
						</h3>
						<div className='space-y-2'>
							<FooterLink to='/about'>About us</FooterLink>
							<FooterLink to='/simulator'>Own/Rent simulators</FooterLink>
							<FooterLink to='/partnership'>Partner with us</FooterLink>
							<FooterLink to='/faq'>FAQs</FooterLink>
							<FooterLink to='/contact'>Contact us</FooterLink>
						</div>
					</div>

					{/* Column 3: Indoor Golf Links & Social */}
					<div className='md:col-span-3 space-y-4'>
						<h3 className='font-gilroy font-bold text-[14px] sm:text-[12px] lg:text-[14px] leading-tight tracking-wide uppercase'>
							INDOOR GOLF
						</h3>
						<div className='space-y-2'>
							<a
								href='https://widget.servmeco.com/?oid=1662'
								target='_blank'
								rel='noopener noreferrer'
								className='block text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200 font-gilroy text-[14px] py-1'
							>
								Plan your visit
							</a>
							<FooterLink to='/learn'>Lessons</FooterLink>
							<FooterLink to='/leagues'>Leagues</FooterLink>
							<FooterLink to='/membership'>Membership</FooterLink>
							<FooterLink to='/events'>Events</FooterLink>
						</div>
						<div className='flex items-center gap-5 pt-8 pl-6'>
							<SocialIcon
								href='https://instagram.com/thevirtualgreens'
								alt='Instagram'
								src='/images/Instagram.svg'
							/>
							<SocialIcon
								href='https://youtube.com/@thevirtualgreens'
								alt='YouTube'
								src='/images/Youtube.svg'
							/>
							<SocialIcon
								href='https://linkedin.com/company/thevirtualgreens'
								alt='LinkedIn'
								src='/images/Linkedin.svg'
							/>
							<SocialIcon
								href='https://tiktok.com/@thevirtualgreens'
								alt='Tiktok'
								src='/images/Tiktok.svg'
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Copyright Bar */}
			<div className='w-full bg-[#0c1a1a] mt-20'>
				<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 pb-4 lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					<p className='font-gilroy text-[14px] font-medium text-[#7f8c8c]'>
						2025 The Virtual Greens. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
