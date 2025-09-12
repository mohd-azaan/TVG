// src/screens/HomepageDesktop/sections/HeaderSection/HeaderSection.jsx
// Header section component with navigation and branding
// Contains main site navigation, logo, and CTA button
// RELEVANT FILES: HomepageDesktop.jsx, HeroSection.jsx, FooterSection.jsx, navigation-menu.jsx

import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/button';

export const HeaderSection = () => {
	const [activeMenuItem, setActiveMenuItem] = useState(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [showLearnDropdown, setShowLearnDropdown] = useState(false);

	const menuItems = [
		{ label: 'ABOUT', hasDropdown: false },
		{ label: 'PLAY', hasDropdown: false },
		{
			label: 'LEARN',
			hasDropdown: true,
			dropdownItems: [
				'Coaching Levels',
				'Meet the Coach',
				'Corporate Programs',
			],
		},
		{ label: 'MEMBERSHIP', hasDropdown: false },
		{ label: 'LEAGUES', hasDropdown: false },
		{ label: 'EVENTS', hasDropdown: false },
		{ label: 'SIMULATOR', hasDropdown: false },
		{ label: 'OWN THE BUSINESS', hasDropdown: false },
	];

	return (
		<header className='w-full fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6'>
			<div className='w-full max-w-[1700px] mx-auto'>
				{/* Desktop Header */}
				<div className="w-[1700px] h-24 relative bg-gray-900 rounded-[50px] backdrop-blur-[10px] hidden lg:block">
					<div className="w-[1039px] h-24 left-[630px] top-0 absolute inline-flex justify-end items-center gap-7">
						{/* About */}
						<div 
							data-status="Default" 
							className="relative inline-flex flex-col justify-center items-center gap-2.5 cursor-pointer"
							onMouseEnter={() => setActiveMenuItem('ABOUT')}
							onMouseLeave={() => setActiveMenuItem(null)}
						>
							<div className="justify-center text-white text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-emerald-400 transition-colors duration-200">ABOUT</div>
							<div className={`w-7 h-0.5 left-[13px] top-[73px] absolute ${activeMenuItem === 'ABOUT' ? 'bg-emerald-400' : 'bg-emerald-400/0'} transition-all duration-200`} />
						</div>

						{/* Play */}
						<div 
							data-status="Default" 
							className="relative inline-flex flex-col justify-center items-center gap-2.5 cursor-pointer"
							onMouseEnter={() => setActiveMenuItem('PLAY')}
							onMouseLeave={() => setActiveMenuItem(null)}
						>
							<div className="justify-center text-white text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-emerald-400 transition-colors duration-200">PLAY</div>
							<div className={`w-7 h-0.5 left-[5px] top-[73px] absolute ${activeMenuItem === 'PLAY' ? 'bg-emerald-400' : 'bg-emerald-400/0'} transition-all duration-200`} />
						</div>

						{/* Learn with Dropdown */}
						<div 
							data-status="Default" 
							className="w-20 h-14 relative cursor-pointer"
							onMouseEnter={() => {
								setActiveMenuItem('LEARN');
								setShowLearnDropdown(true);
							}}
							onMouseLeave={() => {
								setActiveMenuItem(null);
								setShowLearnDropdown(false);
							}}
						>
							<div data-size="20" className="w-4 h-4 left-[58.67px] top-[20px] absolute overflow-hidden">
								<ChevronDownIcon className="w-2 h-1 left-[4.44px] top-[6.67px] absolute text-emerald-400" />
							</div>
							<div className="left-0 top-0 absolute justify-center text-white text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-emerald-400 transition-colors duration-200">LEARN</div>
							
							{/* Dropdown */}
							<div className={`w-72 h-36 left-0 top-[82px] absolute ${showLearnDropdown ? 'bg-gray-200' : 'bg-gray-200/0'} rounded-bl-[30px] rounded-br-[30px] border-t-[5px] ${showLearnDropdown ? 'border-green-600' : 'border-green-600/0'} overflow-hidden transition-all duration-300`}>
								<div className={`left-[38px] top-[80px] absolute justify-center ${showLearnDropdown ? 'text-black' : 'text-black/0'} text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-green-600 transition-all duration-200 cursor-pointer`}>Corporate Programs</div>
								<div className={`left-[38px] top-[42px] absolute justify-center ${showLearnDropdown ? 'text-black' : 'text-black/0'} text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-green-600 transition-all duration-200 cursor-pointer`}>Meet the Coach</div>
								<div className={`left-[38px] top-[4px] absolute justify-center ${showLearnDropdown ? 'text-black' : 'text-black/0'} text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-green-600 transition-all duration-200 cursor-pointer`}>Coaching Levels</div>
							</div>
						</div>

						{/* Membership */}
						<div 
							data-status="Default" 
							className="relative inline-flex flex-col justify-center items-center gap-2.5 cursor-pointer"
							onMouseEnter={() => setActiveMenuItem('MEMBERSHIP')}
							onMouseLeave={() => setActiveMenuItem(null)}
						>
							<div className="justify-center text-white text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-emerald-400 transition-colors duration-200">MEMBERSHIP</div>
							<div className={`w-7 h-0.5 left-[37px] top-[73px] absolute ${activeMenuItem === 'MEMBERSHIP' ? 'bg-emerald-400' : 'bg-emerald-400/0'} transition-all duration-200`} />
						</div>

						{/* Leagues */}
						<div 
							data-status="Default" 
							className="relative inline-flex flex-col justify-center items-center gap-2.5 cursor-pointer"
							onMouseEnter={() => setActiveMenuItem('LEAGUES')}
							onMouseLeave={() => setActiveMenuItem(null)}
						>
							<div className="justify-center text-white text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-emerald-400 transition-colors duration-200">LEAGUES</div>
							<div className={`w-7 h-0.5 left-[22px] top-[73px] absolute ${activeMenuItem === 'LEAGUES' ? 'bg-emerald-400' : 'bg-emerald-400/0'} transition-all duration-200`} />
						</div>

						{/* Events */}
						<div 
							data-status="Default" 
							className="relative inline-flex flex-col justify-center items-center gap-2.5 cursor-pointer"
							onMouseEnter={() => setActiveMenuItem('EVENTS')}
							onMouseLeave={() => setActiveMenuItem(null)}
						>
							<div className="justify-center text-white text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-emerald-400 transition-colors duration-200">EVENTS</div>
							<div className={`w-7 h-0.5 left-[15px] top-[73px] absolute ${activeMenuItem === 'EVENTS' ? 'bg-emerald-400' : 'bg-emerald-400/0'} transition-all duration-200`} />
						</div>

						{/* Simulator */}
						<div 
							data-status="Default" 
							className="relative inline-flex flex-col justify-center items-center gap-2.5 cursor-pointer"
							onMouseEnter={() => setActiveMenuItem('SIMULATOR')}
							onMouseLeave={() => setActiveMenuItem(null)}
						>
							<div className="justify-center text-white text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-emerald-400 transition-colors duration-200">SIMULATOR</div>
							<div className={`w-7 h-0.5 left-[31px] top-[73px] absolute ${activeMenuItem === 'SIMULATOR' ? 'bg-emerald-400' : 'bg-emerald-400/0'} transition-all duration-200`} />
						</div>

						{/* Own The Business */}
						<div 
							data-status="Default" 
							className="relative inline-flex flex-col justify-center items-center gap-2.5 cursor-pointer"
							onMouseEnter={() => setActiveMenuItem('OWN THE BUSINESS')}
							onMouseLeave={() => setActiveMenuItem(null)}
						>
							<div className="justify-center text-white text-base font-normal font-['Gilroy-Bold'] leading-[60px] tracking-wide hover:text-emerald-400 transition-colors duration-200">OWN THE BUSINESS</div>
							<div className={`w-7 h-0.5 left-[64px] top-[73px] absolute ${activeMenuItem === 'OWN THE BUSINESS' ? 'bg-emerald-400' : 'bg-emerald-400/0'} transition-all duration-200`} />
						</div>

						{/* Book Now Button */}
						<div className="w-36 h-10 relative bg-green-600 rounded-[50px] overflow-hidden cursor-pointer hover:bg-green-700 transition-colors duration-200">
							<div className="left-[23px] top-0 absolute text-center justify-start text-white text-base font-semibold font-['Open_Sans'] leading-10">BOOK NOW</div>
						</div>
					</div>

					{/* Logo */}
					<div className="w-36 h-14 left-[18px] top-[15px] absolute">
						<Link to='/'>
							<img
								className='w-full h-full'
								alt='The Virtual Greens Logo'
								src='/tvg-logo-green.svg'
							/>
						</Link>
					</div>
				</div>

				{/* Mobile/Tablet Responsive Header */}
				<div className='relative h-16 sm:h-18 lg:hidden bg-[#102121]/95 backdrop-blur-md rounded-[25px] sm:rounded-[35px] shadow-lg border border-white/10'>
					<div className='flex w-full h-full items-center justify-between px-4 sm:px-6'>
						{/* Logo */}
						<Link to='/' className='flex-shrink-0 z-10'>
							<img
								className='w-20 h-6 sm:w-28 sm:h-8'
								alt='The Virtual Greens Logo'
								src='/tvg-logo-green.svg'
							/>
						</Link>

						{/* Book Now Button */}
						<Button className='hidden sm:flex px-6 py-2 bg-[#009444] rounded-full hover:bg-[#007a3a] transition-colors duration-200 text-sm font-semibold text-white'>
							BOOK NOW
						</Button>

						{/* Mobile Menu Button */}
						<Button
							variant='ghost'
							size='sm'
							className='text-white p-2 hover:bg-white/10 rounded-full'
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? (
								<XIcon className='w-6 h-6' />
							) : (
								<MenuIcon className='w-6 h-6' />
							)}
						</Button>
					</div>

					{/* Mobile Menu */}
					{isMobileMenuOpen && (
						<div className='absolute top-full left-0 right-0 mt-2 bg-[#102121]/95 backdrop-blur-md rounded-[25px] p-6 shadow-xl mx-4 border border-white/10'>
							<div className='flex flex-col space-y-4'>
								{menuItems.map((item, index) => (
									<div key={index}>
										<button className='text-white text-sm font-bold tracking-wide text-left w-full py-3 hover:text-[#28f699] transition-colors duration-200'>
											{item.label}
										</button>
										{item.hasDropdown && item.dropdownItems && (
											<div className='ml-4 mt-2 space-y-2'>
												{item.dropdownItems.map(
													(dropdownItem, dropdownIndex) => (
														<button
															key={dropdownIndex}
															className='text-gray-300 text-sm text-left w-full py-2 hover:text-[#009444] transition-colors duration-200'
														>
															{dropdownItem}
														</button>
													)
												)}
											</div>
										)}
									</div>
								))}
								<Button className='w-full py-3 bg-[#009444] rounded-full hover:bg-[#007a3a] text-sm font-semibold mt-6 text-white'>
									BOOK NOW
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};
