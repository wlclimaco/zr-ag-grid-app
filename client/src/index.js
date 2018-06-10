//REDUX STUFF
//import 'materialize-css/dist/css/materialize.min.css';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';


//const store = createStore(() => [], {}, applyMiddleware()); args[3]=[reducer,  , middleware]
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
