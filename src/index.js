import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Suspense } from 'react';
import { Loader } from './components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Suspense fallback={<Loader />}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Suspense>
);