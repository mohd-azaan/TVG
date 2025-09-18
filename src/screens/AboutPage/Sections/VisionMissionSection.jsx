import React from 'react';

export const VisionMissionSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Column for Vision and Mission */}
        <div className="space-y-8">
          {/* Vision Card */}
          <div className="bg-[#f6f6f6] p-10 rounded-[30px]">
            <h2 className="font-morganite font-black text-8xl text-black uppercase tracking-wider mb-4">Our Vision</h2>
            <p className="font-gilroy font-medium text-xl text-[#757575] leading-relaxed">
              To lead the evolution of indoor golf in Saudi Arabia and become the go-to destination for those who play hard, relax better, and love the game, whatever their level.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#f6f6f6] p-10 rounded-[30px]">
            <h2 className="font-morganite font-black text-8xl text-black uppercase tracking-wider mb-4">Our Mission</h2>
            <p className="font-gilroy font-medium text-xl text-[#757575] leading-relaxed">
              To lower the barriers, upgrade the experience, and create a community where everyone feels right at home.
            </p>
          </div>
        </div>

        {/* Right Column for What We Believe */}
        <div className="bg-[#009444] text-white p-10 rounded-[30px] lg:mt-0">
          <h2 className="font-morganite font-black text-8xl uppercase tracking-wider mb-6">What We Believe</h2>
          <div className="font-gilroy font-medium text-xl space-y-6 leading-relaxed">
            <p>Golf should be easy to access, hard to leave, and always worth showing up for.</p>
            <p>We’re inspired by what golf represents. Focus, fun, discipline and a bit of friendly competition. But we’ve swapped the dress codes and country clubs for a more inclusive, welcoming vibe.</p>
            <p>Our team is made up of golfers, tech-heads, hospitality experts, and community builders. We are different, but we are all connected by one mission. Making golf more fun, more flexible, and more social.</p>
          </div>
        </div>

      </div>
    </section>
  );
};