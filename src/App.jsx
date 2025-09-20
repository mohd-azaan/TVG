import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

// Lazy load all page components for code splitting
const HomepageDesktop = React.lazy(() => import('./screens/HomepageDesktop/HomepageDesktop').then(module => ({ default: module.HomepageDesktop })));
const AboutPage = React.lazy(() => import('./screens/AboutPage/AboutPage'));
const OurStoryPage = React.lazy(() => import('./screens/OurStoryPage/OurStoryPage'));
const PlayPage = React.lazy(() => import('./screens/PlayPage/PlayPage').then(module => ({ default: module.PlayPage })));
const LearnPage = React.lazy(() => import('./screens/LearnPage/LearnPage'));
const MembershipPage = React.lazy(() => import('./screens/MembershipPage/MembershipPage').then(module => ({ default: module.MembershipPage })));
const LeaguesPage = React.lazy(() => import('./screens/LeaguesPage/LeaguesPage'));
const EventsPage = React.lazy(() => import('./screens/EventsPage/EventsPage').then(module => ({ default: module.EventsPage })));
const RegistrationPage = React.lazy(() => import('./screens/RegistrationPage/RegistrationPage').then(module => ({ default: module.RegistrationPage })));
const SimulatorPage = React.lazy(() => import('./screens/SimulatorPage/SimulatorPage').then(module => ({ default: module.SimulatorPage })));
const PartnershipPage = React.lazy(() => import('./screens/PartnershipPage/PartnershipPage').then(module => ({ default: module.PartnershipPage })));
const ContactPage = React.lazy(() => import('./screens/ContactPage/ContactPage').then(module => ({ default: module.ContactPage })));
const FAQPage = React.lazy(() => import('./screens/FAQPage/FAQPage').then(module => ({ default: module.FAQPage })));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
	<div className="flex items-center justify-center min-h-screen bg-[#102121]">
		<div className="text-center">
			<div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#009444] mx-auto mb-4"></div>
			<p className="text-white text-lg font-medium">Loading...</p>
		</div>
	</div>
);

export const App = () => {
	return (
		<Router>
			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					<Route
						path='/about'
						element={
							<MainLayout>
								<AboutPage />
							</MainLayout>
						}
					/>
				<Route
					path='/our-story'
					element={
						<MainLayout>
							<OurStoryPage />
						</MainLayout>
					}
				/>
				<Route
					path='/play'
					element={
						<MainLayout>
							<PlayPage />
						</MainLayout>
					}
				/>
				<Route
					path='/learn'
					element={
						<MainLayout>
							<LearnPage />
						</MainLayout>
					}
				/>
				<Route
					path='/membership'
					element={
						<MainLayout>
							<MembershipPage />
						</MainLayout>
					}
				/>
				<Route
					path='/leagues'
					element={
						<MainLayout>
							<LeaguesPage />
						</MainLayout>
					}
				/>
				<Route
					path='/events'
					element={
						<MainLayout>
							<EventsPage />
						</MainLayout>
					}
				/>
				<Route
					path='/registration'
					element={
						<MainLayout>
							<RegistrationPage />
						</MainLayout>
					}
				/>
				<Route
					path='/simulator'
					element={
						<MainLayout>
							<SimulatorPage />
						</MainLayout>
					}
				/>
				<Route
					path='/partnership'
					element={
						<MainLayout>
							<PartnershipPage />
						</MainLayout>
					}
				/>
				<Route
					path='/contact'
					element={
						<MainLayout>
							<ContactPage />
						</MainLayout>
					}
				/>
				<Route
					path='/faq'
					element={
						<MainLayout>
							<FAQPage />
						</MainLayout>
					}
				/>
				<Route
					path='/'
					element={
						<MainLayout>
							<HomepageDesktop />
						</MainLayout>
					}
				/>
				<Route
					path='*'
					element={
						<MainLayout>
							<HomepageDesktop />
						</MainLayout>
					}
				/>
				</Routes>
			</Suspense>
		</Router>
	);
};
