import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomepageDesktop } from './screens/HomepageDesktop/HomepageDesktop';
import AboutPage from './screens/AboutPage/AboutPage';
import { MainLayout } from './layouts/MainLayout';

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/about' element={<AboutPage />} />
				<Route
					path='/*'
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
