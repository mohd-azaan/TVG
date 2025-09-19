// C:\Users\Syeds\Desktop\TVG\src\components\global\Navbar.jsx
// Main navigation header component for TVG website
// Fully responsive navigation with mobile hamburger menu and adaptive sizing
// RELEVANT FILES: HomepageDesktop.jsx, AboutPage.jsx, App.jsx, tailwind.config.js

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Asset constants for logos and icons
const imgIcon = '/chevron-down.svg';
const tvgLogo = '/tvg-logo-green.svg';

function TopNavItem({ children, to = '#', status = 'Default' }) {
	const location = useLocation();
	const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
	
	return (
		<Link
			to={to}
			className='content-stretch flex flex-col gap-2.5 items-center justify-center relative size-full group cursor-pointer'
		>
			<div className={`flex flex-col font-['Gilroy-Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-nowrap tracking-[0.4px] transition-colors duration-200 ${
				isActive 
					? 'text-[#009444]' 
					: 'text-white group-hover:text-[#009444]'
			}`}>
				<p className='leading-[52px] whitespace-pre'>{children}</p>
			</div>
			<div
				className={`absolute h-0.5 top-[61px] translate-x-[-50%] w-[30px] transition-colors duration-200 ${
					isActive 
						? 'bg-[#009444]' 
						: 'bg-transparent group-hover:bg-[#009444]'
				}`}
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

// Hamburger menu icon component
function HamburgerIcon({ isOpen, onClick }) {
	return (
		<button
			onClick={onClick}
			className='md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 p-1 rounded-md hover:bg-white/10 transition-colors duration-200'
			aria-label={isOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={isOpen}
		>
			<span
				className={`w-5 h-0.5 bg-white transition-all duration-300 ${
					isOpen ? 'rotate-45 translate-y-1.5' : ''
				}`}
			/>
			<span
				className={`w-5 h-0.5 bg-white transition-all duration-300 ${
					isOpen ? 'opacity-0' : ''
				}`}
			/>
			<span
				className={`w-5 h-0.5 bg-white transition-all duration-300 ${
					isOpen ? '-rotate-45 -translate-y-1.5' : ''
				}`}
			/>
		</button>
	);
}

export const Navbar = () => {
	const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);
	const mobileMenuRef = useRef(null);
	const moreDropdownRef = useRef(null);

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
		{ label: 'OWN THE BUSINESS', hasDropdown: false, to: '/partnership' },
	];

	const handleMouseEnter = () => setIsLearnDropdownOpen(true);
	const handleMouseLeave = () => setIsLearnDropdownOpen(false);

	const handleMoreMouseEnter = () => setIsMoreDropdownOpen(true);
	const handleMoreMouseLeave = () => setIsMoreDropdownOpen(false);

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			setIsLearnDropdownOpen(!isLearnDropdownOpen);
		} else if (event.key === 'Escape') {
			setIsLearnDropdownOpen(false);
		}
	};

	// Mobile menu handlers
	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
				closeMobileMenu();
			}
		};

		if (isMobileMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMobileMenuOpen]);

	return (
		<div className='backdrop-blur-[10px] backdrop-filter bg-[#102121]/95 relative rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] w-full h-[60px] sm:h-[70px] lg:h-[80px] max-w-[1700px] mx-auto mt-2 sm:mt-4 lg:mt-5 shadow-lg border border-white/10 px-4 sm:px-6 lg:px-8 z-10'>
			{/* TVG Logo */}
			<div className='absolute h-[36px] sm:h-[44px] left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-[80px] sm:w-[100px] lg:w-[120px] flex items-center'>
				<Link to='/' aria-label='Home' className='flex items-center'>
					<img
						alt='The Virtual Greens logo'
						className='block max-w-none w-[70px] sm:w-[90px] lg:w-[110px] max-h-[30px] sm:max-h-[34px] lg:max-h-[38px] object-contain'
						src={tvgLogo}
					/>
				</Link>
			</div>

			{/* Mobile Hamburger Menu Button */}
			<div className='absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 lg:hidden'>
				<HamburgerIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
			</div>

			{/* Tablet Hybrid Navigation (md screens) */}
			<div className='hidden md:flex lg:hidden absolute items-center justify-end right-4 sm:right-6 lg:right-8 top-0 h-[60px] sm:h-[70px] lg:h-[80px] left-[160px] sm:left-[200px]'>
				<div className='flex gap-2 items-center justify-end'>
					{/* Priority items for tablet */}
					{menuItems.slice(0, 4).map((item) => (
						<TopNavItem key={item.label} to={item.to}>
							{item.label}
						</TopNavItem>
					))}

					{/* More dropdown for remaining items */}
					<div
						className='h-[48px] relative shrink-0 group'
						ref={moreDropdownRef}
						onMouseEnter={handleMoreMouseEnter}
						onMouseLeave={handleMoreMouseLeave}
					>
						<button className="flex items-center gap-1 h-full px-2 font-['Gilroy-Bold',sans-serif] justify-center not-italic text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-nowrap text-white tracking-[0.4px] group-hover:text-[#009444] transition-colors duration-200">
							<span className='leading-[52px] whitespace-pre block'>MORE</span>
							<span className='inline-flex w-4 h-4 items-center justify-center'>
								<ChevronDown size='24' />
							</span>
						</button>

						{/* More dropdown content */}
						{isMoreDropdownOpen && (
							<div className='absolute left-1/2 -translate-x-1/2 top-[68px] w-[280px] z-20'>
								<div className='h-1 bg-[#009444] rounded-t-[20px] w-full' />
								<div className='bg-white rounded-b-[20px] shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-sm' style={{ marginTop: '-1px' }}>
									<div className="font-['Gilroy-Bold',sans-serif] leading-[0] not-italic overflow-clip relative text-[14px] font-bold text-black text-nowrap tracking-[0.2px] w-[280px] py-4 px-6">
										{menuItems.slice(4).map((item, index) => {
											const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to));
											return (
												<Link
													key={item.label}
													to={item.to}
													className={`absolute flex flex-col justify-center left-[24px] translate-y-[-50%] transition-colors duration-200 cursor-pointer py-3 text-left ${
														isActive 
															? 'text-[#009444]' 
															: 'hover:text-[#009444]'
													}`}
													style={{ top: `${35 + index * 40}px` }}
												>
													<p className='leading-[40px] text-nowrap whitespace-pre font-bold'>
														{item.label}
													</p>
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Book Now Button */}
					<Link to="/contact" className='bg-[#009444] h-8 sm:h-9 overflow-clip relative rounded-[50px] shrink-0 w-[100px] sm:w-[115px] hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer flex items-center justify-center'>
						<div className="absolute font-['Open_Sans',sans-serif] font-semibold leading-[0] left-1/2 not-italic text-[12px] sm:text-[14px] text-center text-nowrap text-white top-1/2 -translate-x-1/2 -translate-y-1/2">
							<p className='whitespace-pre'>BOOK NOW</p>
						</div>
					</Link>
				</div>
			</div>

			{/* Desktop Navigation Container (Large screens) */}
			<div className='hidden lg:flex absolute items-center justify-end right-4 sm:right-6 lg:right-8 top-0 h-[60px] sm:h-[70px] lg:h-[80px] left-[200px] lg:left-[240px] xl:left-[280px]'>
				<div className='flex gap-2 lg:gap-4 xl:gap-6 items-center justify-end'>
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
										className="flex items-center gap-1 h-full px-2 font-['Gilroy-Bold',sans-serif] justify-center not-italic text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-nowrap text-white tracking-[0.4px] group-hover:text-[#009444] transition-colors duration-200 z-10"
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
										<div className='absolute left-1/2 -translate-x-1/2 top-[68px] w-[280px] z-20'>
											{/* green top border to match design */}
											<div className='h-1 bg-[#009444] rounded-t-[20px] w-full' />
											<div
												className='bg-white rounded-b-[20px] shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-sm'
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
					<Link to="/contact" className='bg-[#009444] h-8 sm:h-9 lg:h-10 overflow-clip relative rounded-[50px] shrink-0 w-[110px] sm:w-[125px] lg:w-[137px] hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer flex items-center justify-center'>
						<div className="absolute font-['Open_Sans',sans-serif] font-semibold leading-[0] left-1/2 not-italic text-[14px] sm:text-[15px] lg:text-[16px] text-center text-nowrap text-white top-1/2 -translate-x-1/2 -translate-y-1/2">
							<p className='whitespace-pre'>BOOK NOW</p>
						</div>
					</Link>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div className='lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm' onClick={closeMobileMenu}>
					<div
						ref={mobileMenuRef}
						className='absolute top-0 right-0 h-full w-[280px] bg-[#102121]/98 backdrop-blur-[10px] shadow-2xl border-l border-white/10 transform transition-transform duration-300 ease-in-out z-60'
						onClick={(e) => e.stopPropagation()}
					>
						{/* Mobile Menu Header */}
						<div className='flex items-center justify-between p-6 border-b border-white/10'>
							<h2 className="font-['Gilroy-Bold',sans-serif] text-white text-lg font-bold">Menu</h2>
							<button
								onClick={closeMobileMenu}
								className='w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors duration-200'
								aria-label='Close menu'
							>
								<span className='text-white text-xl'>×</span>
							</button>
						</div>

						{/* Mobile Menu Items */}
						<div className='py-6 px-6 space-y-4'>
							{menuItems.map((item, index) => {
								const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to));
								return (
									<div key={item.label} className='space-y-2'>
										<Link
											to={item.to}
											onClick={closeMobileMenu}
											className={`block font-['Gilroy-Bold',sans-serif] text-[14px] font-bold tracking-[0.4px] py-3 px-4 rounded-lg transition-colors duration-200 ${
												isActive 
													? 'bg-[#009444]/20 text-[#009444]' 
													: 'text-white hover:bg-[#009444]/20 hover:text-[#009444]'
											}`}
										>
											{item.label}
										</Link>
										{item.hasDropdown && item.dropdownItems && (
											<div className='ml-4 space-y-1'>
												{item.dropdownItems.map((dropdownItem) => {
													const isDropdownActive = location.pathname === dropdownItem.to || (dropdownItem.to !== '/' && location.pathname.startsWith(dropdownItem.to));
													return (
														<Link
															key={dropdownItem.label}
															to={dropdownItem.to}
															onClick={closeMobileMenu}
															className={`block font-['Gilroy-Bold',sans-serif] text-[12px] font-medium py-2 px-4 rounded-md transition-colors duration-200 ${
																isDropdownActive 
																	? 'bg-[#009444]/10 text-[#009444]'
																	: 'text-white/80 hover:bg-[#009444]/10 hover:text-[#009444]'
															}`}
														>
															{dropdownItem.label}
														</Link>
													);
												})}
											</div>
										)}
									</div>
								);
							})}

							{/* Mobile Book Now Button */}
							<div className='pt-4 border-t border-white/10'>
								<Link to="/contact" onClick={closeMobileMenu} className='bg-[#009444] h-12 overflow-clip relative rounded-[50px] w-full hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer flex items-center justify-center'>
									<div className="absolute font-['Open_Sans',sans-serif] font-semibold leading-[0] left-1/2 not-italic text-[16px] text-center text-nowrap text-white top-1/2 -translate-x-1/2 -translate-y-1/2">
										<p className='whitespace-pre'>BOOK NOW</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
