import React, { Component } from 'react';

import BlogContainer from './components/BlogContainer';


import './styles/App.css';

export default class App extends Component {

	componentDidMount = () => {
		fetch('https://fintros-news.herokuapp.com/api/posts/refresh/')
		.then(response => response.json())
		.then ()
	}

	render(){
		return (
			<div>
				<BlogContainer/>		
			</div>
		);
	}
}



