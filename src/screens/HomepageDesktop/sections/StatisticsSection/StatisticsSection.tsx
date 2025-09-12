import React from "react";

export const StatisticsSection = (): JSX.Element => {
  const statisticsData = [
    {
      number: "98",
      text: "Active Members",
      hasPlus: false,
      isLarge: false,
    },
    {
      number: "200",
      text: "Clients Served",
      hasPlus: true,
      isLarge: true,
    },
    {
      number: "800",
      text: "Rounds Played",
      hasPlus: true,
      isLarge: true,
    },
    {
      number: "3500",
      text: "Simulator Hours Logged",
      hasPlus: true,
      isLarge: true,
    },
    {
      number: "27",
      text: "Tournaments Hosted",
      hasPlus: false,
      isLarge: false,
    },
    {
      number: "150",
      text: "In Prizes Distributed",
      hasPlus: false,
      isLarge: true,
      hasSuffix: "K",
      hasSpacing: true,
    },
  ];

  return (
    <section className="w-full bg-[#102121] py-16 sm:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Background Shape */}
        <img
          className="absolute w-full max-w-[917px] h-[300px] sm:h-[400px] lg:h-[426px] top-8 sm:top-12 lg:top-16 left-0 opacity-20 lg:opacity-100"
          alt="Background shape"
          src="/shape14-2.svg"
        />

        {/* Header */}
        <div className="relative z-10 text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-black text-white leading-tight sm:leading-[0.9] lg:leading-[90px] tracking-wide mb-4 sm:mb-6">
            BY THE NUMBERS
          </h2>
          <p className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#7ddb8a] leading-relaxed tracking-wide">
            BECAUSE STATS MATTER, EVEN OFF THE COURSE
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 relative z-10">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center"
            >
              <div className="relative">
                {stat.isLarge ? (
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black text-[#8df0a0] leading-tight tracking-wide">
                    {stat.hasSpacing && (
                      <span className="font-black text-[#8df0a0] tracking-[2.00px]">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    )}
                    <span className="tracking-[0] leading-[0.1px] font-black text-[#8df0a0]">
                      {stat.number}
                      {stat.hasSuffix ? " " : ""}
                    </span>
                    {stat.hasPlus && (
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] tracking-[0.98px] leading-[60px] font-black text-[#8df0a0]">
                        +
                      </span>
                    )}
                    {stat.hasSuffix && (
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] tracking-[0.98px] leading-[60px] font-black text-[#8df0a0]">
                        {stat.hasSuffix}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black text-[#8df0a0] leading-tight tracking-wide">
                    {stat.number}
                  </div>
                )}
              </div>

              <div className="text-sm sm:text-base lg:text-lg font-bold text-white text-center leading-relaxed max-w-[120px] sm:max-w-[150px]">
                {stat.text}
              </div>
            </div>
          ))}
        </div>

        {/* Saudi Riyal Symbol */}
        <img
          className="absolute w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 top-[200px] sm:top-[220px] lg:top-[248px] right-4 sm:right-8 lg:right-[194px]"
          alt="Saudi riyal symbol"
          src="/saudi-riyal-symbol-2-1-1.svg"
        />
      </div>
    </section>
  );
};