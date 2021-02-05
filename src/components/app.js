import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Publications from '../routes/publications';
import PostForm from '../routes/postForm';

const App = () => {
	return (
		<div id="app">
			<Header />
			<Router>
				<Home path="/" />
				<Publications path="/publications" />
				<PostForm path="/add-content" />
			</Router>
		</div>
	)
}

export default App