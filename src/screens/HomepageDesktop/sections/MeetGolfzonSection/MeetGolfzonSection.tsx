import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const features = [
  "Over 275+ real-world course simulations.",
  "Moving swing plates that mimic real terrain.",
  "Shot data and video feedback in real-time.",
  "Zero-latency results with every hit.",
  "Adjustable weather and course conditions.",
  "Left and right-handed support.",
];

export const MeetGolfzonSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              className="w-full h-auto object-cover rounded-[30px] shadow-lg hover:shadow-xl transition-shadow duration-300"
              alt="Indoor golf"
              src="/indoor-golf-1.png"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#009444] leading-relaxed tracking-wide">
                BUILT WITH THE BEST GOLF TECH IN THE WORLD
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-black text-black leading-tight sm:leading-[0.9] lg:leading-[90px] tracking-wide">
                MEET GOLFZON TWOVISIONNX
              </h2>
            </div>

            <div className="text-base sm:text-lg lg:text-xl font-medium text-[#757575] leading-relaxed">
              This is the world&apos;s most advanced golf simulator. Used by
              professional tours across Asia, our setup offers:
            </div>

            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img
                    className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 flex-shrink-0 mt-1"
                    alt="Sports golf"
                    src="/smash-it.svg"
                  />
                  <div className="text-base sm:text-lg lg:text-xl font-medium text-[#757575] leading-relaxed">
                    {feature}
                  </div>
                </div>
              ))}
            </div>

            <Button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#009444] hover:bg-[#007a3a] rounded-full h-auto text-lg font-semibold tracking-wide transition-colors duration-200">
              <span className="text-white">LEARN ABOUT OUR TECH</span>
              <ArrowRightIcon className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};