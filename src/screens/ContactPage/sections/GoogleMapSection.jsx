// src/screens/ContactPage/sections/GoogleMapSection.jsx
// Google Maps section with embedded map image showing location
// Features full-width map with rounded corners
// RELEVANT FILES: ContactPage.jsx, ContactPage.css, google-maps-screenshot.png

import React from 'react';

export const GoogleMapSection = () => {
	return (
		<>
			{/* Map positioned exactly as in Figma - inside the contact section */}
			<div className="absolute left-[280px] top-[912px] w-[1360px] h-[426px]">
				<div
					className="google-map-section bg-center bg-cover bg-no-repeat w-full h-full rounded-[30px]"
					style={{
						backgroundImage: "url('/google-maps-screenshot.png')"
					}}
				>
					{/* Optional: Add clickable overlay for map interaction */}
					<div className="w-full h-full rounded-[30px] hover:cursor-pointer">
						{/* Map content - could add interactive map here in the future */}
					</div>
				</div>
			</div>
		</>
	);
};