import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

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

	const handleLearnClick = () => setIsLearnDropdownOpen((s) => !s);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsLearnDropdownOpen(false);
			}
		};

		if (isLearnDropdownOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isLearnDropdownOpen]);

	const handleKeyDown = (event, action) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			action();
		} else if (event.key === 'Escape') {
			setIsLearnDropdownOpen(false);
		}
	};

	const getUnderlinePosition = (index) => {
		const positions = [
			'left-[13px]', // ABOUT
			'left-[5px]', // PLAY
			'', // LEARN (handled separately)
			'left-[37px]', // MEMBERSHIP
			'left-[22px]', // LEAGUES
			'left-[15px]', // EVENTS
			'left-[31px]', // SIMULATOR
			'left-16', // OWN THE BUSINESS
		];
		return positions[index] || '';
	};

	return (
		<div className='w-full max-w-[1700px] mx-auto relative z-50'>
			<header className='relative w-full top-5 bg-[#102121] rounded-[50px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]'>
				<nav
					className='flex w-full h-[90px] items-center justify-between px-6 gap-[30px] relative'
					role='navigation'
					aria-label='Main navigation'
				>
					{/* Logo */}
					<div className='flex-shrink-0 flex items-center gap-2'>
						<img
							className='w-[77px] h-14'
							alt='Virtual Greens Golf logo text'
							src='/tvg-logo-green.svg'
						/>
					</div>

					{/* Menu Items and Book Now Button */}
					<div className='flex items-center gap-[30px]'>
						{menuItems.map((item, index) => {
							if (item.hasDropdown) {
								return (
									<div
										key={item.label}
										className='relative w-20 h-[60px]'
										ref={dropdownRef}
									>
										<button
											className='flex items-center justify-center gap-2 w-full h-full'
											onClick={handleLearnClick}
											onKeyDown={(e) => handleKeyDown(e, handleLearnClick)}
											aria-expanded={isLearnDropdownOpen}
											aria-haspopup='true'
											aria-label={`${item.label} menu`}
										>
											<span className='font-TVG-typography-TVG-typography-TVG-typography-top-menu-item font-[number:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-weight)] text-white text-[length:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-size)] tracking-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-letter-spacing)] leading-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-line-height)] whitespace-nowrap [font-style:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-style)]'>
												{item.label}
											</span>
											<img
												src='/chevron-down.svg'
												alt='dropdown'
												className='!w-[18px] !h-[18px] !aspect-[1] transition-transform duration-200'
												style={{
													transform: isLearnDropdownOpen
														? 'rotate(180deg)'
														: 'rotate(0deg)',
												}}
											/>
										</button>

										{isLearnDropdownOpen && (
											<div className='absolute w-[280px] top-full mt-2 left-0 bg-[#102121] rounded-[0px_0px_30px_30px] overflow-hidden border-t-[5px] [border-top-style:solid] border-transparent shadow-lg z-50'>
												<ul className='flex flex-col py-4 px-8' role='menu'>
													{item.dropdownItems.map(
														(dropdownItem, dropdownIndex) => (
															<li key={dropdownItem} role='none'>
																<a
																	href='#'
																	className='block py-3 font-TVG-typography-TVG-typography-TVG-typography-top-menu-item font-[number:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-weight)] text-white text-[length:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-size)] tracking-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-letter-spacing)] leading-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-line-height)] whitespace-nowrap [font-style:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-style)] hover:text-[#009444] transition-colors duration-200'
																	role='menuitem'
																	tabIndex='0'
																>
																	{dropdownItem}
																</a>
															</li>
														)
													)}
												</ul>
											</div>
										)}
									</div>
								);
							}

							return (
								<div
									key={item.label}
									className='inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]'
								>
									{item.label === 'ABOUT' ? (
										<Link
											to='/about'
											className='relative w-fit mt-[-1.00px] font-TVG-typography-TVG-typography-TVG-typography-top-menu-item font-[number:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-weight)] text-white text-[length:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-size)] tracking-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-letter-spacing)] leading-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-line-height)] whitespace-nowrap [font-style:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-style)] hover:text-[#009444] transition-colors duration-200'
											role='menuitem'
											tabIndex='0'
										>
											{item.label}
										</Link>
									) : (
										<a
											href='#'
											className='relative w-fit mt-[-1.00px] font-TVG-typography-TVG-typography-TVG-typography-top-menu-item font-[number:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-weight)] text-white text-[length:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-size)] tracking-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-letter-spacing)] leading-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-line-height)] whitespace-nowrap [font-style:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-style)] hover:text-[#009444] transition-colors duration-200'
											role='menuitem'
											tabIndex='0'
										>
											{item.label}
										</a>
									)}
									<div
										className={`absolute w-[30px] h-0.5 top-[73px] ${getUnderlinePosition(
											index
										)}`}
									/>
								</div>
							);
						})}

						<a
							href='#'
							className='relative w-[137px] h-10 bg-[#009444] rounded-[50px] overflow-hidden flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#009444] focus:ring-offset-2 focus:ring-offset-[#102121]'
							role='button'
							tabIndex='0'
						>
							<span className="[font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-10 whitespace-nowrap">
								BOOK NOW
							</span>
						</a>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
