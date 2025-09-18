import React from 'react';

// This component combines the Info, Form, and Map sections into a single layout.
// It has been corrected to properly center the entire content block on the x-axis.

export const ContactBody = () => {
  return (
    <div className="relative w-full bg-white" style={{ height: '1457px' }}>
      {/* This container is now centered and acts as the canvas for the absolute positioning */}
      <div className="relative max-w-[1360px] mx-auto h-full">

        {/* === All elements are positioned absolutely within this centered container === */}

        {/* --- Contact Info Column (Original left: 282px -> New left: 0px) --- */}
        <div className="absolute" style={{ left: '0px', top: '102px' }}>
          <p className="font-gilroy font-bold text-2xl text-[#009444] uppercase tracking-wide mb-12">
            Contact Details
          </p>
          <div className="flex items-center gap-4 mb-8">
            <img src="/public/assets/call-24dp-e3e3e3-fill0-wght400-grad0-opsz24-1.svg" alt="Phone" className="w-8 h-8" />
            <p className="font-gilroy font-bold text-2xl text-[#757575]">+966 53 830 9749</p>
          </div>
          <button className="border border-black rounded-full px-8 py-3 font-gilroy font-semibold text-lg uppercase flex items-center gap-3 hover:bg-gray-100 transition-colors">
            <img src="/public/assets/whatsapp-logo-variant-svgrepo-com-1.svg" alt="WhatsApp" className="w-7 h-7" />
            <span>Chat with us</span>
          </button>
        </div>

        <div className="absolute" style={{ left: '0px', top: '321px' }}>
          <p className="font-gilroy font-bold text-2xl text-[#009444] uppercase tracking-wide mb-4">
            Address
          </p>
          <div className="font-gilroy font-medium text-xl text-[#757575] leading-relaxed">
            <p>The Boulevard Riyadh</p>
            <p>Prince Turki Ibn Abdulaziz Al Awwal Road</p>
            <p>Hitteen, Riyadh</p>
          </div>
        </div>

        <div className="absolute" style={{ left: '0px', top: '498px' }}>
          <p className="font-gilroy font-bold text-2xl text-[#009444] uppercase tracking-wide mb-4">
            Opening Hours
          </p>
          <div className="font-gilroy font-medium text-xl text-[#757575] leading-relaxed">
            <p className="font-bold">Sunday–Thursday</p>
            <p className="uppercase text-2xl font-bold mb-4">7:00 AM – 11:00 PM</p>
            <p className="font-bold">Friday–Saturday</p>
            <p className="uppercase text-2xl font-bold">6:00 AM – 12:00 AM</p>
          </div>
        </div>

        <div className="absolute w-[655px]" style={{ left: '0px', top: '743px' }}>
          <p className="font-gilroy font-medium text-lg text-[#757575]">
            Entry Note: Guests under 16 must be accompanied by an adult (21+) at all times. A physical ID may be required to confirm age.
          </p>
        </div>

        {/* --- Contact Form Column (Original left: 1028px -> New left: 748px) --- */}
        <div className="absolute" style={{ left: '748px', top: '100px', width: '612px' }}>
            <h2 className="font-gilroy font-bold text-2xl text-[#009444] uppercase tracking-wide mb-6">Drop us a line</h2>
            <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full bg-[#f6f6f6] border border-[lightgrey] rounded-[30px] px-6 py-4 font-gilroy font-medium text-lg text-[#757575] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#009444]" />
                <input type="email" placeholder="Email" className="w-full bg-[#f6f6f6] border border-[lightgrey] rounded-[30px] px-6 py-4 font-gilroy font-medium text-lg text-[#757575] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#009444]" />
                <input type="text" placeholder="Phone" className="w-full bg-[#f6f6f6] border border-[lightgrey] rounded-[30px] px-6 py-4 font-gilroy font-medium text-lg text-[#757575] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#009444]" />
                <div className="relative">
                    <select className="w-full bg-[#f6f6f6] border border-[lightgrey] rounded-[30px] px-6 py-4 font-gilroy font-medium text-lg text-[#757575] appearance-none focus:outline-none focus:ring-2 focus:ring-[#009444]">
                        <option>Subject</option>
                        <option>General Inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
                <textarea placeholder="Message" rows="5" className="w-full bg-[#f6f6f6] border border-[lightgrey] rounded-[30px] px-6 py-4 font-gilroy font-medium text-lg text-[#757575] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#009444] resize-none"></textarea>
                <button type="submit" className="w-full bg-[#009444] text-white font-gilroy font-semibold text-lg uppercase py-4 rounded-[30px] hover:bg-opacity-90 transition-colors">Submit</button>
            </form>
        </div>

        {/* --- Google Map Image (Original left: 280px -> New left: 0px) --- */}
        <div className="absolute w-[1360px] h-[426px] rounded-[30px] overflow-hidden" style={{ left: '0px', top: '912px' }}>
            <img src="/google-maps-screenshot.png" alt="Map" className="w-full h-full object-cover" />
        </div>

      </div>
    </div>
  );
};