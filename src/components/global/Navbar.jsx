// C:\Users\Syeds\Desktop\TVG\src\components\global\Navbar.jsx
// Main navigation header component for TVG website
// Top-level navigation with dropdown functionality and CTA button
// RELEVANT FILES: HomepageDesktop.jsx, AboutPage.jsx, App.jsx, tailwind.config.js

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Asset constants for logos and icons
const imgIcon = '/chevron-down.svg';
const tvgLogo = '/tvg-logo-green.svg';

function TopNavItem({ children, to = '#', status = 'Default' }) {
	return (
		<Link
			to={to}
			className='content-stretch flex flex-col gap-2.5 items-center justify-center relative size-full group cursor-pointer'
		>
			<div className="flex flex-col font-['Gilroy-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] font-bold text-nowrap text-white tracking-[0.4px] group-hover:text-[#009444] transition-colors duration-200">
				<p className='leading-[52px] whitespace-pre'>{children}</p>
			</div>
			<div
				className='absolute bg-transparent group-hover:bg-[#009444] h-0.5 top-[61px] translate-x-[-50%] w-[30px] transition-colors duration-200'
				style={{ left: 'calc(50% + 0.5px)' }}
			/>
		</Link>
	);
}

function ChevronDown({ size = '48' }) {
	// Render a compact chevron that visually matches the nav text height
	if (size === '24') {
		return (
			<div
				className='inline-flex items-center justify-center'
				style={{ width: 16, height: 16 }}
			>
				<img alt='' src={imgIcon} className='w-4 h-4 block' />
			</div>
		);
	}

	return null;
}

export const Navbar = () => {
	const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const menuItems = [
		{ label: 'ABOUT', hasDropdown: false, to: '/about' },
		{ label: 'PLAY', hasDropdown: false, to: '/play' },
		{
			label: 'LEARN',
			hasDropdown: true,
			to: '/learn',
			dropdownItems: [
				{ label: 'Coaching Levels', to: '/coaching-levels' },
				{ label: 'Meet the Coach', to: '/meet-coach' },
				{ label: 'Corporate Programs', to: '/corporate-programs' },
			],
		},
		{ label: 'MEMBERSHIP', hasDropdown: false, to: '/membership' },
		{ label: 'LEAGUES', hasDropdown: false, to: '/leagues' },
		{ label: 'EVENTS', hasDropdown: false, to: '/events' },
		{ label: 'SIMULATOR', hasDropdown: false, to: '/simulator' },
		{ label: 'OWN THE BUSINESS', hasDropdown: false, to: '/own-business' },
	];

	const handleMouseEnter = () => setIsLearnDropdownOpen(true);
	const handleMouseLeave = () => setIsLearnDropdownOpen(false);

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			setIsLearnDropdownOpen(!isLearnDropdownOpen);
		} else if (event.key === 'Escape') {
			setIsLearnDropdownOpen(false);
		}
	};

	return (
		<div className='backdrop-blur-[10px] backdrop-filter bg-[#102121]/95 relative rounded-[40px] w-full h-[70px] max-w-[1700px] mx-auto mt-5 shadow-lg border border-white/10'>
			{/* TVG Logo */}
			<div className='absolute h-[44px] left-[18px] top-1/2 -translate-y-1/2 w-[120px] flex items-center'>
				<Link to='/' aria-label='Home' className='flex items-center'>
					<img
						alt='The Virtual Greens logo'
						className='block max-w-none w-[110px] max-h-[38px] object-contain'
						src={tvgLogo}
					/>
				</Link>
			</div>

			{/* Navigation Container */}
			<div className='absolute flex items-center justify-end right-[20px] top-0 h-[70px] left-[300px]'>
				<div className='flex gap-8 items-center justify-end'>
					{menuItems.map((item, index) => {
						if (item.hasDropdown) {
							return (
								<div
									key={item.label}
									className='h-[48px] relative shrink-0 group'
									ref={dropdownRef}
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
								>
									<Link
										to={item.to}
										className="flex items-center gap-1 h-full px-2 font-['Gilroy-Bold',sans-serif] justify-center not-italic text-[12px] font-bold text-nowrap text-white tracking-[0.4px] group-hover:text-[#009444] transition-colors duration-200 z-10"
										onKeyDown={handleKeyDown}
										aria-expanded={isLearnDropdownOpen}
										aria-haspopup='true'
										aria-label={`${item.label} menu`}
									>
										<span className='leading-[52px] whitespace-pre block'>
											{item.label}
										</span>
										<span className='inline-flex w-4 h-4 items-center justify-center'>
											<ChevronDown size='24' />
										</span>
									</Link>
									{/* underline centered under this menu item */}
									{!isLearnDropdownOpen && (
										<div
											className='absolute bg-transparent group-hover:bg-[#009444] h-0.5 top-[61px] translate-x-[-50%] w-[30px] transition-colors duration-200'
											style={{ left: '50%' }}
										/>
									)}
									{isLearnDropdownOpen && (
										<div className='absolute left-1/2 -translate-x-1/2 top-[68px] w-[280px] z-50'>
											{/* green top border to match design */}
											<div className='h-1 bg-[#009444] rounded-t-[20px] w-full' />
											<div
												className='bg-white rounded-b-[20px] shadow-xl border border-gray-100 overflow-hidden'
												style={{ marginTop: '-1px' }}
											>
												<div className="font-['Gilroy-Bold',sans-serif] h-[160px] leading-[0] not-italic overflow-clip relative text-[14px] font-bold text-black text-nowrap tracking-[0.2px] w-[280px] py-4 px-6">
													{item.dropdownItems.map(
														(dropdownItem, dropdownIndex) => (
															<Link
																key={dropdownItem.label}
																to={dropdownItem.to}
																className='absolute flex flex-col justify-center left-[24px] translate-y-[-50%] hover:text-[#009444] transition-colors duration-200 cursor-pointer py-3 text-left'
																style={{ top: `${35 + dropdownIndex * 40}px` }}
															>
																<p className='leading-[40px] text-nowrap whitespace-pre font-bold'>
																	{dropdownItem.label}
																</p>
															</Link>
														)
													)}
												</div>
											</div>
										</div>
									)}
								</div>
							);
						}

						return (
							<TopNavItem key={item.label} to={item.to}>
								{item.label}
							</TopNavItem>
						);
					})}

					{/* Book Now Button */}
					<div className='bg-[#009444] h-10 overflow-clip relative rounded-[50px] shrink-0 w-[137px] hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer'>
						<div className="absolute font-['Open_Sans',sans-serif] font-semibold leading-[0] left-[68.5px] not-italic text-[16px] text-center text-nowrap text-white top-0 translate-x-[-50%]">
							<p className='leading-[40px] whitespace-pre'>BOOK NOW</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
