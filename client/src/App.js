import React, { Component } from 'react';

import BlogContainer from './components/BlogContainer';


import './styles/App.css';

export default class App extends Component {

	componentDidMount = () => {
		fetch('api/posts/refresh/', {
			method: "POST",
			headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
			}
		})
	}

	render(){
		return (
			<div>
				<BlogContainer/>		
			</div>
		);
	}
}



