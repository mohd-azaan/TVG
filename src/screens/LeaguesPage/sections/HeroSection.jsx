
import React from "react";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-[591px] bg-[#272727] overflow-clip">
      <div className="absolute w-[1920px] h-[335px] left-0 top-[558px] bg-[#006f33]" />
      <div className="absolute top-[357px] left-1/2 translate-x-[-50%]">
        <p className="font-['Gilroy-Medium'] text-[24px] text-[#dedede] w-[800px] leading-[1.2]">
          Most answers can be found below, but if you still have a question, our team is just{" "}
          <span className="text-[#009444]">a message away</span>.
        </p>
      </div>
      <div className="absolute top-[237px] left-[280px] w-[655px]">
        <h1 className="font-['Morganite-Black'] text-[110px] text-white uppercase tracking-[2.2px] leading-[100px]">
          Frequently Asked
          <br />
          Questions
        </h1>
      </div>
    </div>
  );
};
