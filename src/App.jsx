import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomepageDesktop } from './screens/HomepageDesktop/HomepageDesktop';
import AboutPage from './screens/AboutPage/AboutPage';
import OurStoryPage from './screens/OurStoryPage/OurStoryPage';
import PlayPage from './screens/PlayPage/PlayPage';
import LearnPage from './screens/LearnPage/LearnPage';
import MembershipPage from './screens/MembershipPage/MembershipPage';
import LeaguesPage from './screens/LeaguesPage/LeaguesPage';
import EventsPage from './screens/EventsPage/EventsPage';
import RegistrationPage from './screens/RegistrationPage/RegistrationPage';
import SimulatorPage from './screens/SimulatorPage/SimulatorPage';
import PartnershipPage from './screens/PartnershipPage/PartnershipPage';
import ContactPage from './screens/ContactPage/ContactPage';
import FAQPage from './screens/FAQPage/FAQPage';
import { MainLayout } from './layouts/MainLayout';

export const App = () => {
	return (
		<Router>
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
		</Router>
	);
};
