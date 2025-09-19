import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Animated hamburger icon component
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

export const MobileHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const menuItems = [
    { label: 'HOME', to: '/', hasDropdown: true, dropdownItems: [] },
		{ label: 'ABOUT', to: '/about', hasDropdown: true, dropdownItems: [] },
		{ label: 'PLAY', to: '/play', hasDropdown: false },
		{
			label: 'LEARN',
			hasDropdown: true,
			to: '/learn',
			dropdownItems: [
				{ label: 'Coaching Levels', to: '/coaching-levels' },
				{ label: 'Meet The Coach', to: '/meet-coach' },
				{ label: 'Corporate Programs', to: '/corporate-programs' },
			],
		},
		{ label: 'MEMBERSHIP', to: '/membership', hasDropdown: false },
		{ label: 'LEAGUES', to: '/leagues', hasDropdown: false },
		{ label: 'EVENTS', to: '/events', hasDropdown: false },
		{ label: 'SIMULATOR', to: '/simulator', hasDropdown: false },
		{ label: 'OWN THE BUSINESS', to: '/partnership', hasDropdown: false },
	];

  // Mobile menu handlers
	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }

  const toggleDropdown = (label) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  // Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
				closeMobileMenu();
			}
		};

		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
			document.addEventListener('mousedown', handleClickOutside);
		} else {
      document.body.style.overflow = 'unset';
    }

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
		};
	}, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-[#102121] p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <div>
          <img
            alt="The Virtual Greens logo"
            className="h-10"
            src="/tvg-logo-green.svg"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/contact"
            className="bg-[#009444] text-white font-semibold text-sm py-2 px-4 rounded-full"
          >
            BOOK NOW
          </Link>
          <HamburgerIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div className='lg:hidden fixed inset-0 z-40 bg-[#102121] flex flex-col'>
					<div
						ref={mobileMenuRef}
						className='flex flex-col h-full w-full'
						onClick={(e) => e.stopPropagation()}
					>
						{/* Mobile Menu Header */}
						<div className='flex items-center justify-between p-4 border-b border-white/10'>
              <img
                alt="The Virtual Greens logo"
                className="h-10"
                src="/tvg-logo.svg"
              />
							<button
								onClick={closeMobileMenu}
								className='w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors duration-200'
								aria-label='Close menu'
							>
								<img alt="close" src="/x.svg" className="w-6 h-6" />
							</button>
						</div>

						{/* Mobile Menu Items */}
						<div className='flex-grow py-6 px-6 space-y-2 overflow-y-auto'>
							{menuItems.map((item, index) => {
								const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to));
								return (
									<div key={item.label} className='border-b border-white/10'>
                    <div className="flex justify-between items-center py-3">
										<Link
											to={item.to}
											onClick={closeMobileMenu}
											className={`font-gilroy text-xl font-bold tracking-wider transition-colors duration-200 ${
													isActive 
														? 'text-[#009444]' 
														: 'text-white'
											}`}
										>
											{item.label}
										</Link>
                    {item.hasDropdown && (
                      <button onClick={() => toggleDropdown(item.label)} className="p-2">
                        <img className={`w-6 h-6 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} alt="dropdown arrow" src="/chevron-down.svg" />
                      </button>
                    )}
                    </div>
										{item.hasDropdown && openDropdown === item.label && (
											<div className='ml-4 pt-2 pb-4 space-y-2'>
												{item.dropdownItems.map((dropdownItem) => {
													const isDropdownActive = location.pathname === dropdownItem.to || (dropdownItem.to !== '/' && location.pathname.startsWith(dropdownItem.to));
													return (
														<Link
															key={dropdownItem.label}
															to={dropdownItem.to}
															onClick={closeMobileMenu}
															className={`block font-gilroy text-base font-medium py-2 transition-colors duration-200 ${
																isDropdownActive 
																? 'text-[#009444]'
																: 'text-white/80'
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
						</div>

            {/* Social Icons and Language Switcher */}
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-6">
                  <a href="#"><img src="/images/Instagram.svg" alt="Instagram" className="w-7 h-7" /></a>
                  <a href="#"><img src="/images/Youtube.svg" alt="Youtube" className="w-7 h-7" /></a>
                  <a href="#"><img src="/images/Linkedin.svg" alt="Linkedin" className="w-7 h-7" /></a>
                  <a href="#"><img src="/images/Tiktok.svg" alt="Tiktok" className="w-7 h-7" /></a>
                </div>
                <button className="border border-white rounded-full px-6 py-2 text-white text-base font-gilroy font-bold">
                  العربية
                </button>
              </div>
            </div>

            {/* Green Bar */}
            <div className="bg-[#009444] h-3 w-full"></div>
					</div>
				</div>
			)}
    </>
  );
};
