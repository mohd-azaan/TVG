import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import '../global.css';
import './styleguide.css';

createRoot(document.getElementById('app')).render(
	<StrictMode>
		<App />
	</StrictMode>
);