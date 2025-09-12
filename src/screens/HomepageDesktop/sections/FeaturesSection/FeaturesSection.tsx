import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const menuItems = [
  { text: "MENU ITEM", isActive: false },
  { text: "MENU ITEM", isActive: true },
  { text: "MENU ITEM", isActive: false },
];

const carouselSlides = [
  {
    title: "GOLF SIMULATOR BAYS",
    description:
      "5 Golf Simulator Bays (open, private, and VIP) with the world's most advanced Golfzon TwoVisionNX tech.",
    image: "/advanced-simulators-1-5.png",
    activeIndex: 0,
  },
  {
    title: "FOOD & DRINK",
    description: "Because great rounds deserve great bites.",
    image: "/advanced-simulators-1-4.png",
    activeIndex: 1,
  },
  {
    title: "LESSONS & COACHING",
    description: "From complete beginners to tournament-ready players.",
    image: "/advanced-simulators-1-3.png",
    activeIndex: 2,
  },
  {
    title: "MEMBERSHIPS",
    description: "More golf, more perks.",
    image: "/advanced-simulators-1-2.png",
    activeIndex: 3,
  },
  {
    title: "EVENTS & TOURNAMENTS",
    description: "Social or corporate, we make them unforgettable.",
    image: "/advanced-simulators-1-1.png",
    activeIndex: 4,
  },
  {
    title: "SIMULATOR OWNERSHIP/RENTAL",
    description: "Take the game to your space",
    image: "/advanced-simulators-1-5.png",
    activeIndex: 0,
  },
];

const gameCards = [
  {
    title: "PLAY GREAT GAMES",
    description:
      "Fun, fast-paced options from mini golf to longest drive battles.",
    image: "/play-swing-2-1-10.png",
    isActive: false,
  },
  {
    title: "PLAY GREAT GAMES",
    description:
      "Fun, fast-paced options from mini golf to longest drive battles.",
    image: "/play-swing-2-1-10.png",
    isActive: true,
  },
];

const gatherCrewCards = [
  {
    title: "GATHER YOUR CREW",
    description:
      "Big crew? Solo mission? You can book your bay online in seconds, or just walk in and we'll slot you right in. Either way, you're one swing closer to a good time.",
    isDark: true,
  },
  {
    title: "GATHER YOUR CREW",
    description:
      "Big crew? Solo mission? You can book your bay online in seconds, or just walk in and we'll slot you right in. Either way, you're one swing closer to a good time.",
    isDark: false,
  },
];

const membershipCards = [
  {
    title: "ONLY 96 MEMBERSHIPS AVAILABLE",
    description:
      "First-year members unlock a +1 partner. Full benefits included",
    buttonText: "CLAIM YOUR SPOT",
    opacity: "opacity-70",
  },
  {
    title: "ONLY 96 MEMBERSHIPS AVAILABLE",
    description:
      "First-year members unlock a +1 partner. Full benefits included",
    buttonText: "CLAIM YOUR SPOT",
    opacity: "",
  },
];

const navigationItems = [
  { text: "ABOUT", isActive: false },
  { text: "PLAY", isActive: false },
  { text: "LEARN", isActive: false, hasDropdown: true },
  { text: "MEMBERSHIP", isActive: false },
  { text: "LEAGUES", isActive: false },
  { text: "EVENTS", isActive: false },
  { text: "SIMULATOR", isActive: false },
  { text: "OWN THE BUSINESS", isActive: false },
];

const planYourVisitItems = [
  { text: "PLAN YOUR VISIT", isActive: false },
  { text: "PLAN YOUR VISIT", isActive: true },
];

const dropdownMenuItems = [
  "TVG Academy Overview",
  "Coaching Levels",
  "Meet the Coach",
];

const footerIndoorGolfItems = [
  "Plan your visit",
  "Lessons",
  "Leagues",
  "Membership",
  "Events",
];

const footerCompanyItems = [
  "About us",
  "Own/Rent simulators",
  "Partner with us",
  "Terms & Conditions",
  "Contact us",
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="flex flex-col gap-8 p-8">
        {/* Side Menu Component */}
        <Card className="w-60 border-dashed border-[#8a38f5] rounded-[5px]">
          <CardContent className="p-0">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-0.5 pl-[59px] pr-[25px] py-[15px] ${
                  item.isActive ? "border-l-2 border-[#aeea00]" : ""
                }`}
              >
                <div
                  className={`font-TVG-typography-side-menu-item font-[number:var(--TVG-typography-side-menu-item-font-weight)] text-[length:var(--TVG-typography-side-menu-item-font-size)] tracking-[var(--TVG-typography-side-menu-item-letter-spacing)] leading-[var(--TVG-typography-side-menu-item-line-height)] [font-style:var(--TVG-typography-side-menu-item-font-style)] ${
                    item.isActive ? "text-[#aeea00]" : "text-white"
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Image Hover Cards */}
        <Card className="w-[540px] border-dashed border-[#8a38f5] rounded-[5px] overflow-hidden">
          <CardContent className="p-0 relative">
            <div className="w-[450px] h-[253px] relative">
              <img
                className="w-[450px] h-[253px] object-cover rounded-[10px]"
                alt="Img border hover"
                src="/imgborderhover-1.png"
              />
              <div className="absolute inset-0 bg-[#212121cc] rounded-[10px]" />
              <Button className="absolute bottom-4 left-0 bg-transparent text-transparent h-auto">
                Image Title
              </Button>
            </div>

            <div className="absolute bottom-0 left-0 w-[470px] h-[292px]">
              <img
                className="w-[470px] h-[264px] border border-solid border-[#4caf50] object-cover rounded-[10px]"
                alt="Img border hover"
                src="/imgborderhover-1.png"
              />
              <Button className="absolute bottom-0 left-0 bg-[#4caf50] text-black h-auto px-5 py-2.5">
                Image Title
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Counter Component */}
        <div className="flex flex-col items-center gap-[5px] w-[200px]">
          <div className="font-TVG-typography-counter-number font-[number:var(--TVG-typography-counter-number-font-weight)] text-[#aeea00] text-[length:var(--TVG-typography-counter-number-font-size)] text-center tracking-[var(--TVG-typography-counter-number-letter-spacing)] leading-[var(--TVG-typography-counter-number-line-height)] [font-style:var(--TVG-typography-counter-number-font-style)]">
            76+
          </div>
          <div className="font-TVG-typography-counter-text font-[number:var(--TVG-typography-counter-text-font-weight)] text-white text-[length:var(--TVG-typography-counter-text-font-size)] text-center tracking-[var(--TVG-typography-counter-text-letter-spacing)] leading-[var(--TVG-typography-counter-text-line-height)] [font-style:var(--TVG-typography-counter-text-font-style)]">
            Active Members
          </div>
        </div>

        {/* Game Cards */}
        <Card className="w-[460px] border-dashed border-[#8a38f5] rounded-[5px] overflow-hidden">
          <CardContent className="p-5 space-y-5">
            {gameCards.map((card, index) => (
              <div
                key={index}
                className={`w-[420px] h-[340px] rounded-[30px] relative ${
                  card.isActive
                    ? "bg-[#74ffa7]"
                    : "bg-[linear-gradient(0deg,rgba(246,246,246,1)_0%,rgba(246,246,246,1)_100%),linear-gradient(0deg,rgba(237,237,237,1)_0%,rgba(237,237,237,1)_100%),linear-gradient(0deg,rgba(233,235,237,1)_0%,rgba(233,235,237,1)_100%)]"
                }`}
              >
                <img
                  className="absolute inset-0 w-[420px] h-[356px] rounded-[30px] object-cover"
                  alt="Play swing"
                  src={card.image}
                />
                <div className="absolute bottom-[77px] left-[41px] w-[362px] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-black text-[28px] tracking-[0] leading-[normal]">
                  {card.title}
                </div>
                <div className="absolute bottom-[18px] left-[43px] w-[322px] font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] tracking-[var(--TVG-typography-default-letter-spacing)] leading-[var(--TVG-typography-default-line-height)] [font-style:var(--TVG-typography-default-font-style)] text-black">
                  {card.description}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Carousel Component */}
        <Card className="w-[655px] border-dashed border-[#8a38f5] rounded-[5px] overflow-hidden">
          <CardContent className="p-5 space-y-5">
            {carouselSlides.map((slide, index) => (
              <div key={index} className="w-[615px] h-[540px] overflow-hidden">
                <div className="w-[619px] h-[430px] relative">
                  <img
                    className="w-[615px] h-[346px] rounded-[30px] object-cover"
                    alt="Advanced simulators"
                    src={slide.image}
                  />
                  <div className="absolute bottom-[28px] left-0 font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[#009444] text-[length:var(--TVG-typography-tagline-font-size)] tracking-[var(--TVG-typography-tagline-letter-spacing)] leading-[var(--TVG-typography-tagline-line-height)] [font-style:var(--TVG-typography-tagline-font-style)]">
                    {slide.title}
                  </div>
                  <div className="absolute bottom-0 left-0 w-[615px] font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[#757575] text-[length:var(--TVG-typography-default-font-size)] tracking-[var(--TVG-typography-default-letter-spacing)] leading-[var(--TVG-typography-default-line-height)] [font-style:var(--TVG-typography-default-font-style)]">
                    {slide.description}
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-between mt-[60px]">
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-[50px] h-[50px] rounded-full border-black"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-[50px] h-[50px] rounded-full border-black"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </Button>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex gap-[17px]">
                    {[0, 1, 2, 3, 4].map((dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2.5 h-2.5 rounded-[5px] ${
                          dotIndex === slide.activeIndex
                            ? "bg-[#66b68f] w-5 rounded-[50px]"
                            : "bg-[#ededed]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Navigation Menu */}
        <div className="w-[1700px] h-[90px] bg-[#102121] rounded-[50px] backdrop-blur-[10px] relative">
          <div className="flex items-center justify-end gap-[30px] h-full pr-[30px]">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2.5 relative"
              >
                <div className="font-TVG-typography-TVG-typography-TVG-typography-top-menu-item font-[number:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-weight)] text-white text-[length:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-size)] tracking-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-letter-spacing)] leading-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-line-height)] [font-style:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-style)]">
                  {item.text}
                </div>
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-[18px] h-[18px]" />
                )}
                <div className="w-[30px] h-0.5" />
              </div>
            ))}
            <Button className="bg-[#009444] text-white rounded-[50px] h-10 px-6">
              BOOK NOW
            </Button>
          </div>

          <Link
            to="/"
            className="absolute left-0 top-[-13px]"
          >
            <img
              className="w-[151px] h-[60px]"
              alt="Tvg logo green"
              src="/tvg-logo-green.svg"
            />
          </Link>
        </div>

        {/* Plan Your Visit Toggle */}
        <div className="flex flex-col h-[170px] items-center justify-between border-dashed border-[#8a38f5] rounded-[5px] p-4">
          {planYourVisitItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2.5"
            >
              <div
                className={`font-TVG-typography-TVG-typography-TVG-typography-top-menu-item font-[number:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-weight)] text-[length:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-size)] tracking-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-letter-spacing)] leading-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-line-height)] [font-style:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-style)] ${
                  item.isActive ? "text-[#28f699]" : "text-white"
                }`}
              >
                {item.text}
              </div>
              <div
                className={`w-[30px] h-0.5 ${item.isActive ? "bg-[#28f699]" : ""}`}
              />
            </div>
          ))}
        </div>

        {/* Dropdown Menu */}
        <Card className="w-[130px] border-dashed border-[#8a38f5] rounded-[5px] overflow-hidden">
          <CardContent className="p-5">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="font-TVG-typography-TVG-typography-TVG-typography-top-menu-item font-[number:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-weight)] text-white text-[length:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-size)] tracking-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-letter-spacing)] leading-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-line-height)] [font-style:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-style)]">
                  LESONS
                </div>
                <ChevronDownIcon className="w-5 h-5" />
              </div>

              <div className="flex items-center gap-2">
                <div className="font-TVG-typography-TVG-typography-TVG-typography-top-menu-item font-[number:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-weight)] text-[#28f699] text-[length:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-size)] tracking-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-letter-spacing)] leading-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-line-height)] [font-style:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-style)]">
                  LESONS
                </div>
                <ChevronDownIcon className="w-5 h-5" />
              </div>

              <div className="w-[280px] h-[150px] bg-[#e9ebed] rounded-[0px_0px_30px_30px] border-t-[5px] border-[#009444] p-[38px]">
                {dropdownMenuItems.map((menuItem, index) => (
                  <div
                    key={index}
                    className="font-TVG-typography-TVG-typography-TVG-typography-top-menu-item font-[number:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-weight)] text-black text-[length:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-size)] tracking-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-letter-spacing)] leading-[var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-line-height)] [font-style:var(--TVG-typography-TVG-typography-TVG-typography-top-menu-item-font-style)] mb-[38px]"
                  >
                    {menuItem}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Close Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            className="w-[34px] h-[34px] rounded-full border-black bg-white"
          >
            <XIcon className="w-6 h-6" />
          </Button>
          <Button
            size="icon"
            className="w-[34px] h-[34px] rounded-full bg-[#009444]"
          >
            <XIcon className="w-6 h-6 text-white" />
          </Button>
        </div>

        {/* Membership Cards */}
        <Card className="w-[420px] border-dashed border-[#8a38f5] rounded-[5px] overflow-hidden">
          <CardContent className="p-5 space-y-5">
            {membershipCards.map((card, index) => (
              <div
                key={index}
                className={`w-[380px] h-[200px] bg-white rounded-[30px] border border-[#9d9d9d] shadow-[2px_3px_3px_#00000026] p-[27px] relative ${card.opacity}`}
              >
                <div className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-xl tracking-[0] leading-[normal] mb-4">
                  <span className="text-[#009444]">ONLY </span>
                  <span className="text-black text-3xl">96</span>
                  <span className="text-[#009444]"> MEMBERSHIPS AVAILABLE</span>
                </div>
                <div className="font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-black text-[length:var(--TVG-typography-default-font-size)] tracking-[var(--TVG-typography-default-letter-spacing)] leading-[var(--TVG-typography-default-line-height)] [font-style:var(--TVG-typography-default-font-style)] mb-6">
                  {card.description}
                </div>
                <Button className="bg-[#009444] text-white rounded-[50px] h-auto px-[21px] py-2.5">
                  {card.buttonText}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute -top-[11px] right-0 w-[34px] h-[34px] rounded-full border-black bg-white"
                >
                  <XIcon className="w-6 h-6" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Gather Your Crew Cards */}
        <Card className="w-[695px] border-dashed border-[#8a38f5] rounded-[5px] overflow-hidden">
          <CardContent className="p-5 space-y-5">
            {gatherCrewCards.map((card, index) => (
              <div
                key={index}
                className={`w-[655px] h-[250px] rounded-[30px] p-[41px] ${
                  card.isDark ? "bg-[#0c1a1a]" : "bg-[#7ddb8a]"
                }`}
              >
                <div
                  className={`[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[28px] tracking-[0] leading-[normal] mb-[60px] ${
                    card.isDark ? "text-white" : "text-black"
                  }`}
                >
                  {card.title}
                </div>
                <div
                  className={`font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] tracking-[var(--TVG-typography-default-letter-spacing)] leading-[var(--TVG-typography-default-line-height)] [font-style:var(--TVG-typography-default-font-style)] ${
                    card.isDark ? "text-[#d1d3d4d9]" : "text-black"
                  }`}
                >
                  {card.description}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Various Button Styles */}
        <div className="flex flex-wrap gap-4">
          <Button
            variant="outline"
            className="border-white text-white rounded-[50px] h-auto px-[30px] py-[7px]"
          >
            BUTTON
          </Button>
          <Button className="bg-[#66bf8f] text-black rounded-[50px] h-auto px-[30px] py-[7px]">
            BUTTON
          </Button>
          <Button className="bg-[#009444] text-white rounded-[50px] h-auto px-[30px] py-[7px]">
            BUTTON
          </Button>
          <Button
            variant="outline"
            className="border-black text-black rounded-[50px] h-auto px-[30px] py-[7px]"
          >
            TEXT
          </Button>
          <Button className="bg-[#009444] text-white rounded-[50px] h-auto px-[30px] py-[7px]">
            TEXT
          </Button>
          <Button className="bg-[#66bf8f] text-black rounded-[50px] h-auto px-[30px] py-[7px] flex items-center gap-2">
            BUTTON
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
          <Button className="bg-[#009444] text-white rounded-[50px] h-auto px-[30px] py-[7px] flex items-center gap-2">
            BUTTON
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>

        {/* WhatsApp Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button
            variant="outline"
            className="border-white text-white rounded-[50px] h-auto px-[30px] py-[7px] flex items-center gap-[15px]"
          >
            <img
              className="w-8 h-8"
              alt="Whatsapp logo"
              src="/whatsapp-logo-variant-svgrepo-com-1.svg"
            />
            BUTTON
          </Button>
          <Button className="bg-[#66bf8f] text-black rounded-[50px] h-auto px-[30px] py-[7px] flex items-center gap-[15px]">
            <img
              className="w-8 h-8"
              alt="Whatsapp logo"
              src="/whatsapp-logo-variant-svgrepo-com-1.svg"
            />
            BUTTON
          </Button>
          <Button className="bg-[#009444] text-white rounded-[50px] h-auto px-[30px] py-[7px] flex items-center gap-[15px]">
            <img
              className="w-8 h-8"
              alt="Whatsapp logo"
              src="/whatsapp-logo-variant-svgrepo-com-1.svg"
            />
            BUTTON
          </Button>
          <Button className="bg-[#33a969] text-black rounded-[50px] h-auto px-[30px] py-[7px] flex items-center gap-[15px]">
            <img
              className="w-8 h-8"
              alt="Whatsapp logo"
              src="/whatsapp-logo-variant-svgrepo-com-1.svg"
            />
            BUTTON
          </Button>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            className="w-[50px] h-[50px] rounded-full border-black"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>
          <Button
            size="icon"
            className="w-[50px] h-[50px] rounded-full bg-[#009444]"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-[50px] h-[50px] rounded-full border-black"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
          <Button
            size="icon"
            className="w-[50px] h-[50px] rounded-full bg-[#009444]"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </Button>
        </div>

        {/* Footer Menu Items */}
        <div className="space-y-4">
          <div className="font-TVG-typography-footer-menu font-[number:var(--TVG-typography-footer-menu-font-weight)] text-[#7f8c8c] text-[length:var(--TVG-typography-footer-menu-font-size)] tracking-[var(--TVG-typography-footer-menu-letter-spacing)] leading-[var(--TVG-typography-footer-menu-line-height)] [font-style:var(--TVG-typography-footer-menu-font-style)]">
            About TVG
          </div>
          <div className="font-TVG-typography-footer-menu font-[number:var(--TVG-typography-footer-menu-font-weight)] text-[#28f699] text-[length:var(--TVG-typography-footer-menu-font-size)] tracking-[var(--TVG-typography-footer-menu-letter-spacing)] leading-[var(--TVG-typography-footer-menu-line-height)] [font-style:var(--TVG-typography-footer-menu-font-style)]">
            About TVG
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-full h-[537px] bg-[linear-gradient(0deg,rgba(0,111,51,1)_0%,rgba(0,111,51,1)_100%),linear-gradient(0deg,rgba(0,74,34,1)_0%,rgba(0,74,34,1)_100%)] overflow-hidden relative">
          <img
            className="absolute w-[600px] h-[400px] top-0 left-0 object-cover"
            alt="Golf
            club ball"
            src="/golf-club---ball-1.png"
          />

          <div className="absolute top-[150px] left-[279px] w-[634px] h-[222px]">
            <div className="font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-white text-[length:var(--TVG-typography-h2-font-size)] tracking-[var(--TVG-typography-h2-letter-spacing)] leading-[var(--TVG-typography-h2-line-height)] [font-style:var(--TVG-typography-h2-font-style)] mb-[94px]">
              READY TO VISIT?
            </div>
            <div className="font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-white text-[length:var(--TVG-typography-tagline-font-size)] tracking-[var(--TVG-typography-tagline-letter-spacing)] leading-[var(--TVG-typography-tagline-line-height)] [font-style:var(--TVG-typography-tagline-font-style)] mb-[74px]">
              YOUR NEXT GOLF GAME, HANGOUT, OR EVENT IS JUST A CLICK AWAY
            </div>
            <div className="flex gap-[246px]">
              <Button className="bg-[#009444] text-white rounded-[50px] h-auto px-[30px] py-[7px] flex items-center gap-2.5">
                PLAN YOUR VISIT
                <ArrowRightIcon className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white rounded-[50px] h-auto px-[30px] py-[7px]"
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="w-full h-[616px] bg-[#102121] overflow-hidden relative">
          <div className="absolute top-[155px] left-[614px] w-[780px] h-[314px]">
            <div className="absolute top-[-13px] left-[-25px] [font-family:'Morganite-Black',Helvetica] font-black text-white text-[240px] tracking-[4.80px] leading-[normal]">
              "
            </div>
            <div className="absolute top-[42px] left-[75px] w-[750px] [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-[26px] tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tortor erat, pretium et mattis quis, ultrices eget
              velit. Vivamus sit amet egestas justo. Nam sagittis, justo vitae
              sagittis auctor, mi diam laoreet elit, aliquet dignissim orci
              turpis vitae eros. Nulla eget pretium diam, vel egestas dui. Ut
              arcu eros, fermentum sit amet dolor a, elementum vehicula purus.
            </div>
            <div className="absolute top-[293px] left-[611px] font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-white text-[length:var(--TVG-typography-default-font-size)] tracking-[var(--TVG-typography-default-letter-spacing)] leading-[var(--TVG-typography-default-line-height)] [font-style:var(--TVG-typography-default-font-style)]">
              Ambassador, John Doe
            </div>
          </div>

          <div className="absolute top-[152px] left-[280px]">
            <img
              className="w-[263px] h-[394px] object-cover"
              alt="Chatgpt image aug"
              src="/chatgpt-image-aug-22--2025--09-37-50-pm-1-2.png"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-20 bg-[#0c1a1a] flex items-center justify-center">
            <div className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-[normal] mr-[256px]">
              READY TO VISIT?
            </div>
            <Button className="bg-[#009444] text-white rounded-[50px] h-auto px-[30px] py-[7px] flex items-center gap-2.5">
              PLAN YOUR VISIT
              <ArrowRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full h-[612px] bg-[#102121] relative">
          <div className="absolute top-[118px] left-[278px] w-[539px]">
            <div className="font-TVG-typography-footer-default font-[number:var(--TVG-typography-footer-default-font-weight)] text-[#7f8c8c] text-[length:var(--TVG-typography-footer-default-font-size)] tracking-[var(--TVG-typography-footer-default-letter-spacing)] leading-[var(--TVG-typography-footer-default-line-height)] [font-style:var(--TVG-typography-footer-default-font-style)] mb-[152px]">
              The Virtual Greens is Riyadh's first indoor golf simulator lounge,
              blending cutting-edge tech with a laid-back social vibe. Whether
              you're here to play, practice, or party, we make golf fun,
              accessible, and unforgettable.
            </div>

            <div className="font-TVG-typography-footer-title font-[number:var(--TVG-typography-footer-title-font-weight)] text-white text-[length:var(--TVG-typography-footer-title-font-size)] tracking-[var(--TVG-typography-footer-title-letter-spacing)] leading-[var(--TVG-typography-footer-title-line-height)] [font-style:var(--TVG-typography-footer-title-font-style)] mb-[33px]">
              WHAT'S HAPPENING AT TVG
            </div>

            <div className="font-TVG-typography-footer-default font-[number:var(--TVG-typography-footer-default-font-weight)] text-[#7f8c8c] text-[length:var(--TVG-typography-footer-default-font-size)] tracking-[var(--TVG-typography-footer-default-letter-spacing)] leading-[var(--TVG-typography-footer-default-line-height)] [font-style:var(--TVG-typography-footer-default-font-style)] mb-[54px]">
              Stay in the loop on tournaments, events, and deals
            </div>

            <Button
              variant="outline"
              className="border-white text-white rounded-[50px] h-auto px-[30px] py-[7px] flex items-center gap-[15px]"
            >
              <img
                className="w-8 h-8"
                alt="Whatsapp logo"
                src="/whatsapp-logo-variant-svgrepo-com-1.svg"
              />
              Subscribe To Whatsapp Channel
            </Button>
          </div>

          {/* Footer Menu Columns */}
          <div className="absolute top-[118px] left-[1318px] w-[325px]">
            <div className="font-TVG-typography-footer-title font-[number:var(--TVG-typography-footer-title-font-weight)] text-white text-[length:var(--TVG-typography-footer-title-font-size)] tracking-[var(--TVG-typography-footer-title-letter-spacing)] leading-[var(--TVG-typography-footer-title-line-height)] [font-style:var(--TVG-typography-footer-title-font-style)] mb-[41px]">
              INDOOR GOLF
            </div>
            <div className="space-y-[40px]">
              {footerIndoorGolfItems.map((item, index) => (
                <div
                  key={index}
                  className="font-TVG-typography-footer-menu font-[number:var(--TVG-typography-footer-menu-font-weight)] text-[#7f8c8c] text-[length:var(--TVG-typography-footer-menu-font-size)] tracking-[var(--TVG-typography-footer-menu-letter-spacing)] leading-[var(--TVG-typography-footer-menu-line-height)] [font-style:var(--TVG-typography-footer-menu-font-style)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-[118px] left-[963px] w-[325px]">
            <div className="font-TVG-typography-footer-title font-[number:var(--TVG-typography-footer-title-font-weight)] text-white text-[length:var(--TVG-typography-footer-title-font-size)] tracking-[var(--TVG-typography-footer-title-letter-spacing)] leading-[var(--TVG-typography-footer-title-line-height)] [font-style:var(--TVG-typography-footer-title-font-style)] mb-[39px]">
              COMPANY
            </div>
            <div className="space-y-[40px]">
              {footerCompanyItems.map((item, index) => (
                <div
                  key={index}
                  className="font-TVG-typography-footer-menu font-[number:var(--TVG-typography-footer-menu-font-weight)] text-[#7f8c8c] text-[length:var(--TVG-typography-footer-menu-font-size)] tracking-[var(--TVG-typography-footer-menu-letter-spacing)] leading-[var(--TVG-typography-footer-menu-line-height)] [font-style:var(--TVG-typography-footer-menu-font-style)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[60px] bg-[#0c1a1a] flex items-center">
            <div className="ml-[280px] font-TVG-typography-footer-default font-[number:var(--TVG-typography-footer-default-font-weight)] text-[#7f8c8c] text-[length:var(--TVG-typography-footer-default-font-size)] tracking-[var(--TVG-typography-footer-default-letter-spacing)] leading-[var(--TVG-typography-footer-default-line-height)] [font-style:var(--TVG-typography-footer-default-font-style)]">
              2025 The Virtual Greens. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
