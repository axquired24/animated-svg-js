import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Generator from '../routes/generator';

const App = () => (
	<div id="app">
		<Router>
			<Generator path="/" />
		</Router>
	</div>
)

export default App;
