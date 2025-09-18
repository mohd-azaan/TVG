// /home/mohammed-azaan-peshmam/Desktop/Agency/TVG/src/components/global/MobileComingSoon.jsx
// Mobile-only coming soon experience with TVG branding
// Shows instead of full website on mobile devices
// RELEVANT FILES: MainLayout.jsx, tailwind.css, TVG brand assets

import React from "react";

export const MobileComingSoon = () => {
  return (
    <div className="lg:hidden min-h-screen w-full bg-gradient-to-br from-[#006F33] via-[#009444] to-[#00B052] flex flex-col items-center justify-center px-6 py-8">
      {/* TVG Logo Section */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="font-TVG-typography-h2 text-[#009444] text-2xl font-black">
            TVG
          </div>
        </div>
        <h1 className="font-TVG-typography-h2 text-white text-3xl font-black tracking-wide">
          THE VIRTUAL GREENS
        </h1>
        <p className="font-TVG-typography-tagline text-white/90 text-sm font-bold tracking-wider mt-2">
          INDOOR GOLF SIMULATOR LOUNGE
        </p>
      </div>

      {/* Main Message */}
      <div className="text-center mb-12 max-w-sm">
        <h2 className="font-TVG-typography-h5 text-white text-2xl font-bold mb-4 leading-tight">
          Mobile Experience
          <br />
          Coming Soon
        </h2>
        <p className="font-TVG-typography-default text-white/90 text-base leading-relaxed mb-6">
          We're crafting an amazing mobile experience for you.
          For now, please visit us on desktop to explore our premium golf simulators and amenities.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <p className="font-TVG-typography-default text-white/95 text-sm">
            🖥️ Visit on desktop for the full experience
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center mb-8">
        <h3 className="font-TVG-typography-h5 text-white text-lg font-bold mb-4">
          Visit Us Today
        </h3>
        <div className="space-y-3 text-white/90">
          <div className="flex items-center justify-center space-x-2">
            <span className="font-TVG-typography-default text-sm">📍</span>
            <span className="font-TVG-typography-default text-sm">Riyadh, Saudi Arabia</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="font-TVG-typography-default text-sm">📞</span>
            <span className="font-TVG-typography-default text-sm">Call for Reservations</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="font-TVG-typography-default text-sm">🏌️</span>
            <span className="font-TVG-typography-default text-sm">Premium Golf Simulators</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-white text-[#009444] font-TVG-typography-button font-bold py-4 px-8 rounded-full shadow-lg hover:bg-white/90 transition-all duration-200 transform hover:scale-105">
          Book Your Bay
        </button>
        <p className="font-TVG-typography-default text-white/70 text-xs mt-4">
          Or visit us on desktop for full booking experience
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="font-TVG-typography-default text-white/60 text-xs">
          © 2024 The Virtual Greens. Premium Golf Experience.
        </p>
      </div>
    </div>
  );
};