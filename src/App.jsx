import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomepageDesktop } from './screens/HomepageDesktop/HomepageDesktop';
import { MainLayout } from './layouts/MainLayout';

export const App = () => {
	return (
		<Router>
			<Routes>
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
