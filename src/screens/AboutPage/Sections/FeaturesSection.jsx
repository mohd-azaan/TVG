import React from 'react';

const forYouFeatures = [
  "For people curious about golf but unsure where to start.",
  "For players looking to sharpen their swing.",
  "For hosts planning birthdays, parties, or big client events.",
  "For anyone who wants a different kind of night out.",
  "The game is just the beginning.",
  "The experience is what keeps people coming back."
];

const amenityFeatures = [
    { icon: '/assets/stairs_2_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: '2 Floors' },
    { icon: '/assets/house_with_shield_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: '5 All-Weather Hitting Bays' },
    { icon: '/assets/vrpano_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: 'VIP Private Screening' },
    { icon: '/assets/wifi_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: 'Free Wifi' },
    { icon: '/assets/restaurant_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: 'Restaurant Partners' },
    { icon: '/assets/strategy_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24(1) 1.svg', text: 'Golf Lessons' },
    { icon: '/assets/videogame_asset_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: 'Junior Golf Arcade Games' },
    { icon: '/assets/local_bar_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: 'Rental Clubs' },
    { icon: '/assets/golf_course_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: '275+ Golf Courses' },
    { icon: '/assets/sports_soccer_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: 'Live Sports On Screens' },
    { icon: '/assets/campaign_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: 'Screens Advertising' },
    { icon: '/assets/cake_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24(1) 1.svg', text: 'Private Event Spaces' },
    { icon: '/assets/credit_score_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: 'Card/Contactless Payments Only' },
    { icon: '/assets/parking_sign_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: 'On-Site Basement Parking' },
    { icon: '/assets/parking_meter_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg', text: 'VIP Paid Parking' }
];

export const FeaturesSection = () => {
  return (
    <section className='w-full bg-[#102121] py-16 lg:py-24'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Not a Golfer Yet? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <h2 className='font-morganite font-black text-7xl md:text-8xl text-white uppercase tracking-wider'>
              Not a Golfer Yet?<br />
              <span className='text-[#009444]'>That’s the Point</span>
            </h2>
            <h3 className='font-gilroy font-bold text-xl text-[#7ddb8a] uppercase mt-8 mb-6'>
              We built The Virtual Greens for you
            </h3>
            <div className="space-y-3">
              {forYouFeatures.map((feature, index) => (
                <div key={index} className='flex items-start gap-4'>
                  <img src='/assets/sports_golf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg' alt='' className='w-7 h-7 mt-1 flex-shrink-0' />
                  <p className='font-gilroy text-lg text-gray-300'>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/indoor-golf-1.png" alt="Man playing indoor golf" className="rounded-3xl w-full h-auto object-cover max-w-lg" />
          </div>
        </div>

        {/* Bottom Section: Features and Amenities */}
        <div className="mt-24 lg:mt-32 text-center">
          <h2 className='font-morganite font-black text-7xl md:text-8xl text-white uppercase tracking-wider'>
            Features and <span className='text-[#009444]'>Amenities</span>
          </h2>

          <div className="mt-12 bg-[#0c1a1a] rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 max-w-6xl mx-auto">
              {amenityFeatures.map((amenity, index) => (
                <div key={index} className='flex items-center gap-4'>
                  <img src={amenity.icon} alt="" className='w-7 h-7 flex-shrink-0' />
                  <span className='font-gilroy text-lg text-white text-left'>{amenity.text}</span>
                </div>
              ))}
            </div>
            <div className='mt-12 flex justify-center'>
              <button className='bg-transparent hover:bg-[#009444]/10 transition-colors rounded-full px-8 py-3 flex items-center gap-3 border-2 border-[#009444]'>
                <img src='/assets/head_mounted_device_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg' alt='VR icon' className='w-7 h-7' />
                <span className='font-gilroy font-semibold text-base text-[#009444] uppercase'>Virtual Tour</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};