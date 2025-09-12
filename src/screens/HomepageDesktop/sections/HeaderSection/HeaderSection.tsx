import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "ABOUT", hasDropdown: false },
    { label: "PLAY", hasDropdown: false },
    {
      label: "LEARN",
      hasDropdown: true,
      dropdownItems: [
        "TVG Academy Overview",
        "Coaching Levels", 
        "Meet the Coach",
      ],
    },
    { label: "MEMBERSHIP", hasDropdown: false },
    { label: "LEAGUES", hasDropdown: false },
    { label: "EVENTS", hasDropdown: false },
    { label: "SIMULATOR", hasDropdown: false },
    { label: "OWN THE BUSINESS", hasDropdown: false },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6">
      <div className="w-full max-w-[1700px] mx-auto">
        <div className="relative h-16 sm:h-18 lg:h-[90px] bg-[#102121]/95 backdrop-blur-md rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] shadow-lg border border-white/10">
          <div className="flex w-full h-full items-center justify-between px-4 sm:px-6 lg:px-8">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 z-10">
              <img
                className="w-20 h-6 sm:w-28 sm:h-8 lg:w-[151px] lg:h-[60px]"
                alt="The Virtual Greens Logo"
                src="/tvg-logo-green.svg"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex items-center">
              <NavigationMenuList className="flex items-center gap-8">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index} className="relative">
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger
                          className="inline-flex flex-col items-center justify-center gap-2 relative bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent p-0 h-auto group"
                          onMouseEnter={() => setActiveMenuItem(item.label)}
                          onMouseLeave={() => setActiveMenuItem(null)}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-white text-sm font-bold tracking-[0.8px] leading-[60px] whitespace-nowrap group-hover:text-[#28f699] transition-colors duration-200">
                              {item.label}
                            </span>
                            <ChevronDownIcon className="w-4 h-4 text-white group-hover:text-[#28f699] transition-colors duration-200" />
                          </div>
                          <div className={`w-8 h-0.5 ${activeMenuItem === item.label ? 'bg-[#28f699]' : ''} transition-all duration-200`} />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent
                          className="absolute w-[280px] top-[70px] left-1/2 transform -translate-x-1/2 rounded-[0px_0px_30px_30px] overflow-hidden border-t-[5px] border-[#009444] bg-[#e9ebed] p-0 shadow-xl"
                          onMouseEnter={() => setActiveMenuItem(item.label)}
                          onMouseLeave={() => setActiveMenuItem(null)}
                        >
                          <div className="p-8 space-y-6">
                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                              <div
                                key={dropdownIndex}
                                className="text-black text-sm font-bold tracking-[0.8px] cursor-pointer hover:text-[#009444] transition-colors duration-200"
                              >
                                {dropdownItem}
                              </div>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <button
                        className="inline-flex flex-col items-center justify-center gap-2 relative bg-transparent hover:bg-transparent p-0 h-auto group"
                        onMouseEnter={() => setActiveMenuItem(item.label)}
                        onMouseLeave={() => setActiveMenuItem(null)}
                      >
                        <span className="text-white text-sm font-bold tracking-[0.8px] leading-[60px] whitespace-nowrap group-hover:text-[#28f699] transition-colors duration-200">
                          {item.label}
                        </span>
                        <div className={`w-8 h-0.5 ${activeMenuItem === item.label ? 'bg-[#28f699]' : ''} transition-all duration-200`} />
                      </button>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Book Now Button */}
            <Button className="hidden sm:flex px-6 lg:px-8 py-2 lg:py-3 bg-[#009444] rounded-full hover:bg-[#007a3a] transition-colors duration-200 text-sm lg:text-base font-semibold text-white">
              BOOK NOW
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#102121]/95 backdrop-blur-md rounded-[25px] p-6 shadow-xl mx-4 border border-white/10">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <button className="text-white text-sm font-bold tracking-wide text-left w-full py-3 hover:text-[#28f699] transition-colors duration-200">
                      {item.label}
                    </button>
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <button
                            key={dropdownIndex}
                            className="text-gray-300 text-sm text-left w-full py-2 hover:text-[#009444] transition-colors duration-200"
                          >
                            {dropdownItem}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button className="w-full py-3 bg-[#009444] rounded-full hover:bg-[#007a3a] text-sm font-semibold mt-6 text-white">
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