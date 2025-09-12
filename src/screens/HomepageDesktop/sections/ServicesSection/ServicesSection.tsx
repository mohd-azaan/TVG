import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const serviceCards = [
  {
    title: "GOLF SIMULATOR BAYS",
    description:
      "5 Golf Simulator Bays (open, private, and VIP) with the world's most advanced Golfzon TwoVisionNX tech.",
    image: "/advanced-simulators-1-5.png",
  },
  {
    title: "FOOD & DRINK",
    description: "Because great rounds deserve great bites.",
    image: "/advanced-simulators-1-4.png",
  },
  {
    title: "LESSONS & COACHING",
    description: "Fun, fast-paced options from mini golf to longest drive battles.",
    image: "/advanced-simulators-1-3.png",
  },
];

const additionalServices = [
  {
    title: "MEMBERSHIPS",
    description: "More golf, more perks.",
    image: "/advanced-simulators-1-2.png",
  },
  {
    title: "EVENTS & TOURNAMENTS",
    description: "Social or corporate, we make them unforgettable.",
    image: "/advanced-simulators-1-1.png",
  },
  {
    title: "SIMULATOR OWNERSHIP/RENTAL",
    description: "Take the game to your space",
    image: "/advanced-simulators-1-5.png",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-black leading-tight sm:leading-[0.9] lg:leading-[90px] tracking-wide">
                <span className="text-black">
                  WE'RE NOT JUST ABOUT GOLF
                  <br />
                </span>
                <span className="text-[#006f33]">WE'RE ABOUT GOOD TIMES</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#009444] leading-relaxed tracking-wide">
                A PLACE FOR THE GAME. A SPACE FOR EVERYONE
              </p>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
            <p className="text-base sm:text-lg lg:text-xl font-medium text-[#757575] leading-relaxed">
              At The Virtual Greens, the experience is what matters most. It's
              golf, but not like you've seen it before. We've taken the country
              club perks, stripped away the stiff vibe, and built a space where
              you can compete, connect, or just kick back.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              <Button className="bg-[#009444] hover:bg-[#007a3a] text-white rounded-full px-8 py-4 h-auto text-lg font-semibold tracking-wide inline-flex items-center gap-3 transition-colors duration-200">
                BOOK A BAY
                <ArrowRightIcon className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-gray-50 rounded-full px-8 py-4 h-auto text-lg font-semibold tracking-wide transition-colors duration-200"
              >
                LEARN ABOUT LESSONS
              </Button>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
          {serviceCards.map((service, index) => (
            <Card
              key={`service-${index}`}
              className="h-[350px] sm:h-[400px] lg:h-[450px] rounded-[30px] bg-gradient-to-b from-gray-100 to-gray-200 border-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative h-full">
                <img
                  className="absolute w-full h-[300px] sm:h-[350px] lg:h-[400px] top-[-150px] sm:top-[-180px] lg:top-[-200px] left-0 rounded-[30px] object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={service.title}
                  src={service.image}
                />
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 space-y-3 sm:space-y-4 bg-gradient-to-t from-white via-white/95 to-transparent">
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg font-medium text-[#757575] leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {additionalServices.map((service, index) => (
            <Card
              key={`additional-service-${index}`}
              className="h-[350px] sm:h-[400px] lg:h-[450px] rounded-[30px] bg-gradient-to-b from-gray-100 to-gray-200 border-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative h-full">
                <img
                  className="absolute w-full h-[300px] sm:h-[350px] lg:h-[400px] top-[-150px] sm:top-[-180px] lg:top-[-200px] left-0 rounded-[30px] object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={service.title}
                  src={service.image}
                />
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 space-y-3 sm:space-y-4 bg-gradient-to-t from-white via-white/95 to-transparent">
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-black leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg font-medium text-[#757575] leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
