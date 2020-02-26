import React, { Component } from 'react'
import styled from 'styled-components'


export default class BlogPost extends Component {

	componentDidMount = () => {
		// this.props.getPicturesforPost(this.props.post)
	}
	
	handleClick = event => {
		window.location.href = this.props.post.url
	}

	render(){
		
		return (
			<div onClick={this.handleClick}>
				{this.props.post.image_link ? <Img src={this.props.post.image_link}/> : <Img src={require('../assets/hackernews.png')}/>}
				<Title>{this.props.post.title}</Title>
				<P>{this.props.post.author}</P>
			</div>
		)
	}
}

const Title = styled.h3`
  font-size: 1.5em;
	font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
`


const Img = styled.img`
	list-style-type: none;
	float: left;
	height: 60px;
  margin: 0 15px 0 0;
`
const P = styled.p`
	font: 200 12px/1.5 Georgia, Times New Roman, serif;
`