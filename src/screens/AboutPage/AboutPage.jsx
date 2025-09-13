// src/screens/AboutPage/AboutPage.jsx
// Complete About page component featuring hero section, features, testimonials, and footer
// This component displays the full About page layout with all sections based on provided design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, colors.txt

import React from 'react';
import '../../styleguide.css';
import './AboutPage.css';

// Temporary placeholder components - will be created as separate files
const FooterMenuItem = ({ className, text }) => (
	<div className={className}>{text}</div>
);

const CtaBtnOutlineDark = ({ className, divClassName, text, status, override }) => (
	<button className={`${className} cta-btn-outline`}>
		{override && override}
		<span>{text}</span>
	</button>
);

const CtaButton = ({ className, text, status, override }) => (
	<button className={`${className} cta-button`}>
		<span>{text}</span>
		{override && override}
	</button>
);

const TopNavItem = ({ className, text, status, activeButtonBorderClassName, divClassName, to }) => (
	<a href={to} className={`${className} top-nav-item`}>
		{text}
	</a>
);

const Lessons = ({ className, text, status, overlapGroupClassName, override }) => (
	<div className={`${className} lessons`}>
		{text}
		{override && override}
	</div>
);

const Size24 = ({ className, color }) => (
	<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill={color}>
		<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
	</svg>
);

const ChevronDown = ({ className }) => (
	<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M7 10l5 5 5-5z"/>
	</svg>
);

const WhatsappLogoVariantSvgrepoCom1 = ({ className }) => (
	<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
	</svg>
);

export const AboutPage = () => {
	return (
		<div className='about-desktop'>
			<div className='div'>
				<div className='overlap'>
					<div className='content-wrap'>
						<div className='boxed-container' />
					</div>

					<footer className='footer'>
						<div className='copyrights'>
							<p className='p'>2025 The Virtual Greens. All rights reserved.</p>
						</div>

						<div className='overlap-2'>
							<div className='social-icons-placeholder'>
								{/* Social icons placeholder */}
							</div>

							<div className='column'>
								<FooterMenuItem
									className='footer-menu-item-instance'
									text='Events'
								/>
								<FooterMenuItem
									className='design-component-instance-node'
									text='Membership'
								/>
								<FooterMenuItem className='footer-menu-item-2' text='Leagues' />
								<div className='overlap-group-2'>
									<FooterMenuItem
										className='footer-menu-item-3'
										text='Lessons'
									/>
									<FooterMenuItem
										className='footer-menu-item-4'
										text='Plan your visit'
									/>
								</div>

								<div className='text-wrapper-2'>INDOOR GOLF</div>
							</div>
						</div>

						<CtaBtnOutlineDark
							className='CTA-btn-outline-dark-icon'
							divClassName='CTA-btn-outline-dark-instance'
							override={<WhatsappLogoVariantSvgrepoCom1 className='whatsapp-logo-variant-svgrepo-com-1-instance' />}
							status='default'
							text='Subscribe To Whatsapp Channel'
						/>
						<p className='text-wrapper-3'>
							Stay in the loop on tournaments, events, and deals
						</p>

						<div className='text-wrapper-4'>WHAT'S HAPPENING AT TVG</div>

						<div className='column-2'>
							<FooterMenuItem
								className='footer-menu-item-5'
								text='Contact us'
							/>
							<FooterMenuItem
								className='footer-menu-item-6'
								text='Terms &amp; Conditions'
							/>
							<FooterMenuItem
								className='footer-menu-item-7'
								text='Partner with us'
							/>
							<FooterMenuItem
								className='footer-menu-item-8'
								text='Own/Rent simulators'
							/>
							<FooterMenuItem className='footer-menu-item-3' text='About us' />
							<div className='text-wrapper-2'>COMPANY</div>
						</div>

						<p className='the-virtual-greens'>
							The Virtual Greens is Riyadh's first indoor golf simulator lounge,
							blending cutting-edge tech with a laid-back social vibe. Whether
							you&#39;re here to play, practice, or party, we make golf fun,
							accessible, and unforgettable.
						</p>

						<div className='TVG-logo-placeholder'>
							{/* TVG Logo placeholder */}
						</div>
					</footer>

					<div className='testimonials'>
						<div className='overlap-3'>
							<div className='shape-placeholder'>
								{/* Shape placeholder */}
							</div>

							<div className='quote'>
								<div className='text-wrapper-5'>Ambassador, John Doe</div>

								<p className='lorem-ipsum-dolor'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Suspendisse&nbsp;&nbsp;tortor erat, pretium et mattis quis,
									ultrices eget velit. Vivamus sit&nbsp;&nbsp;amet egestas
									justo. Nam sagittis, justo vitae sagittis auctor, mi
									diam&nbsp;&nbsp;laoreet elit, aliquet dignissim orci turpis
									vitae eros. Nulla eget&nbsp;&nbsp;pretium diam, vel egestas
									dui. Ut arcu eros, fermentum sit amet dolor a, elementum
									vehicula purus.
								</p>

								<div className='text-wrapper-6'>"</div>
							</div>

							<div className='ambassador'>
								<div className='ambassador-image-placeholder'>
									{/* Ambassador image placeholder */}
								</div>
							</div>
						</div>

						<div className='ready'>
							<CtaButton
								className='CTA-button-instance'
								override={<Size24 className='arrow-right' color='white' />}
								status='default'
								text='PLAN YOUR VISIT'
							/>
							<div className='ready-to-visit'>READY TO VISIT?</div>
						</div>
					</div>

					<div className='features'>
						<div className='features-2'>
							{/* Features grid - will be populated with actual feature items */}
							<div className='feature'>
								<div className='text-wrapper-7'>VIP Paid Parking</div>
								<div className='vector-wrapper'>
									<div className='vector-placeholder'></div>
								</div>
							</div>

							<div className='feature-2'>
								<div className='text-wrapper-7'>On-Site Basement Parking</div>
								<div className='vector-wrapper'>
									<div className='vector-placeholder'></div>
								</div>
							</div>

							{/* More features... */}
						</div>

						<p className='features-and'>
							<span className='span'>FEATURES AND </span>
							<span className='text-wrapper-12'>AMENITIES</span>
						</p>

						<div className='for-you'>
							<div className='feature-16'>
								<p className='text-wrapper-13'>
									The experience is what keeps people coming back.
								</p>
								<div className='sports-golf'>
									<div className='vector-placeholder'></div>
								</div>
							</div>

							<div className='feature-17'>
								<p className='text-wrapper-13'>
									The game is just the beginning.
								</p>
								<div className='sports-golf'>
									<div className='vector-placeholder'></div>
								</div>
							</div>

							{/* More feature items... */}
						</div>

						<div className='overlap-4'>
							<p className='we-built-the-virtual'>
								WE BUILT THE VIRTUAL GREENS FOR YOU
							</p>

							<p className='not-a-golfer-yet'>
								<span className='span'>
									NOT A GOLFER YET?
									<br />
								</span>
								<span className='text-wrapper-12'>THAT'S THE POINT</span>
							</p>
						</div>

						<div className='indoor-golf-placeholder'>
							{/* Indoor golf image placeholder */}
						</div>
					</div>

					<div className='vision'>
						<div className='overlap-5'>
							<div className='text-box'>
								<p className='text-wrapper-14'>
									We're proud to contribute and support the national movement
									towards healthier lifestyles, diversified entertainment, and a
									thriving Saudi sports culture by growing the game, inspiring
									new players, and offering world-class sporting experiences in
									the heart of Riyadh.
								</p>
							</div>

							<div className='in-line-with'>IN LINE WITH</div>
							<div className='vision-2'>VISION 2030</div>
						</div>

						<div className='overlap-6'>
							<div className='saudi-vision-logo-placeholder'>
								{/* Saudi Vision 2030 logo placeholder */}
							</div>
							<div className='shape-placeholder-2'>
								{/* Shape placeholder */}
							</div>
						</div>
					</div>

					<div className='world-class-tech'>
						<div className='indoor-golf-image-placeholder'>
							{/* Indoor golf image placeholder */}
						</div>

						<CtaButton
							className='CTA-button-3'
							override={<Size24 className='arrow-right' color='white' />}
							status='default'
							text='LEARN ABOUT OUR TECH'
						/>

						<div className='we-use-the-most-wrapper'>
							<p className='we-use-the-most'>
								We use the most advanced system on the market to replicate the
								real-world feel of over 250 legendary courses. It's precise,
								fast, and immersive down to every slope, bounce, and swing.
								<br />
								From auto-tee to instant shot feedback, it&#39;s the closest
								thing to stepping onto a real course. (Minus the sunburn).
							</p>
						</div>

						<div className='overlap-7'>
							<div className='world-class-tech-2'>WORLD-CLASS TECH</div>
							<div className='powered-by'>POWERED BY</div>
						</div>
					</div>

					<div className='vision-mission'>
						<div className='text-box-2'>
							<div className='what-we-believe'>WHAT WE BELIEVE</div>

							<p className='golf-should-be-easy'>
								Golf should be easy to access, hard to leave, and always worth
								showing up for.
								<br />
								<br />
								We're inspired by what golf represents. Focus, fun, discipline
								and a bit of friendly competition. But we've swapped the dress
								codes and country clubs for a more inclusive, welcoming vibe.
								<br />
								<br />
								Our team is made up of golfers, tech-heads, hospitality experts,
								and community builders. We are different, but we are all
								connected by one mission. Making golf more fun, more flexible,
								and more social.
							</p>
						</div>

						<div className='mission'>
							<div className='text-wrapper-15'>OUR MISSION</div>
							<div className='div-wrapper'>
								<p className='text-wrapper-16'>
									To lower the barriers, upgrade the experience, and create a
									community where everyone feels right at home.
								</p>
							</div>
						</div>

						<div className='vision-3'>
							<div className='text-wrapper-15'>OUR VISION</div>
							<div className='div-wrapper'>
								<p className='text-wrapper-16'>
									To lead the evolution of indoor golf in Saudi Arabia and
									become the go-to destination for those who play hard, relax
									better, and love the game, whatever their level.
								</p>
							</div>
						</div>
					</div>

					<div className='hero'>
						<div className='overlap-8'>
							<div className='rectangle' />

							<div className='shape-hero-placeholder'>
								{/* Hero shape placeholder */}
							</div>

							<div className='step-into-a-place-wrapper'>
								<div className='step-into-a-place-placeholder'>
									{/* Step into a place image placeholder */}
								</div>
							</div>

							<div className='where-golf-people'>WHERE GOLF PEOPLE BELONG</div>

							<div className='freepik-background-placeholder'>
								{/* Freepik background image placeholder */}
							</div>
						</div>
					</div>
				</div>

				{/* Header will be handled by MainLayout in the actual implementation */}
			</div>
		</div>
	);
};

export default AboutPage;