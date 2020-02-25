import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'

import postReducer from './reducers/managePosts'

import App from './App';


const store = createStore(postReducer, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));