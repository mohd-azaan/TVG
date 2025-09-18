import React from 'react';
import { Button } from '../ui/button';

const FooterLink = ({ href, children }) => (
    <a href={href} className="block text-[#7f8c8c] hover:text-[#7DDB8A] transition-colors duration-200 font-gilroy text-lg py-1">
        {children}
    </a>
);

const SocialIcon = ({ href, alt, src }) => (
    <a href={href} className="opacity-80 hover:opacity-100 transition-opacity">
        <img className="h-7" alt={alt} src={src} />
    </a>
);

export const FooterSection = () => {
    return (
        <footer className='w-full bg-[#102121] text-white pt-24'>
            <div className='max-w-screen-xl mx-auto px-8'>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Column 1: Logo, Description & What's Happening */}
                    <div className="md:col-span-6 space-y-6">
                        <img className='w-[129px] h-auto' alt='TVG Logo' src='/tvg-logo.svg' />
                        <p className="font-gilroy text-lg text-[#7f8c8c] leading-relaxed max-w-lg">
                            The Virtual Greens is Riyadh’s first indoor golf simulator lounge, blending cutting-edge tech with a laid-back social vibe. Whether you're here to play, practice, or party, we make golf fun, accessible, and unforgettable.
                        </p>
                        <div className="space-y-4 pt-6">
                            <h3 className="font-gilroy font-bold text-lg uppercase">WHAT’S HAPPENING AT TVG</h3>
                            <p className="font-gilroy text-lg text-[#7f8c8c] leading-relaxed">
                                Stay in the loop on tournaments, events, and deals
                            </p>
                            <Button className='flex items-center justify-center gap-3 px-8 py-7 bg-transparent hover:bg-white/10 rounded-full border-2 border-white text-white transition-colors duration-200 w-full max-w-sm'>
                                <img className='w-7 h-7' alt='WhatsApp logo' src='/whatsapp-logo-variant-svgrepo-com-1.svg' />
                                <span className='font-semibold tracking-wide font-gilroy text-base whitespace-nowrap'>Subscribe To WhatsApp Channel</span>
                            </Button>
                        </div>
                    </div>

                    {/* Spacer Column */}
                    <div className="hidden md:block md:col-span-1"></div>

                    {/* Column 2: Company Links */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="font-gilroy font-bold text-lg uppercase">COMPANY</h3>
                        <div className="space-y-2">
                            <FooterLink href="#">About us</FooterLink>
                            <FooterLink href="#">Own/Rent simulators</FooterLink>
                            <FooterLink href="#">Partner with us</FooterLink>
                            <FooterLink href="#">Terms & Conditions</FooterLink>
                            <FooterLink href="#">Contact us</FooterLink>
                        </div>
                    </div>

                    {/* Column 3: Indoor Golf Links & Social */}
                    <div className="md:col-span-3 space-y-4">
                        <h3 className="font-gilroy font-bold text-lg uppercase">INDOOR GOLF</h3>
                        <div className="space-y-2">
                            <FooterLink href="#">Plan your visit</FooterLink>
                            <FooterLink href="#">Lessons</FooterLink>
                            <FooterLink href="#">Leagues</FooterLink>
                            <FooterLink href="#">Membership</FooterLink>
                            <FooterLink href="#">Events</FooterLink>
                        </div>
                        <div className="flex items-center gap-5 pt-8">
                            <SocialIcon href="#" alt="Instagram" src="/images/Instagram.svg" />
                            <SocialIcon href="#" alt="YouTube" src="/images/Youtube.svg" />
                            <SocialIcon href="#" alt="LinkedIn" src="/images/Linkedin.svg" />
                            <SocialIcon href="#" alt="Tiktok" src="/images/Tiktok.svg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className='w-full bg-[#0c1a1a] mt-20'>
                <div className="max-w-screen-xl mx-auto px-8 py-5 flex justify-between items-center">
                    <p className='font-gilroy text-base text-[#7f8c8c]'>
                        2025 The Virtual Greens. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};