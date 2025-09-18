// C:\Users\azaan\Desktop\Agency\TVG\src\components\global\MobileComingSoon.jsx
// Mobile-only coming soon experience with TVG branding
// Shows clean white design with TVG logo and simple coming soon message
// RELEVANT FILES: MainLayout.jsx, tailwind.css, TVG brand assets

import React from "react";

export const MobileComingSoon = () => {
  return (
    <div className="lg:hidden min-h-screen w-full bg-white flex flex-col items-center justify-center px-6 py-8">
      {/* TVG Logo */}
      <div className="text-center mb-8">
        <img
          alt="The Virtual Greens logo"
          className="block max-w-none w-[120px] h-auto object-contain mx-auto mb-6"
          src="/tvg-logo-green.svg"
        />
      </div>

      {/* THE VIRTUAL GREENS Title */}
      <div className="text-center mb-6">
        <h1 className="font-TVG-typography-h2 text-[#009444] text-2xl font-bold tracking-wider">
          THE VIRTUAL GREENS
        </h1>

        {/* Green horizontal divider line */}
        <div className="w-16 h-1 bg-[#009444] mx-auto mt-4"></div>
      </div>

      {/* Main Message */}
      <div className="text-center mb-8 max-w-md">
        <h2 className="font-TVG-typography-h1 text-black text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          MOBILE EXPERIENCE COMING SOON
        </h2>
        <p className="font-TVG-typography-default text-gray-600 text-lg leading-relaxed">
          We're crafting the perfect mobile experience for The Virtual Greens. Visit us on desktop for the full experience today.
        </p>
      </div>
    </div>
  );
};