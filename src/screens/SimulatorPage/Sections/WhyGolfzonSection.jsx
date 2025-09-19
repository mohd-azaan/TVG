import React from 'react';

const imgPlaySwing21 = "/play-swing-2-1-3.png";
const imgPlaySwing22 = "/play-swing-2-1-10.png";
const imgPlaySwing23 = "/twovision-play-legends.png";
const imgPlaySwing24 = "/twovision-customization.png";
const imgPlaySwing25 = "/twovision-dial-game.png";
const imgPlaySwing26 = "/twovision-zero-latency.png";
const imgPlaySwing27 = "/advanced-simulators-1-1.png";
const imgPlaySwing28 = "/golfzon-screenshot.png";
const imgPlaySwing29 = "/twovision-swing-plate.png";

const PlayArrowFilled = () => (
    <svg
        width='22'
        height='22'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M8 5v14l11-7L8 5z' fill='#00A86B' />
    </svg>
);

export const WhyGolfzonSection = () => {
  const features = [
    {
      src: imgPlaySwing27,
      title: 'Cutting-Edge Sensors',
    },
    {
      src: imgPlaySwing28,
      title: 'Unreal Engine-5 Graphics',
    },
    {
      src: imgPlaySwing29,
      title: 'Moving Swing Plates',
    },
    {
      src: imgPlaySwing24,
      title: 'User-Friendly Software',
    },
    {
      src: imgPlaySwing25,
      title: 'Auto Tee-Up',
    },
    {
      src: imgPlaySwing26,
      title: 'Zero Latency',
    },
  ];

  const videos = [
    {
      src: imgPlaySwing21,
    },
    {
      src: imgPlaySwing22,
    },
    {
      src: imgPlaySwing23,
    },
  ];

  return (
    <section className='w-full bg-white py-14 lg:py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>
        <div className='text-center mb-8'>
          <h2 className='mt-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[80px] font-morganite font-black tracking-wide leading-tight uppercase'>
            Why Golfzon?
          </h2>
          <h3 className='mt-4 text-base sm:text-lg tracking-[0.1em] uppercase font-gilroy font-bold text-[#009444]'>
            The #1 golf simulator brand globally
          </h3>
          <h3 className='mt-1 text-base sm:text-lg tracking-[0.1em] uppercase font-gilroy font-bold text-[#009444]'>
            Trusted by pros and recreational players alike
          </h3>
        </div>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <div key={index} className="rounded-2xl bg-gray-50 p-1">
              <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-t-2xl">
                  <img src={feature.src} alt={feature.title} className="w-full h-full object-cover block" />
                </div>
                <div className="h-16 flex items-center justify-center bg-white px-4 rounded-b-2xl">
                  <div className="text-center font-gilroy font-bold text-base tracking-wide">
                    {feature.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-14 text-center'>
          <h3 className='text-3xl xl:text-[80px] font-extrabold font-morganite tracking-wide'>
            SEE IT IN ACTION
          </h3>
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {videos.map((video, idx) => (
              <div
                key={idx}
                className='relative rounded-lg overflow-hidden shadow-lg group cursor-pointer'
              >
                <img
                  src={video.src}
                  alt={`video-${idx}`}
                  className='w-full h-44 object-cover'
                />
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <div className='w-14 h-14 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-lg'>
                    <PlayArrowFilled />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};