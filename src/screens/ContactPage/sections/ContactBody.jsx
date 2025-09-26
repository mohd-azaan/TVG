import React from 'react';

// This component combines the Info, Form, and Map sections into a single layout.
// It has been corrected to properly center the entire content block on the x-axis.

export const ContactBody = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-24 overflow-hidden">
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Universal Spacing Wrapper */}
        <div className="lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]">
          <div className="max-w-[1200px] mx-auto">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column - Contact Info */}
              <div className="space-y-12">
                {/* Contact Details */}
                <div>
                  <h2 className="font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#009444] uppercase mb-8">
                    Contact Details
                  </h2>
                  <div className="flex items-center gap-4 mb-8">
                    <img src="/sports_golf.svg" alt="Phone" className="w-5 h-5 flex-shrink-0 opacity-80" />
                    <p className="font-gilroy font-medium text-base leading-[24px] tracking-[0.1px] text-[#757575]">+966 53 830 9749</p>
                  </div>
                  <button className="bg-[#009444] hover:bg-[#007a3a] transition-colors rounded-[50px] px-6 py-3 font-gilroy font-semibold text-base text-white uppercase inline-flex items-center gap-3">
                    <img src="/whatsapp-logo-variant-svgrepo-com-1.svg" alt="WhatsApp" className="w-5 h-5" />
                    <span>Chat with us</span>
                  </button>
                </div>

                {/* Address */}
                <div>
                  <h2 className="font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#009444] uppercase mb-4">
                    Address
                  </h2>
                  <div className="font-gilroy font-medium text-base leading-[24px] tracking-[0.1px] text-[#757575] space-y-1">
                    <p>The Boulevard Riyadh</p>
                    <p>Prince Turki Ibn Abdulaziz Al Awwal Road</p>
                    <p>Hitteen, Riyadh</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div>
                  <h2 className="font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#009444] uppercase mb-4">
                    Opening Hours
                  </h2>
                  <div className="font-gilroy font-medium text-base leading-[24px] tracking-[0.1px] text-[#757575] space-y-2">
                    <p className="font-bold">Sunday–Thursday</p>
                    <p className="uppercase font-bold mb-4">7:00 AM – 11:00 PM</p>
                    <p className="font-bold">Friday–Saturday</p>
                    <p className="uppercase font-bold">6:00 AM – 12:00 AM</p>
                  </div>
                </div>

                {/* Entry Note */}
                <div>
                  <p className="font-gilroy font-medium text-sm leading-[20px] tracking-[0.1px] text-[rgba(209,211,212,0.85)]">
                    <span className="font-bold text-black">NOTE:</span> Guests under 16 must be accompanied by an adult (21+) at all times. A physical ID may be required to confirm age.
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div id="contact-form">
                <h2 className="font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#009444] uppercase mb-6">Drop us a line</h2>
                <form className="space-y-4">
                  <input type="text" placeholder="Name" className="w-full bg-[#f6f6f6] border border-[lightgrey] rounded-[20px] px-6 py-4 font-gilroy font-medium text-base text-[#757575] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#009444]" />
                  <input type="email" placeholder="Email" className="w-full bg-[#f6f6f6] border border-[lightgrey] rounded-[20px] px-6 py-4 font-gilroy font-medium text-base text-[#757575] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#009444]" />
                  <input type="text" placeholder="Phone" className="w-full bg-[#f6f6f6] border border-[lightgrey] rounded-[20px] px-6 py-4 font-gilroy font-medium text-base text-[#757575] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#009444]" />
                  <div className="relative">
                    <select className="w-full bg-[#f6f6f6] border border-[lightgrey] rounded-[20px] px-6 py-4 font-gilroy font-medium text-base text-[#757575] appearance-none focus:outline-none focus:ring-2 focus:ring-[#009444]">
                      <option>Subject</option>
                      <option>General Inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                  <textarea placeholder="Message" rows="5" className="w-full bg-[#f6f6f6] border border-[lightgrey] rounded-[20px] px-6 py-4 font-gilroy font-medium text-base text-[#757575] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#009444] resize-none"></textarea>
                  <button type="submit" className="w-full bg-[#009444] hover:bg-[#007a3a] transition-colors text-white font-gilroy font-semibold text-base uppercase py-4 rounded-[20px]">Submit</button>
                </form>
              </div>
            </div>

            {/* Google Map - Full Width Below */}
            <div className="mt-16 lg:mt-20">
              <div className="w-full h-[400px] lg:h-[500px] rounded-[20px] overflow-hidden shadow-sm">
                <img src="/google-maps-screenshot.png" alt="Map showing TVG location" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};