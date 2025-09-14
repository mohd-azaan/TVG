// src/screens/PartnershipPage/sections/IndoorMovementSection.jsx
// Indoor Movement section with green background highlighting market statistics
// Features large title and descriptive text about the future of indoor golf
// RELEVANT FILES: PartnershipPage.jsx, PartnershipPage.css, styleguide.css

import React from 'react';

export const IndoorMovementSection = () => {
	return (
		<section className="indoor-movement-section bg-[#009444] py-[40px]">
			{/* Container */}
			<div className="max-w-[1360px] mx-auto px-[110px]">
				{/* Content box with padding and flex layout */}
				<div className="bg-[#009444] p-[40px] rounded-[30px] flex gap-[20px] items-start justify-start h-[216px]">
					{/* Title section */}
					<div className="w-[535px]">
						<h2 className="indoor-movement-title">
							THE INDOOR MOVEMENT
						</h2>
					</div>

					{/* Text section */}
					<div className="w-[655px]">
						<p className="indoor-movement-text">
							By 2028, reports estimates that 80% of golf rounds will be played indoors.
							Golf is currently positioned as one of the most popular sports in the world.
							Despite this there is still tremendous opportunity; we are currently on the cusp
							of golf next participation boom fuelled by increasing indoor popularity,
							and The Virtual Greens is leading the way.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};