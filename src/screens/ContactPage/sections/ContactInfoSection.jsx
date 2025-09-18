// src/screens/ContactPage/sections/ContactInfoSection.jsx
// Contact information section with phone, address, hours, and entry note
// Features left-aligned layout with proper spacing and styling
// RELEVANT FILES: ContactPage.jsx, ContactPage.css, call-icon.svg, whatsapp-icon.svg

import React from 'react';

export const ContactInfoSection = () => {
	return (
		<div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
			{/* Contact Details Section */}
			<div className="mb-[52px]">
				<h2 className="contact-section-title font-['Gilroy-Bold',sans-serif] text-[22px] font-bold leading-[26px] tracking-[0.44px] text-[#009444] uppercase mb-[50px]">
					Contact Details
				</h2>

				{/* Phone Number with Icon */}
				<div className="flex items-center gap-[38px] mb-[49px]">
					<img
						src="/call-24dp-e3e3e3-fill0-wght400-grad0-opsz24-1.svg"
						alt="Phone"
						className="w-[30px] h-[30px]"
					/>
					<span className="contact-phone font-['Gilroy-Bold',sans-serif] text-[24px] font-bold leading-[normal] tracking-[0.48px] text-[#757575] uppercase">
						+966 53 830 9749
					</span>
				</div>

				{/* WhatsApp Chat Button */}
				<div className="ml-[6px]">
					<button className="chat-button border border-black rounded-[50px] px-[30px] py-[7px] flex items-center gap-[15px] bg-transparent hover:bg-[#f0f0f0] transition-colors">
						<img
							src="/whatsapp-logo-variant-svgrepo-com-1.svg"
							alt="WhatsApp"
							className="w-8 h-8"
						/>
						<span className="chat-button-text font-['Gilroy-SemiBold',sans-serif] text-[18px] font-semibold leading-[40px] text-black uppercase text-center">
							Chat with us
						</span>
					</button>
				</div>
			</div>

			{/* Address Section */}
			<div className="mb-[53px]">
				<h2 className="contact-section-title font-['Gilroy-Bold',sans-serif] text-[22px] font-bold leading-[26px] tracking-[0.44px] text-[#009444] uppercase mb-[43px]">
					Address
				</h2>

				<div className="contact-details-text font-['Gilroy-Medium',sans-serif] text-[20px] font-normal leading-[28px] text-[#757575]">
					<p className="mb-0">The Boulevard Riyadh</p>
					<p className="mb-0">Prince Turki Ibn Abdulaziz Al Awwal Road</p>
					<p>Hitteen, Riyadh</p>
				</div>
			</div>

			{/* Opening Hours Section */}
			<div className="mb-[64px]">
				<h2 className="contact-section-title font-['Gilroy-Bold',sans-serif] text-[22px] font-bold leading-[26px] tracking-[0.44px] text-[#009444] uppercase mb-[43px]">
					Opening Hours
				</h2>

				<div className="space-y-[4px]">
					<p className="contact-hours-day font-['Gilroy-Medium',sans-serif] text-[20px] font-normal leading-[28px] text-[#757575] mb-0">
						Sunday–Thursday
					</p>
					<p className="contact-hours-time font-['Gilroy-Bold',sans-serif] text-[24px] font-bold leading-[normal] text-[#757575] uppercase mb-4">
						7:00 AM – 11:00 PM
					</p>
					<p className="contact-hours-day font-['Gilroy-Medium',sans-serif] text-[20px] font-normal leading-[28px] text-[#757575] mb-0">
						Friday–Saturday
					</p>
					<p className="contact-hours-time font-['Gilroy-Bold',sans-serif] text-[24px] font-bold leading-[normal] text-[#757575] uppercase">
						6:00 AM – 12:00 AM
					</p>
				</div>
			</div>

			{/* Entry Note Section */}
			<div>
				<div className="contact-details-text font-['Gilroy-Medium',sans-serif] text-[20px] font-normal leading-[28px] text-[#757575] w-[655px]">
					<p className="mb-0">
						Entry Note: Guests under 16 must be accompanied by an adult (21+) at all times.
						A physical ID may be required to confirm age.
					</p>
				</div>
			</div>
		</div>
	);
};