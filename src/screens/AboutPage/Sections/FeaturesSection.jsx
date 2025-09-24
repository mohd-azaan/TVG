import React from 'react';

const forYouFeatures = [
	'For people curious about golf but unsure where to start.',
	'For players looking to sharpen their swing.',
	'For hosts planning birthdays, parties, or big client events.',
	'For anyone who wants a different kind of night out.',
	'The game is just the beginning.',
	'The experience is what keeps people coming back.',
];

const amenityFeatures = [
	{
		icon: '/stairs_2_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: '2 Floors',
	},
	{
		icon: '/house_with_shield_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: '5 All-Weather Hitting Bays',
	},
	{
		icon: '/vrpano_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: 'VIP Private Screening',
	},
	{
		icon: '/wifi_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: 'Free Wifi',
	},
	{
		icon: '/restaurant_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: 'Restaurant Partners',
	},
	{
		icon: '/strategy_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24(1) 1.svg',
		text: 'Golf Lessons',
	},
	{
		icon: '/videogame_asset_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: 'Junior Golf Arcade Games',
	},
	{
		icon: '/local_bar_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: 'Rental Clubs',
	},
	{
		icon: '/golf_course_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: '275+ Golf Courses',
	},
	{
		icon: '/sports_soccer_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: 'Live Sports On Screens',
	},
	{
		icon: '/campaign_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: 'Screens Advertising',
	},
	{
		icon: '/cake_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24(1) 1.svg',
		text: 'Private Event Spaces',
	},
	{
		icon: '/credit_score_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: 'Card/Contactless Payments Only',
	},
	{
		icon: '/parking_sign_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: 'On-Site Basement Parking',
	},
	{
		icon: '/parking_meter_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg',
		text: 'VIP Paid Parking',
	},
];

const FeaturesSection = () => {
	return (
		<section className='relative w-full min-h-[400px] bg-[#102121] overflow-hidden'>
			<div className='relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw] py-[120px]'>
				{/* Desktop layout */}
				<div className='hidden lg:block'>
					{/* Top Section: Not a Golfer Yet? */}
					<div className='relative flex items-start justify-center max-w-[1360px] mx-auto mb-24'>
						<div className='w-[1400px] ml-8 text-left'>
							<h2 className='font-morganite font-black text-[clamp(56px,7vw,80px)] text-white uppercase tracking-[2px] -mb-2 leading-none'>
								Not a Golfer Yet?
								<br />
								<span className='text-[#009444]'>That's the Point</span>
							</h2>
							<h3 className='font-gilroy font-bold text-[17px] text-[#7ddb8a] uppercase tracking-wide mb-8 mt-3'>
								We built The Virtual Greens for you
							</h3>
							<div className='space-y-2 -mt-2'>
								{forYouFeatures.map((feature, index) => (
									<div key={index} className='flex items-center gap-3'>
										<img
											src='/assets/sports_golf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg'
											alt=''
											className='w-6 h-6 flex-shrink-0'
										/>
										<p className='font-gilroy font-normal text-[15px] text-[#ffffff] leading-normal whitespace-nowrap'>
											{feature}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className='w-[450px] h-[500px] flex-shrink-0 mr-2 mt-[-50px] ml-[200px]'>
							<img
								src='/golf-kit.svg'
								alt='Golf kit illustration'
								className='w-full h-full object-contain rounded-3xl'
							/>
						</div>
					</div>
				</div>

				{/* Bottom Section: Features and Amenities */}
				<div className='hidden lg:block'>
					<div className='relative flex items-start justify-center max-w-[1360px] mx-auto'>
						<div className='w-[1400px] ml-4 text-left'>
							<h2 className='font-morganite font-black text-[clamp(56px,7vw,80px)] text-white uppercase tracking-[2px] mb-1 text-left'>
								Features and <span className='text-[#009444]'>Amenities</span>
							</h2>

							<div className='mt-8 bg-[#0c1a1a] rounded-3xl p-6 md:p-8 lg:p-10'>
								<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4 w-full'>
									{amenityFeatures.map((amenity, index) => (
										<div key={index} className='flex items-center gap-4'>
											<img
												src={amenity.icon}
												alt=''
												className='w-7 h-7 flex-shrink-0'
											/>
											<span className='font-gilroy font-normal text-[16px] text-white text-left leading-normal'>
												{amenity.text}
											</span>
										</div>
									))}
								</div>
								<div className='mt-8 flex justify-center'>
									<button className='bg-transparent hover:bg-[#009444]/10 transition-colors rounded-full px-8 py-3 flex items-center gap-3 '>
										<img
											src='/assets/head_mounted_device_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg'
											alt='VR icon'
											className='w-7 h-7'
										/>
										<span className='font-gilroy font-semibold text-[16px] text-[#009444] uppercase leading-normal'>
											Virtual Tour
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
