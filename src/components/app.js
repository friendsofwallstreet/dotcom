import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Publications from '../routes/publication';

const App = () => {
	return (
		<div id="app">
			<Header />
			<Router>
				<Home path="/" />
				<Publications path="/publications" />
			</Router>
		</div>
	)
}

export default App