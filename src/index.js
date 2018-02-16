import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

function render(Component) {
	ReactDOM.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
	document.getElementById('root'));
}

render(App);

if(module.hot) {
	module.hot.accept('./App', () => { render(App);});
}
registerServiceWorker();

