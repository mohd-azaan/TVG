import React from 'react';

// Using the exact, specific asset URLs from the Figma design for the decorative background.
const imgGroup = "http://localhost:3845/assets/d230ca1d6b764f5d8b3db692c524015d9597e87f.svg";
const imgVector = "http://localhost:3845/assets/055c39ab8d25d54bc5a606ccafb013e90b0a2731.svg";
const imgVector1 = "http://localhost:3845/assets/555294d2bd71056770063a68ff71175764b452f7.svg";
const imgVector2 = "http://localhost:3845/assets/660b5111503e1fcd4bc9a0af0bb5e4171f7753d5.svg";

export const HeroSection = () => {
  return (
    <div className="bg-[#272727] relative w-full overflow-hidden" style={{ height: '591px' }}>
      {/* Green background shape */}
      <div className="absolute bg-[#006f33] h-[335px] left-0 top-[558px] w-full" />

      {/* Decorative background waves - literal implementation from Figma */}
      <div className="absolute flex items-center justify-center pointer-events-none" style={{ height: '1454px', width: '2102px', top: '34px', left: '342px' }}>
        <div className="transform rotate-[348deg]">
          <div className="relative h-[1080px] w-[1920px] overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute mix-blend-screen" style={{ inset: '33.68% -0.3% 13.63% 6.06%' }}>
                    <img alt="background shape 1" className="block max-w-none w-full h-full" src={imgGroup} />
                </div>
                <div className="absolute mix-blend-screen" style={{ inset: '44.32% 32.92% 37.84% 31.87%' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex-none w-[165.5px] h-[669.74px] transform rotate-[272.33deg]">
                            <img alt="background shape 2" className="block max-w-none w-full h-full" src={imgVector} />
                        </div>
                    </div>
                </div>
                 <div className="absolute mix-blend-screen" style={{ inset: '46.84% 39.17% 40.37% 38.12%' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex-none w-[120.66px] h-[431.6px] transform rotate-[272.33deg]">
                            <img alt="background shape 3" className="block max-w-none w-full h-full" src={imgVector1} />
                        </div>
                    </div>
                </div>
                <div className="absolute" style={{ inset: '41.71% 15.3% 20.41% 20.79%' }}>
                  <img alt="background shape 4" className="block max-w-none w-full h-full" src={imgVector2} />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-[1920px] mx-auto h-full">
        {/* Title */}
        <div className="absolute w-[655px]" style={{ left: '280px', top: '237px' }}>
          <h1 className="font-morganite font-black text-[110px] text-white uppercase leading-[100px] tracking-wider">
            Contact<br />
            The Virtual Greens
          </h1>
        </div>
        {/* Description */}
        <div className="absolute w-[800px]" style={{ left: 'calc(50% + 283px)', top: '307px', transform: 'translateX(-50%)' }}>
          <div className="font-gilroy font-medium text-[24px] text-[#dedede] leading-normal">
            <p>Experience Riyadh’s home of indoor golf live and in full swing.</p>
            <p className="mt-4">Have a question, comments, concerns, or compliments? — We’d love to hear from you!</p>
          </div>
        </div>
      </div>
    </div>
  );
};